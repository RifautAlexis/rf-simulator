import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { Interval } from "@nestjs/schedule";
import { LowdbService } from "src/core/database/lowdb.service";
import { SimulationGateway } from "./simulation.gateway";
import { ModuleConfig, ModuleKind } from "src/common/models/config";

@Injectable()
export class SimulationService implements OnApplicationBootstrap {
  private currentModuleSlot = 1;
  private isRunning = true; // Flag to control the simulation loop

  constructor(
    private readonly dbService: LowdbService,
    private readonly simulationGateway: SimulationGateway
  ) {}

  async onApplicationBootstrap() {
    await this.validateConfig();
    // this.startSimulation();
    // this.emitToClients();
  }

  async validateConfig() : Promise<boolean> {
    const config = await this.dbService.getConfig();

    if (!config || config.length === 0) {
      this.stopSimulation();
      console.error("No configuration found. Please set up the config.");
      return false;
    }

    const requiredProperties: (keyof ModuleConfig)[] = Object.keys({} as ModuleConfig) as (keyof ModuleConfig)[];

    const missingPropertiesSlots = config
      .filter((module) => requiredProperties.some((prop) => !(prop in module)))
      .map((module) => module.slot);

    if (missingPropertiesSlots.length > 0) {
      this.stopSimulation();
      console.error(
        `Modules with missing properties found in slots: ${missingPropertiesSlots.join(
          ", "
        )}. Please ensure all required properties are present.`
      );
      return false;
    }

    const invalidModuleSlots = config
      .filter((module) => !Object.values(ModuleKind).includes(module.kind))
      .map((module) => module.slot);

    if (invalidModuleSlots.length > 0) {
      this.stopSimulation();
      console.error(
        `Invalid module slots found: ${invalidModuleSlots.join(", ")}. Property kind is not valid.`
      );
      return false;
    }

    console.log("All modules are valid and ready for simulation.");

    return true;
  }

  async stopSimulation() {
    this.isRunning = false;
    console.log("Simulation stopped.");
  }

  async startSimulation() {
    while (this.isRunning) {
      const modulesLength = (await this.dbService.getAllModules()).length;
      const module = await this.dbService.getModuleBySlot(
        this.currentModuleSlot
      );

      if (!module) {
        console.log("No module found for slot", this.currentModuleSlot);

        this.currentModuleSlot >= modulesLength
          ? (this.currentModuleSlot = 1)
          : this.currentModuleSlot++;

        return;
      }

      const moduleToUpdate = {
        ...module,
        config: {
          temperature: Math.random() * 2 - 1,
          gain: Math.random() * 0.5 - 0.25,
        },
      };

      await this.dbService.update(module.slot, moduleToUpdate);

      this.currentModuleSlot >= modulesLength
        ? (this.currentModuleSlot = 1)
        : this.currentModuleSlot++;

      console.log("Simulated RF module updates:", moduleToUpdate);
    }
  }

  @Interval(1000)
  emitToClients() {
    const modules = this.dbService.getAllModules();
    this.simulationGateway.emitToClients("modules", modules);
  }
}

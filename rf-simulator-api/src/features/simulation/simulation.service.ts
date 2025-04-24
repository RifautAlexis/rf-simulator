import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { Interval } from "@nestjs/schedule";
import { LowdbService } from "src/core/database/lowdb.service";
import { SimulationGateway } from "./simulation.gateway";

@Injectable()
export class SimulationService implements OnApplicationBootstrap {
  private currentModuleSlot = 1;
  constructor(
    private readonly dbService: LowdbService,
    private readonly simulationGateway: SimulationGateway,
  ) {}

  onApplicationBootstrap() {
    this.startSimulation();
    this.emitToClients()
  }

  startSimulation() {
    const modulesLength = this.dbService.getAllModules().length;
    const module = this.dbService.getModuleBySlot(this.currentModuleSlot);

    if (!module) {
      console.log("No module found for slot", this.currentModuleSlot);

      this.currentModuleSlot >= modulesLength ? this.currentModuleSlot = 1 : this.currentModuleSlot++;

      return;
    }

    const moduleToUpdate = {
      ...module,
      config: {
        temperature: Math.random() * 2 - 1,
        gain: Math.random() * 0.5 - 0.25,
      },
    };

    this.dbService.update(module.slot, moduleToUpdate);

    this.currentModuleSlot >= modulesLength ? this.currentModuleSlot = 1 : this.currentModuleSlot++;

    console.log("Simulated RF module updates:", moduleToUpdate);
  }

  @Interval(1000)
  emitToClients() {
    const modules = this.dbService.getAllModules();
    this.simulationGateway.emitToClients("modules", modules);
  }
}

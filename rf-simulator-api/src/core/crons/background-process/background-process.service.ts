import { Injectable } from "@nestjs/common";
import { Interval } from "@nestjs/schedule";
import { LowdbService } from "src/core/database/lowdb.service";

@Injectable()
export class BackgroundProcessService {
  private currentModuleSlot = 1;
  constructor(private readonly dbService: LowdbService) {}

  @Interval(1000)
  handleInterval() {
    this.startSimulation();
  }

  private startSimulation() {
    const module = this.dbService.getModuleBySlot(this.currentModuleSlot);

    if (!module) {
      console.log("No module found for slot", this.currentModuleSlot);

      this.currentModuleSlot++;

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

    this.currentModuleSlot++;

    console.log("Simulated RF module updates:", moduleToUpdate);
  }
}

import { Module } from "@nestjs/common";
import { SimulationService } from "./simulation.service";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [SimulationService],
})
export class SimulationModule {}

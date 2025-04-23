import { Module } from "@nestjs/common";
import { SimulationService } from "./simulation.service";
import { ScheduleModule } from "@nestjs/schedule";
import { SimulationGateway } from "./simulation.gateway";

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [SimulationService, SimulationGateway],
})
export class SimulationModule {}

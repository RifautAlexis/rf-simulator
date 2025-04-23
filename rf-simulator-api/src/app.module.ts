import { Module } from "@nestjs/common";
import { DatabaseModule } from "./core/database/database.module";
import { ModuleManagerModule } from "./features/module-manager/module-manager.module";
import { ConfigManagerModule } from "./features/config-manager/config-manager.module";
import { CoreModule } from "./core/core.module";
import { SimulationModule } from "./features/simulation/simulation.module";

@Module({
  imports: [
    CoreModule,
    DatabaseModule,
    ModuleManagerModule,
    ConfigManagerModule,
    SimulationModule,
  ],
})
export class AppModule {}
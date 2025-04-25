import { Module } from "@nestjs/common";
import { DatabaseModule } from "./core/database/database.module";
import { ModuleManagerModule } from "./features/module-manager/module-manager.module";
import { ConfigManagerModule } from "./features/config-manager/config-manager.module";
import { CoreModule } from "./core/core.module";
import { SimulationModule } from "./features/simulation/simulation.module";
import { LowdbService } from "./core/database/lowdb.service";

@Module({
  imports: [
    DatabaseModule,
    CoreModule,
    ModuleManagerModule,
    ConfigManagerModule,
    SimulationModule,
  ],
  providers: [
    {
      provide: "ASYNC_CONNECTION",
      useFactory: async (dbService: LowdbService) => {
        const filName = "default-config.json";
        const defaultData = { modules: [] };
        const connection = await dbService.initializeDatabase(
          filName,
          defaultData
        );
        return connection;
      },
      inject: [LowdbService],
    },
  ],
})
export class AppModule {}
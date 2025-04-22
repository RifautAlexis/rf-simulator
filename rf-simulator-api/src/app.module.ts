import { Module } from "@nestjs/common";
import { DatabaseModule } from "./core/database/database.module";
import { ModuleManagerModule } from "./features/module-manager/module-manager.module";
import { ConfigManagerModule } from "./features/config-manager/config-manager.module";

@Module({
  imports: [
    DatabaseModule,
    ModuleManagerModule,
    ConfigManagerModule,
  ],
})
export class AppModule {}

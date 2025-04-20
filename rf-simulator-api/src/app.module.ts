import { Module } from "@nestjs/common";
import { ModuleManagerModule } from "./module-manager/module-manager.module";
import { DatabaseModule } from "./core/database/database.module";

@Module({
  imports: [
    DatabaseModule,
    ModuleManagerModule,
  ],
})
export class AppModule {}

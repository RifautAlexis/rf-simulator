import { Module } from "@nestjs/common";
import { ModuleManagerController } from "./module-manager.controller";
import { GetModuleBySlotHandler } from "./services/get-module-by-slot/get-module-by-slot.handler";
import { GetAllModulesHandler } from "./services/get-all-modules/get-all-modules.handler";
import { ModuleManagerFacadeService } from "./module-manager-facade.service";

@Module({
  controllers: [ModuleManagerController],
  providers: [
    GetModuleBySlotHandler,
    GetAllModulesHandler,
    ModuleManagerFacadeService,
  ],
})
export class ModuleManagerModule {}

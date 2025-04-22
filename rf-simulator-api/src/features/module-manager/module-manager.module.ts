import { Module } from "@nestjs/common";
import { ModuleManagerController } from "./module-manager.controller";
import { GetModuleByIdHandler } from "./services/get-module-by-id/get-module-by-id.handler";
import { GetAllModulesHandler } from "./services/get-all-modules/get-all-modules.handler";
import { ModuleManagerFacadeService } from "./module-manager-facade.service";

@Module({
  controllers: [ModuleManagerController],
  providers: [
    GetModuleByIdHandler,
    GetAllModulesHandler,
    ModuleManagerFacadeService,
  ],
})
export class ModuleManagerModule {}

import { Module } from "@nestjs/common";
import { ModuleManagerController } from "./module-manager.controller";
import { GetModuleByIdService } from "./services/get-module-by-id/get-module-by-id.service";
import { GetAllModulesService } from "./services/get-all-modules/get-all-modules.service";
import { ModuleManagerFacadeService } from "./module-manager-facade.service";

@Module({
  controllers: [ModuleManagerController],
  providers: [
    GetModuleByIdService,
    GetAllModulesService,
    ModuleManagerFacadeService,
  ],
})
export class ModuleManagerModule {}

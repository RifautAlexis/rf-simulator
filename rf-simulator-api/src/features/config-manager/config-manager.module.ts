import { Module } from "@nestjs/common";
import { ConfigManagerController } from "./config-manager.controller";
import { ConfigAManagerFacadeService as ConfigManagerFacadeService } from "./config-manager-facade.service";
import { ConfigApplierHandler } from "./services/config-applier/config-applier.handler";

@Module({
  controllers: [ConfigManagerController],
  providers: [
    ConfigApplierHandler,
    ConfigManagerFacadeService,
  ],
})
export class ConfigManagerModule {}

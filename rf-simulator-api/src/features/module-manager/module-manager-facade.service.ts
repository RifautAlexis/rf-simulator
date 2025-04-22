import { Injectable } from '@nestjs/common';
import { GetModuleByIdHandler } from './services/get-module-by-id/get-module-by-id.handler';
import { GetAllModulesHandler } from './services/get-all-modules/get-all-modules.handler';

@Injectable()
export class ModuleManagerFacadeService {
  constructor(
    private readonly getAllModulesService: GetAllModulesHandler,
    private readonly getModuleByIdService: GetModuleByIdHandler,
  ) {}

  getAllModules() {
    return this.getAllModulesService.getAllModules();
  }

  getModuleById(moduleId: string) {
    return this.getModuleByIdService.getByIdModules(moduleId);
  }
}
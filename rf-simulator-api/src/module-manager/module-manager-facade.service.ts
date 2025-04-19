import { Injectable } from '@nestjs/common';
import { GetModuleByIdService } from './services/get-module-by-id/get-module-by-id.service';
import { GetAllModulesService } from './services/get-all-modules/get-all-modules.service';

@Injectable()
export class ModuleManagerFacadeService {
  constructor(
    private readonly getAllModulesService: GetAllModulesService,
    private readonly getModuleByIdService: GetModuleByIdService,
  ) {}

  getAllModules() {
    return this.getAllModulesService.getAllModules();
  }

  getModuleById(moduleId: string) {
    return this.getModuleByIdService.getByIdModules(moduleId);
  }
}
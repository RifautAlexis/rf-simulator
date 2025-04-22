import { Injectable } from '@nestjs/common';
import { GetModuleBySlotHandler } from './services/get-module-by-slot/get-module-by-slot.handler';
import { GetAllModulesHandler } from './services/get-all-modules/get-all-modules.handler';

@Injectable()
export class ModuleManagerFacadeService {
  constructor(
    private readonly getAllModulesService: GetAllModulesHandler,
    private readonly getModuleBySlotService: GetModuleBySlotHandler,
  ) {}

  getAllModules() {
    return this.getAllModulesService.getAllModules();
  }

  getModuleBySlot(slot: number) {
    return this.getModuleBySlotService.getBySlotModules(slot);
  }
}
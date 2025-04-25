import { Injectable } from '@nestjs/common';
import { GetModuleBySlotHandler } from './services/get-module-by-slot/get-module-by-slot.handler';
import { GetAllModulesHandler } from './services/get-all-modules/get-all-modules.handler';
import { Module } from 'src/common/models/module';

@Injectable()
export class ModuleManagerFacadeService {
  constructor(
    private readonly getAllModulesService: GetAllModulesHandler,
    private readonly getModuleBySlotService: GetModuleBySlotHandler,
  ) {}

  async getAllModules(): Promise<Module[]> {
    return await this.getAllModulesService.getAllModules();
  }

  async getModuleBySlot(slot: number): Promise<Module | undefined> {
    return await this.getModuleBySlotService.getBySlotModules(slot);
  }
}
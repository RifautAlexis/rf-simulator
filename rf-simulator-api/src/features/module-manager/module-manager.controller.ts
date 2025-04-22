import { Controller, Get, Param } from '@nestjs/common';
import { ModuleManagerFacadeService } from './module-manager-facade.service';

@Controller('modules')
export class ModuleManagerController {
  constructor(
    private readonly service: ModuleManagerFacadeService,
  ) {}

  @Get()
  getAllModules() {
    return this.service.getAllModules();
  }

  @Get(':slot')
  getModuleById(@Param('slot') slot: number) {
    return this.service.getModuleBySlot(slot);
  }
}

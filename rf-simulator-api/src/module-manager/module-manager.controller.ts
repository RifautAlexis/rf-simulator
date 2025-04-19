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

  @Get(':moduleId')
  getModuleById(@Param('moduleId') moduleId: string) {
    return this.service.getModuleById(moduleId);
  }
}

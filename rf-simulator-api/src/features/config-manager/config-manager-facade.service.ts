import { Injectable } from '@nestjs/common';
import { ConfigApplierHandler } from './services/config-applier/config-applier.handler';

@Injectable()
export class ConfigAManagerFacadeService {
  constructor(
    private readonly configApplierService: ConfigApplierHandler,
  ) {}

  applyConfig(configData: any): boolean {
    return this.configApplierService.applyConfig(configData);
  }
}
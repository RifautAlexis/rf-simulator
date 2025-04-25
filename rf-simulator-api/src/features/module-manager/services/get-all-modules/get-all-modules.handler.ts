import { Injectable, Scope } from '@nestjs/common';
import { Module } from 'src/common/models/module';
import { LowdbService } from 'src/core/database/lowdb.service';

@Injectable({scope: Scope.REQUEST})
export class GetAllModulesHandler {
  
  constructor(private readonly db: LowdbService) {}

  async getAllModules(): Promise<Module[]> {
    return await this.db.getAllModules();
  }
}

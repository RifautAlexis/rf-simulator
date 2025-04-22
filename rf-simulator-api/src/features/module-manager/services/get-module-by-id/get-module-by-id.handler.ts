import { Injectable, Scope } from '@nestjs/common';
import { Module } from 'src/common/models/module';
import { LowdbService } from 'src/core/database/lowdb.service';

@Injectable({scope: Scope.REQUEST})
export class GetModuleByIdHandler {
  
  constructor(private readonly db: LowdbService) {}

  getByIdModules(moduleId: string): Module | undefined {
    return this.db.getModuleById(moduleId);
  }
}

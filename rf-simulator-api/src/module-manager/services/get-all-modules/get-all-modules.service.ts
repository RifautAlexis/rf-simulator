import { Injectable } from '@nestjs/common';
import { Module } from 'src/common/models/module';
import { LowdbService } from 'src/core/database/lowdb.service';

@Injectable()
export class GetAllModulesService {
  private readonly db: LowdbService;

  constructor() {
    this.db = new LowdbService();
  }

  getAllModules(): Module[] {
    return this.db.getAllModules();
  }
}

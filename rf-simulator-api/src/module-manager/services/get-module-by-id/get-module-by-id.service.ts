import { Injectable } from '@nestjs/common';
import { Module } from 'src/common/models/module';
import { LowdbService } from 'src/core/database/lowdb.service';

@Injectable()
export class GetModuleByIdService {
  private readonly db: LowdbService;

  constructor() {
    this.db = new LowdbService();
  }

  getByIdModules(moduleId: string): Module | undefined {
    return this.db.getModuleById(moduleId);
  }
}

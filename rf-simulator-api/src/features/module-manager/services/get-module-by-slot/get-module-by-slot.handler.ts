import { Injectable, Scope } from '@nestjs/common';
import { Module } from 'src/common/models/module';
import { LowdbService } from 'src/core/database/lowdb.service';

@Injectable({scope: Scope.REQUEST})
export class GetModuleBySlotHandler {
  
  constructor(private readonly db: LowdbService) {}

  async getBySlotModules(slot: number): Promise<Module | undefined> {
    return await this.db.getModuleBySlot(slot);
  }
}

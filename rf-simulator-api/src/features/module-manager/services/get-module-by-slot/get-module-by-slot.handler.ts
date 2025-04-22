import { Injectable, Scope } from '@nestjs/common';
import { Module } from 'src/common/models/module';
import { LowdbService } from 'src/core/database/lowdb.service';

@Injectable({scope: Scope.REQUEST})
export class GetModuleBySlotHandler {
  
  constructor(private readonly db: LowdbService) {}

  getBySlotModules(slot: number): Module | undefined {
    return this.db.getModuleBySlot(slot);
  }
}

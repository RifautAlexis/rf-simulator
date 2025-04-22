import { Injectable } from '@nestjs/common';
import { LowSync } from 'lowdb';
import { JSONFileSyncPreset } from 'lowdb/node';
import { Module } from '../../common/models/module';

@Injectable()
export class LowdbService {
  db: LowSync<{ modules: Module[] }>;

  constructor() {
    const filName = 'default-config.json';
    const defaultData = { modules: [] }
    
    this.db = JSONFileSyncPreset<{ modules: Module[] }>(filName, defaultData);
    console.log('Database initialized with filename:', filName);
  }
  
  getAllModules(): Module[] {
    this.db.read();
    return this.db.data.modules;
  }

  getModuleBySlot(slot: number): Module | undefined {
    this.db.read();
    return this.db.data.modules.find(module => (module as any).slot === slot);
  }

  update(slot: number, newItem: Partial<Module>): boolean {
    this.db.read();
    const index = this.db.data.modules.findIndex(item => (item as any).slot === slot);
    if (index === -1) return false;

    this.db.data.modules[index] = { ...this.db.data.modules[index], ...newItem };
    this.db.write();
    return true;
  }

  delete(id: string): boolean {
    this.db.read();
    const initialLength = this.db.data.modules.length;
    this.db.data.modules = this.db.data.modules.filter(item => (item as any).id !== id);
    this.db.write();
    return this.db.data.modules.length < initialLength;
  }
}

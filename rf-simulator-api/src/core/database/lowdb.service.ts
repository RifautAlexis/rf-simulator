import { Injectable } from '@nestjs/common';
import { Low, LowSync } from 'lowdb';
import { JSONFilePreset, JSONFileSyncPreset } from 'lowdb/node';
import { Module } from '../../common/models/module';

@Injectable()
export class LowdbService {
  db: Low<{ modules: Module[] }>;

  constructor() {
  }

  async initializeDatabase(filName: string, defaultData: { modules: Module[] }): Promise<void> {
    this.db = await JSONFilePreset<{ modules: Module[] }>(filName, defaultData);
    console.log('Database initialized with filename:', filName);
  }
  
  async getAllModules(): Promise<Module[]> {
    await this.db.read();
    return this.db.data.modules;
  }

  async getModuleBySlot(slot: number): Promise<Module | undefined> {
    await this.db.read();
    return this.db.data.modules.find(module => (module as any).slot === slot);
  }

  async update(slot: number, newItem: Partial<Module>): Promise<boolean> {
    await this.db.read();
    const index = this.db.data.modules.findIndex(item => (item as any).slot === slot);
    if (index === -1) return false;

    this.db.data.modules[index] = { ...this.db.data.modules[index], ...newItem };
    await this.db.write();
    return true;
  }

  async delete(id: string): Promise<boolean> {
    await this.db.read();
    const initialLength = this.db.data.modules.length;
    this.db.data.modules = this.db.data.modules.filter(item => (item as any).id !== id);
    this.db.write();
    return this.db.data.modules.length < initialLength;
  }
}

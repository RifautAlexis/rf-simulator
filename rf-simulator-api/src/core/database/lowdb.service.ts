import { Injectable, OnModuleInit } from "@nestjs/common";
import { Low, LowSync } from "lowdb";
import { JSONFilePreset, JSONFileSyncPreset } from "lowdb/node";
import { Module } from "../../common/models/module";
import { ModuleConfig } from "src/common/models/config";

@Injectable()
export class LowdbService implements OnModuleInit {
  db: Low<{ modules: Module[] }>;
  config: Low<{ modules: ModuleConfig[] }>;

  async onModuleInit() {
    const configFile = "default-config.json";
    const defaultConfig: { modules: ModuleConfig[] } = { modules: []};
    const dbFile = "database.json";
    const defaultData = { modules: [] };

    this.config = await JSONFilePreset<{ modules: ModuleConfig[] }>(
      configFile,
      defaultConfig
    );
    this.db = await JSONFilePreset<{ modules: Module[] }>(dbFile, defaultData);
    console.log("Database initialized with config file:", dbFile);
  }

  async getConfig(): Promise<ModuleConfig[]> {
    await this.config.read();
    return this.config.data.modules;
  }

  async getAllModules(): Promise<Module[]> {
    await this.db.read();
    return this.db.data.modules;
  }

  async getModuleBySlot(slot: number): Promise<Module | undefined> {
    await this.db.read();
    return this.db.data.modules.find((module) => (module as any).slot === slot);
  }

  async update(slot: number, newItem: Partial<Module>): Promise<boolean> {
    await this.db.read();
    const index = this.db.data.modules.findIndex(
      (item) => (item as any).slot === slot
    );
    if (index === -1) return false;

    this.db.data.modules[index] = {
      ...this.db.data.modules[index],
      ...newItem,
    };
    await this.db.write();
    return true;
  }

  async delete(id: string): Promise<boolean> {
    await this.db.read();
    const initialLength = this.db.data.modules.length;
    this.db.data.modules = this.db.data.modules.filter(
      (item) => (item as any).id !== id
    );
    this.db.write();
    return this.db.data.modules.length < initialLength;
  }
}

import { Injectable, Scope } from "@nestjs/common";
import { LowdbService } from "src/core/database/lowdb.service";

@Injectable({ scope: Scope.REQUEST })
export class ConfigApplierHandler {
  constructor(private readonly db: LowdbService) {}

  applyConfig(configData: any): boolean {
    try {
      this.db.db.data = configData;
      this.db.db.write();
      return true;
    } catch (error) {
      return false;
    }
  }
}

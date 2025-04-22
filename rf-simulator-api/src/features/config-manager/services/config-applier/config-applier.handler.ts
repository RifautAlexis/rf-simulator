import { Injectable, Scope } from "@nestjs/common";
import { LowdbService } from "src/core/database/lowdb.service";

@Injectable({ scope: Scope.REQUEST })
export class ConfigApplierHandler {
  constructor(private readonly db: LowdbService) {}

  applyConfig(configData: any): boolean {
    console.log(this.db.db.data);
    try {
      this.db.db.data = configData;
      this.db.db.write();
      console.log(this.db.db.data);
      return true;
    } catch (error) {
      return false;
    }
  }
}

import { DynamicModule, Module } from "@nestjs/common";
import { LowdbService } from "./lowdb.service";

@Module({
    providers: [LowdbService],
    exports: [LowdbService],
  })
  export class DatabaseModule {
    static register(): DynamicModule {
      return {
        module: DatabaseModule,
        global: true, // Registers it globally
      };
    }
  }
  
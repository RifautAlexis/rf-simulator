import { LowdbService } from "src/core/database/lowdb.service";
import { Global, Module } from "@nestjs/common";

@Global()
@Module({
  providers: [
    LowdbService
  ],
  exports: [LowdbService],
})
export class DatabaseModule {}

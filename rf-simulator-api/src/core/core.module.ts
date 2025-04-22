import { Global, Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { BackgroundProcessService } from "./crons/background-process/background-process.service";
import { BackgroundProcessModule } from "./crons/background-process/background-process.module";

@Global()
@Module({
  imports: [ScheduleModule.forRoot(), BackgroundProcessModule],
})
export class CoreModule {
  // constructor(
  //   private readonly backgroundProcessService: BackgroundProcessService
  // ) {
  //   backgroundProcessService.st();
  // }
}

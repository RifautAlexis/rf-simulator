import { Module } from '@nestjs/common';
import { BackgroundProcessService } from './background-process.service';

@Module({
  providers: [BackgroundProcessService],
})
export class BackgroundProcessModule {}
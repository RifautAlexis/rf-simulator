import { Module } from '@nestjs/common';
import { ModuleManagerModule } from './module-manager/module-manager.module';

@Module({
  imports: [ModuleManagerModule],
})
export class AppModule {}

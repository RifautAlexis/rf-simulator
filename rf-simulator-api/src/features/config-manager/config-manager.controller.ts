import { Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ConfigAManagerFacadeService } from './config-manager-facade.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('config')
export class ConfigManagerController {
  constructor(
    private readonly service: ConfigAManagerFacadeService,
  ) {}

  @Post('upload-config')
  @UseInterceptors(FileInterceptor('config-example.json')) // Expect file input named "file"
  async uploadConfig(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return { message: 'No file uploaded' };
    }

    const configData = JSON.parse(file.buffer.toString()); // Read JSON
    await this.service.applyConfig(configData);
    return { message: 'Configuration applied successfully' };
  }
}

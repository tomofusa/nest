import { InjectQueue } from '@nestjs/bull';
import { Controller, Get, Post } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('audio')
export class AudioController {
  constructor(@InjectQueue('audio') private readonly audioQueue: Queue) {}

  // @Post('transcode')
  @Get('transcode')
  async transcode() {
    console.log('before ------------- ');
    // console.log(this.audioQueue);
    await this.audioQueue.add(
      // name:
      'transcode',
      // data: etc.
      {
        file: 'audio.mp3',
      },
      // opts: Options
      {
        // deplayed Job
        // delay: 10000,
        // Repeated Job
        // repeat: { cron: '5 * * * *' }, // １時間毎、毎時5分に実行
      },
    );
    console.log('after ------------- ');
    // console.log(this.audioQueue);
  }
}

import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FileModule } from "./file/file.module";
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static'),}),
    MongooseModule.forRoot('mongodb+srv://karakulgulzhan:admin@cluster1.tcblzvu.mongodb.net/?retryWrites=true&w=majority'),
    TrackModule,
    FileModule,
  ],
})

export class AppModule{}
import { Body, Controller, Get, Param, Post, Delete, UseInterceptors, UploadedFiles, Query } from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDTO } from './dto/create-track.dto';
import { ObjectId } from 'mongoose';
import { CreateCommentDTO } from './dto/create-comment.dto';
import {FileFieldsInterceptor} from '@nestjs/platform-express'
import { ObjectUnsubscribedError } from 'rxjs';
import { count } from 'console';


@Controller('tracks')
export class TrackControlller {
    constructor(private trackService: TrackService) {}
        
    // Создание трека
    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
      ]))
    create(@UploadedFiles() files, @Body() dto: CreateTrackDTO) {
        const { picture, audio} = files;
        return this.trackService.create(dto, picture[0], audio[0]);
    }

    // Получение треков и пагинация
    @Get()
    getAll(@Query('count') count: number,
            @Query('offset') offset: number){
        return this.trackService.getAll(count, offset);
    }

    // Поиск
    @Get('/search')
    search(@Query('query') query: string){
        return this.trackService.search(query);
    }

    // Получение одного тека с подробной информацией
    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.trackService.getOne(id);
    }

    // Удаление трека
    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.trackService.delete(id);
    }

    // Add Comment
    @Post('/comment')
    addComment(@Body() dto: CreateCommentDTO){
        console.log(dto)
        return this.trackService.addComment(dto);
    }

    // Add Listens to Track
    @Post('/listen/:id')
    listen(@Param('id') id: ObjectId) {
        return this.trackService.listen(id);
    }
}
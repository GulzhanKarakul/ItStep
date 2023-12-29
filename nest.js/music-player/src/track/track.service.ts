import { Model, ObjectId } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Track } from "./schemas/track.schema";
import { Comment } from "./schemas/comment.schema";
import { CreateTrackDTO } from './dto/create-track.dto';
import { CreateCommentDTO } from './dto/create-comment.dto';
import { ObjectUnsubscribedError } from 'rxjs';
import { FileService, FileType } from 'src/file/file.service';


@Injectable()
export class TrackService {

    constructor(@InjectModel(Track.name) private trackModel: Model<Track>,
                @InjectModel(Comment.name) private commentModel: Model<Comment>,
                private fileService: FileService) {}

    // Создание трека
    async create(dto: CreateTrackDTO, picture, audio) : Promise<Track> {
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
        const track = await this.trackModel.create({...dto, listens: 0, audio: audioPath, picture: picturePath})
        return track;
    }

    // Получение треков
    async getAll(count: number = 10, offset : number = 0) : Promise<Track[]>{
        const tracks = await this.trackModel.find().skip(offset).limit(count);
        return tracks;
    }

    async search(query: string) : Promise<Track[]>{
        const tracks = await this.trackModel.find({
                                name: {$regex: new RegExp(query, 'i')}
                            });
        return tracks;
    }

    // Получение одного тека с подробной информацией
    async getOne(id: ObjectId): Promise<Track> {
        const oneTrack = (await this.trackModel.findById(id)).populate('comments');
        return oneTrack;
    }

    // Удаление трека
    async delete(id: ObjectId): Promise<ObjectId> {
        const oneTrack = await this.trackModel.findByIdAndDelete(id);
        return id;
    }

    // Добавление коммента
    async addComment(dto: CreateCommentDTO): Promise<Comment> {
        const oneTrack = await this.trackModel.findById(dto.trackId);
        const comment = await this.commentModel.create({...dto});
        console.log(comment._id)
        oneTrack.comments.push(comment._id);
        await oneTrack.save();
        return comment;
    }

    // Подсчет прослушивания
    async listen(id: ObjectId){
        const oneTrack = (await this.trackModel.findById(id))
        oneTrack.listens +=1;
        oneTrack.save();
    }
}
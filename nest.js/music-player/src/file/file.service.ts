import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
// модуль для того чтобы пути были универсальными для всех Операционных систем
import * as path from 'path';
import * as fs from 'fs';
// для генерации случайних айди
import * as uuid from 'uuid';

export enum FileType {
    AUDIO = 'audio',
    IMAGE = 'image',
}

@Injectable()
export class FileService {

    // Create/Add File to CDN
    createFile(type: FileType, file): string {
        try {
            // Получиние расширения файла через file.originalname
            const fileExtension = file.originalname.split('.').pop();
            // Генерация уникального имени + fileExtension
            const fileName = uuid.v4() + '.' + fileExtension;
            // Генерация пути к файлу
            const filePath = path.resolve(__dirname, '..', 'static', type);
            // Проверка существования папки для файла
            if(!fs.existsSync(filePath)) {
                // Если не существует, то по этому пути мы создаем данную папку
                // Флаг рекурсив означает что если несколько папок на пути не существует, то они все будут по пути создаватся
                fs.mkdirSync(filePath, {recursive: true})
            }
            // Запись файла в папку и передача буфера
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);

            return type + '/' + fileName;
        } catch(e) {
            // В случае ошибки записи пойдет исключение с сообщением ошибки и статус 500 ошибки
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    // Remove File from Cdn
    removeFile(filename: string) {

    }
}
import { Injectable } from '@nestjs/common';
import { CommentDto } from './dto';

@Injectable()
export class CommentService {
  async store(body: CommentDto) {
    console.log(body);
  }

  async list() {
    console.log('listing');
  }

  async get(id: string) {
    console.log('getting id', id);
  }

  async update(id: string, body: CommentDto) {
    console.log(id, body);
  }

  async destroy(id: string) {
    console.log(id);
  }
}

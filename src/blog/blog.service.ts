import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto';

@Injectable()
export class BlogService {
  findAll() {
    console.log('get all blogs hit');
  }

  getSingle(id: string) {
    console.log('the id is', id);
  }

  store(body: BlogDto) {
    console.log('store blog with this body', body);
  }

  update(id: string, body: BlogDto) {
    console.log('id is', id, 'the body is', body);
  }

  destroy(id: string) {
    console.log('delete blog with id', id);
  }
}

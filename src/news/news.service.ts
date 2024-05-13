import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { mockNews } from 'src/mocks/news.mock';

@Injectable()
export class NewsService {

  private news=mockNews;
  // create(createNewsDto: CreateNewsDto) {
  //   return 'This action adds a new news';
  // }

  findAll() {
    return this.news;
  }

  addComment(id: string, body) {
    const foundNews=this.news.find(news=>news._id===id)
    if(!foundNews){
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    foundNews.comment.push(body);
    return foundNews;
  }

  addNews(body){
    this.news.push(body);
    return this.news;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} news`;
  // }

  // update(id: number, updateNewsDto: UpdateNewsDto) {
  //   return `This action updates a #${id} news`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} news`;
  // }
}

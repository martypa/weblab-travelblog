import {BlogHeaderModel} from '../travel-blog/BlogHeaderModel';


export class BlogDetailMock {

  private id = 1;

  private header: BlogHeaderModel = {
    title: 'Meine Reise nach China',
    location: 'China',
    duration: '25.04.2006 - 28.05.2006',
    description: 'In dieser Reise ging es zum ersten Mal nach China...'
  };

  constructor() {
  }


  getMockHeader(): BlogHeaderModel {
    return this.header;
  }

  getID() {
    return this.id;
  }

}

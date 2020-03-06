import {BlogHeaderModel} from '../travel-blog/BlogHeaderModel';
import {BlogEntryModel} from '../travel-blog/travel-blog-entry/BlogEntryModel';


export class BlogDetailMock {

  private id = 1;

  private header: BlogHeaderModel = {
    _id: '',
    title: 'Meine Reise nach China',
    location: 'China',
    duration: '25.04.2006 - 28.05.2006',
    description: 'In dieser Reise ging es zum ersten Mal nach China...',
    type: 'header'
  };

  private firstEntry: BlogEntryModel = {
    _id: '',
    date: '26.04.2006',
    title: 'Arrive in Peking',
    picFile: '../../assets/image/chinaReise.jpg',
    picDiscription: 'Tempel in China',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l' +
      'abore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea ' +
      'rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor ' +
      'sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ' +
      'aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ' +
      'gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    type: 'entry',
    picutre: null,
    blog: 1,
    id: NaN,
  };


  private second: BlogEntryModel = {
    _id: '',
    date: '26.04.2006',
    title: 'Arrive in Peking',
    picFile: '../../assets/image/chinaReise.jpg',
    picDiscription: 'Tempel in China',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l' +
      'abore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea ' +
      'rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor ' +
      'sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ' +
      'aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ' +
      'gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    type: '',
    picutre:  null,
    blog: 1,
    id: NaN,
  };


  constructor() {
  }


  getMockHeader(): BlogHeaderModel {
    return this.header;
  }

  getID() {
    return this.id;
  }

  getMockEntry(): BlogEntryModel[] {
    const blogentries: BlogEntryModel[] = [
      this.firstEntry,
      this.second
    ];
    return blogentries;
  }
}

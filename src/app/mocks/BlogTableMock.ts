import {BlogTableModel} from '../dashboard/BlogTableModel';

export class BlogTableMock {
  private mock: BlogTableModel[] = [
    {id: 1, title: 'Meine Reise nach China', destination: 'China', date: '25.04.2006', length: '3.5 Wochen'},
    {id: 2, title: 'Abenteuer in Argentinien', destination: 'Argentinien', date: '01.07.2010', length: '4 Wochen'},
    {id: 3, title: 'Erholung auf den Bahamas', destination: 'Bahamas', date: '05.02.2008', length: '2 Wochen'},
    {id: 4, title: 'Fahrradtour Europa', destination: 'Europa', date: '16.10.2012', length: '2.5 Monate'},
    {id: 5, title: 'Wanderung in den Alpen', destination: 'Schweiz', date: '01.07.2017', length: '1.5 Monaten'},
  ];

  getMock(): BlogTableModel[] {
    return this.mock;
  }
}

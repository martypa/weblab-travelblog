import {BlogTableModel} from '../dashboard/BlogTableModel';

export class BlogTableMock {
  private mock: BlogTableModel[] = [
    {_id: '', id: 1, title: 'Meine Reise nach China', destination: 'China', date: '25.04.2006', length: '3.5 Wochen'},
    {_id: '', id: 2, title: 'Abenteuer in Argentinien', destination: 'Argentinien', date: '01.07.2010', length: '4 Wochen'},
    {_id: '', id: 3, title: 'Erholung auf den Bahamas', destination: 'Bahamas', date: '05.02.2008', length: '2 Wochen'},
    {_id: '', id: 4, title: 'Fahrradtour Europa', destination: 'Europa', date: '16.10.2012', length: '2.5 Monate'},
    {_id: '', id: 5, title: 'Wanderung in den Alpen', destination: 'Schweiz', date: '01.07.2017', length: '1.5 Monaten'},
  ];

  getMock(): BlogTableModel[] {
    return this.mock;
  }
}

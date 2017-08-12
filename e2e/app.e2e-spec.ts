import { ChurchSalonPage } from './app.po';

describe('church-salon App', () => {
  let page: ChurchSalonPage;

  beforeEach(() => {
    page = new ChurchSalonPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

import { NixalloverPage } from './app.po';

describe('nixallover App', () => {
  let page: NixalloverPage;

  beforeEach(() => {
    page = new NixalloverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

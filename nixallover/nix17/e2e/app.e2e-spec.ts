import { Nix17Page } from './app.po';

describe('nix17 App', function() {
  let page: Nix17Page;

  beforeEach(() => {
    page = new Nix17Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

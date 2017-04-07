import { NgportfolioPage } from './app.po';

describe('ngportfolio App', () => {
  let page: NgportfolioPage;

  beforeEach(() => {
    page = new NgportfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

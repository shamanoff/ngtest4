import { Ngtest4Page } from './app.po';

describe('ngtest4 App', () => {
  let page: Ngtest4Page;

  beforeEach(() => {
    page = new Ngtest4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

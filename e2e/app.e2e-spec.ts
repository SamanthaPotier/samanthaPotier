import { SamanthaAppPage } from './app.po';

describe('samantha-app App', () => {
  let page: SamanthaAppPage;

  beforeEach(() => {
    page = new SamanthaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

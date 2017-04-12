import { WebdevkrsandAngularIntroPage } from './app.po';

describe('webdevkrsand-angular-intro App', () => {
  let page: WebdevkrsandAngularIntroPage;

  beforeEach(() => {
    page = new WebdevkrsandAngularIntroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

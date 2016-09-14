import { Angular2DevelopmentCLIPage } from './app.po';

describe('-angular2-development-cli App', function() {
  let page: Angular2DevelopmentCLIPage;

  beforeEach(() => {
    page = new Angular2DevelopmentCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

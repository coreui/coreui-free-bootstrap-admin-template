import { CoreUIPage } from './app.po';

describe('core-ui App', function() {
  let page: CoreUIPage;

  beforeEach(() => {
    page = new CoreUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

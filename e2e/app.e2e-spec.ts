import { PrototipoPage } from './app.po';

describe('prototipo App', () => {
  let page: PrototipoPage;

  beforeEach(() => {
    page = new PrototipoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

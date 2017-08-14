import { MerkuryUiPage } from './app.po';

describe('merkury-ui App', () => {
  let page: MerkuryUiPage;

  beforeEach(() => {
    page = new MerkuryUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

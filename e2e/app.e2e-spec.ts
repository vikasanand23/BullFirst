import { BullsfirstPage } from './app.po';

describe('bullsfirst App', () => {
  let page: BullsfirstPage;

  beforeEach(() => {
    page = new BullsfirstPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

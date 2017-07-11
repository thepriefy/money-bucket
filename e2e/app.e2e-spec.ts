import { MoneyBucketPage } from './app.po';

describe('money-bucket App', () => {
  let page: MoneyBucketPage;

  beforeEach(() => {
    page = new MoneyBucketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

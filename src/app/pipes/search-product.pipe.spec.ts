import { SearchProductPipe } from './search-product.pipe';

describe('SearchProductPipe', () => {
  const pipe = new SearchProductPipe();
  const list = [{name:'chips'},{name:'sprite'},{name:'burger'}]

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('providing value returns filter value', () => {
    const text = 'bur'
    expect(pipe.transform(list, text)).toEqual([{name: 'burger'}]);
  });
  it('providing value returns all products', () => {
    const text = ''
    expect(pipe.transform(list, text)).toEqual(list);
  });
});

import { SearchUserPipe } from './search-user.pipe';

describe('SearchUserPipe', () => {
  const pipe = new SearchUserPipe();
  const list = [{email:'pablito@gmail.com'},{email:'pepito@gmail.com'},{email:'carmelito@gmail.com'}]

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('providing value returns filter value', () => {
    const text = 'pabli'
    expect(pipe.transform(list, text)).toEqual([{email: 'pablito@gmail.com'}]);
  });
  it('providing value returns all users', () => {
    const text = ''
    expect(pipe.transform(list, text)).toEqual(list);
  });
});

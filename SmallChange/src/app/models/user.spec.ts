import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User ('user1','first', 'last', 'lockpass', 'xyz@g.com', 'clientId' , '21/03/2000',  80192847833, 3)).toBeTruthy();    
  });
});

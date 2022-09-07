import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User ('2','xyz@g.com', '20220910', 'USA', '123421', 'XYZ', 'abahh')).toBeTruthy();
  });
});

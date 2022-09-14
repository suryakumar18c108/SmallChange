import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { User } from './models/user';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Users', inject([UserService], 
    fakeAsync((service: UserService) => {
    let books: User[] = [];
    service.getUsers()
    .subscribe(data => books = data);
    tick();
    expect(books.length).toBe(2);
   })));
});

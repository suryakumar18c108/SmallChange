import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { User } from './models/user';

import { UserserviceService } from './userservice.service';

describe('UserserviceService', () => {
  let service: UserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Users', inject([UserserviceService], 
    fakeAsync((service: UserserviceService) => {
    let books: User[] = [];
    service.getUsers()
    .subscribe(data => books = data);
    tick();
    expect(books.length).toBe(2);
   })));
});

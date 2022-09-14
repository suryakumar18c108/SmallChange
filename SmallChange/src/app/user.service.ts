import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      username: 'user1',
      firstname: 'Margi',
      lasttname: 'Winnister',
      password: 'lockpass1',
      email: 'mwinnister0@answers.com',
      clientId: 'client1',
      dateOfBirth: '24-02-2002',
      phonenumber: 9125365112,
      investmentRickAppetite: 2
    },
    {
      username: 'user2',
      firstname: 'Beverie',
      lasttname: 'Hadleigh',
      password: 'lockpass2',
      email: 'bhadleigh1@tmall.com',
      clientId: 'client2',
      dateOfBirth: '21-06-2000',
      phonenumber: 8016786121,
      investmentRickAppetite: 3
    }
    
  ];
  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  login(uname: string, pass: string): boolean{
    for(let i =0;i<this.users.length;i++){
      if(this.users[i].username === uname){
        if(this.users[i].password === pass)
          return true;
        else
          return false;
      }
    }
    return false;
  }
}

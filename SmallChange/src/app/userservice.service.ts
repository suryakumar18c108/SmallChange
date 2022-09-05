import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  users: User[] = [
    {
      clientId: '1',
      email: 'abc@g.com',
      dateOfBirth: '20220908',
      country: 'India',
      postalCode: '567891',
      username:'ABC',
      password:'abahh'
    },
    {
      clientId: '2',
      email: 'xyz@g.com',
      dateOfBirth: '20220910',
      country: 'USA',
      postalCode: '123421',
      username:'XYZ',
      password:'abahh' 
   },
 ];
  constructor() { }
}

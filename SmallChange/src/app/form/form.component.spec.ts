import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../models/user';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  const users: User[] = [
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve users from the service', () => {
    expect(users.length).toBe(2);
    expect(users[0].clientId).toBe('client1');
  });
  it('should display the error div element when username is invalid', () => {
    const hostElement = fixture.nativeElement;
    const usernameInput: HTMLInputElement =
      hostElement.querySelector('#username');
    const passwordInput: HTMLInputElement =
      hostElement.querySelector('#password');
    usernameInput.value = 'a';
    passwordInput.value = 'abcvgsgg';
    usernameInput.dispatchEvent(new Event('keyup'));
    passwordInput.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const errorUsername = compiled.querySelector('#userError');
    // console.log(errorUsername);
    expect(errorUsername).toBeTruthy();
  });
  // it('should find the <p> with fixture.debugElement.query(By.css)', () => {
  //   const bannerDe: DebugElement = fixture.debugElement;
  //   const paragraphDe = bannerDe.query(By.css('p'));
  //   const p: HTMLElement = paragraphDe.nativeElement;
  //   expect(p.textContent).toEqual(
  //     'Invalid Username - Must contain between 3 and 18 letters, numbers, underscores or hyphens.'
  //   );
  // });
});

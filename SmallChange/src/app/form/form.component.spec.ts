import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

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
    expect(component.users.length).toBe(2);
    expect(component.users[0].country).toBe('India');
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
    const errorUsername = compiled.querySelector('#usernameError');
    // console.log(errorUsername);
    expect(errorUsername).toBeTruthy();
  });
  it('should display the error div element when password is invalid', () => {
    const hostElement = fixture.nativeElement;
    const usernameInput: HTMLInputElement =
      hostElement.querySelector('#username');
    const passwordInput: HTMLInputElement =
      hostElement.querySelector('#password');
    usernameInput.value = 'abcvgsgg';
    passwordInput.value = 'a';
    usernameInput.dispatchEvent(new Event('keyup'));
    passwordInput.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const errorPassword = compiled.querySelector('#passwordError');
    expect(errorPassword).toBeTruthy();
  });
  it('should not display any error div element when username and password are valid', () => {
    const hostElement = fixture.nativeElement;
    const usernameInput: HTMLInputElement =
      hostElement.querySelector('#username');
    const passwordInput: HTMLInputElement =
      hostElement.querySelector('#password');
    usernameInput.value = 'abcvgsgg';
    passwordInput.value = 'hvusiuvs';
    usernameInput.dispatchEvent(new Event('keyup'));
    passwordInput.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const errorPassword = compiled.querySelector('#passwordError');
    const errorUsername = compiled.querySelector('#usernameError');

    expect(errorPassword).toBeFalsy();
    expect(errorUsername).toBeFalsy();
  });
   it('should not display error div elements when username and password are invalid', () => {
     const hostElement = fixture.nativeElement;
     const usernameInput: HTMLInputElement =
       hostElement.querySelector('#username');
     const passwordInput: HTMLInputElement =
       hostElement.querySelector('#password');
     usernameInput.value = 'a';
     passwordInput.value = 'b';
     usernameInput.dispatchEvent(new Event('keyup'));
     passwordInput.dispatchEvent(new Event('keyup'));
     fixture.detectChanges();
     const compiled = fixture.debugElement.nativeElement;
     const errorPassword = compiled.querySelector('#passwordError');
     const errorUsername = compiled.querySelector('#usernameError');

     expect(errorPassword).toBeTruthy();
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

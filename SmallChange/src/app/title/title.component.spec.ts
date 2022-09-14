import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find the <h2> with fixture.debugElement.query(By.css)', () => {   
    const bannerDe: DebugElement = fixture.debugElement;   
    const paragraphDe = bannerDe.query(By.css('h2'));   
    const p: HTMLElement = paragraphDe.nativeElement;   
    expect(p.textContent).toEqual('Login Page'); 
  });

  it('should find the <p> with fixture.debugElement.query(By.css)', () => {   
    const bannerDe: DebugElement = fixture.debugElement;   
    const paragraphDe = bannerDe.query(By.css('p'));   
    const p: HTMLElement = paragraphDe.nativeElement;   
    expect(p.textContent).toEqual('Did you know that SmallChange TM has no investment fees on portfolios balances under $5,000? After that, only a 0.25% fees applies monthly.'); 
  });
});

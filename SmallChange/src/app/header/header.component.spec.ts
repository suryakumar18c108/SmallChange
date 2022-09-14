import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find the <p> with fixture.debugElement.query(By.css)', () => {   
    const bannerDe: DebugElement = fixture.debugElement;   
    const paragraphDe = bannerDe.query(By.css('p'));   
    const p: HTMLElement = paragraphDe.nativeElement;   
    expect(p.textContent).toContain('SmallChange'); 
  });
});

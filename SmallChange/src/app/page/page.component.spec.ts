import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PageComponent } from './page.component';

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find the <h1> with fixture.debugElement.query(By.css)', () => {   
    const bannerDe: DebugElement = fixture.debugElement;   
    const paragraphDe = bannerDe.query(By.css('h1'));   
    const p: HTMLElement = paragraphDe.nativeElement;   
    expect(p.textContent).toEqual(' Welcome '); 
  });
});

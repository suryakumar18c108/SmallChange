import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find the <footer> with fixture.debugElement.query(By.css)', () => {   
    const bannerDe: DebugElement = fixture.debugElement;   
    const paragraphDe = bannerDe.query(By.css('footer'));   
    const p: HTMLElement = paragraphDe.nativeElement;   
    expect(p.textContent).toEqual('WeTriedTM'); 
  });
});

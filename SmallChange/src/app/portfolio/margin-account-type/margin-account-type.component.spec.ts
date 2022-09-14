import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginAccountTypeComponent } from './margin-account-type.component';

describe('MarginAccountTypeComponent', () => {
  let component: MarginAccountTypeComponent;
  let fixture: ComponentFixture<MarginAccountTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarginAccountTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarginAccountTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

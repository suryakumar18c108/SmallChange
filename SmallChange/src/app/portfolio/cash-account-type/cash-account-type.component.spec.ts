import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashAccountTypeComponent } from './cash-account-type.component';

describe('CashAccountTypeComponent', () => {
  let component: CashAccountTypeComponent;
  let fixture: ComponentFixture<CashAccountTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashAccountTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashAccountTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

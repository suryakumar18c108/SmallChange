import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestingAccountTypeComponent } from './investing-account-type.component';

describe('InvestingAccountTypeComponent', () => {
  let component: InvestingAccountTypeComponent;
  let fixture: ComponentFixture<InvestingAccountTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestingAccountTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestingAccountTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

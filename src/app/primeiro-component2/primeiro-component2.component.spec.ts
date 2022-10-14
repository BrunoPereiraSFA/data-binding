import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroComponent2Component } from './primeiro-component2.component';

describe('PrimeiroComponent2Component', () => {
  let component: PrimeiroComponent2Component;
  let fixture: ComponentFixture<PrimeiroComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiroComponent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiroComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

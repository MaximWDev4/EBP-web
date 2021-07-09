import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsUpComponent } from './bars-up.component';

describe('BarsUpComponent', () => {
  let component: BarsUpComponent;
  let fixture: ComponentFixture<BarsUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarsUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

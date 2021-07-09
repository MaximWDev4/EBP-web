import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsDownComponent } from './bars-down.component';

describe('BarsDownComponent', () => {
  let component: BarsDownComponent;
  let fixture: ComponentFixture<BarsDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarsDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

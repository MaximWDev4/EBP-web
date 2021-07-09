import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleDownArrowComponent } from './double-down-arrow.component';

describe('DoubleDownArrowComponent', () => {
  let component: DoubleDownArrowComponent;
  let fixture: ComponentFixture<DoubleDownArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleDownArrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleDownArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

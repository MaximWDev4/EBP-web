import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidityItemComponent } from './validity-item.component';

describe('ValidityItemComponent', () => {
  let component: ValidityItemComponent;
  let fixture: ComponentFixture<ValidityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidityItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

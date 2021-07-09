import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureItemComponent } from './manufacture-item.component';

describe('ManufactureItemComponent', () => {
  let component: ManufactureItemComponent;
  let fixture: ComponentFixture<ManufactureItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufactureItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufactureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

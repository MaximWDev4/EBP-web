import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomenItemComponent } from './nomen-item.component';

describe('NomenItemComponent', () => {
  let component: NomenItemComponent;
  let fixture: ComponentFixture<NomenItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomenItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

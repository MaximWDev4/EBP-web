import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentItemComponent } from './ident-item.component';

describe('IdentItemComponent', () => {
  let component: IdentItemComponent;
  let fixture: ComponentFixture<IdentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentColumnsComponent } from './ident-columns.component';

describe('IdentColumnsComponent', () => {
  let component: IdentColumnsComponent;
  let fixture: ComponentFixture<IdentColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentFiltersComponent } from './ident-filters.component';

describe('IdentFiltersComponent', () => {
  let component: IdentFiltersComponent;
  let fixture: ComponentFixture<IdentFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

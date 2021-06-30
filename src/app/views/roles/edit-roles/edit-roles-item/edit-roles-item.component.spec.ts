import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRolesItemComponent } from './edit-roles-item.component';

describe('EditRolesItemComponent', () => {
  let component: EditRolesItemComponent;
  let fixture: ComponentFixture<EditRolesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRolesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRolesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

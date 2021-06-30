import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleItemComponent } from './user-role-item.component';

describe('NomenItemComponent', () => {
  let component: UserRoleItemComponent;
  let fixture: ComponentFixture<UserRoleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRoleItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

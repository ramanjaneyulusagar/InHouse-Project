import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminTypeLoginComponent } from './user-admin-type-login.component';

describe('UserAdminTypeLoginComponent', () => {
  let component: UserAdminTypeLoginComponent;
  let fixture: ComponentFixture<UserAdminTypeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdminTypeLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAdminTypeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

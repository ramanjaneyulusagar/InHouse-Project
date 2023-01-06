import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantSearchComponent } from './applicant-search.component';

describe('ApplicantSearchComponent', () => {
  let component: ApplicantSearchComponent;
  let fixture: ComponentFixture<ApplicantSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

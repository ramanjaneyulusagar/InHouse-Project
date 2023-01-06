import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadDashboardComponent } from './file-upload-dashboard.component';

describe('FileUploadDashboardComponent', () => {
  let component: FileUploadDashboardComponent;
  let fixture: ComponentFixture<FileUploadDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

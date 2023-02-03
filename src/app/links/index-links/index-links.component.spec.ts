import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLinksComponent } from './index-links.component';

describe('IndexLinksComponent', () => {
  let component: IndexLinksComponent;
  let fixture: ComponentFixture<IndexLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

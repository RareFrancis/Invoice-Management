import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyReportComponent } from './company-report.component';

describe('CompanyReportComponent', () => {
  let component: CompanyReportComponent;
  let fixture: ComponentFixture<CompanyReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyReportComponent]
    });
    fixture = TestBed.createComponent(CompanyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

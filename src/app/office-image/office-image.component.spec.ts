import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeImageComponent } from './office-image.component';

describe('OfficeImageComponent', () => {
  let component: OfficeImageComponent;
  let fixture: ComponentFixture<OfficeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

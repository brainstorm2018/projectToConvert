import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneSectionComponent } from './zone-section.component';

describe('ZoneSectionComponent', () => {
  let component: ZoneSectionComponent;
  let fixture: ComponentFixture<ZoneSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

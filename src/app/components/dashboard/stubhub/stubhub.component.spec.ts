import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StubhubComponent } from './stubhub.component';

describe('StubhubComponent', () => {
  let component: StubhubComponent;
  let fixture: ComponentFixture<StubhubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StubhubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StubhubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

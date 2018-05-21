import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTopHeaderComponent } from './sub-top-header.component';

describe('SubTopHeaderComponent', () => {
  let component: SubTopHeaderComponent;
  let fixture: ComponentFixture<SubTopHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTopHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

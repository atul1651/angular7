import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootertipComponent } from './footertip.component';

describe('FootertipComponent', () => {
  let component: FootertipComponent;
  let fixture: ComponentFixture<FootertipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootertipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootertipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

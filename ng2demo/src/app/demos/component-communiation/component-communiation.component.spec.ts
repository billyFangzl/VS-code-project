import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCommuniationComponent } from './component-communiation.component';

describe('ComponentCommuniationComponent', () => {
  let component: ComponentCommuniationComponent;
  let fixture: ComponentFixture<ComponentCommuniationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCommuniationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCommuniationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

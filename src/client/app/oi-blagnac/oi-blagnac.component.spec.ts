import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OiBlagnacComponent } from './oi-blagnac.component';

describe('OiBlagnacComponent', () => {
  let component: OiBlagnacComponent;
  let fixture: ComponentFixture<OiBlagnacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OiBlagnacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OiBlagnacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

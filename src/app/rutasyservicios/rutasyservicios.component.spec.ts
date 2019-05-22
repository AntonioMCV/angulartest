import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasyserviciosComponent } from './rutasyservicios.component';

describe('RutasyserviciosComponent', () => {
  let component: RutasyserviciosComponent;
  let fixture: ComponentFixture<RutasyserviciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutasyserviciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutasyserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolotechaComponent } from './polotecha.component';

describe('PolotechaComponent', () => {
  let component: PolotechaComponent;
  let fixture: ComponentFixture<PolotechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolotechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolotechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

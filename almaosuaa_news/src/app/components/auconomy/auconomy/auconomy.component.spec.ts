import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuconomyComponent } from './auconomy.component';

describe('AuconomyComponent', () => {
  let component: AuconomyComponent;
  let fixture: ComponentFixture<AuconomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuconomyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuconomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

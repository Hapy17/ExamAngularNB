import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoTypeComponent } from './moto-type.component';

describe('MotoTypeComponent', () => {
  let component: MotoTypeComponent;
  let fixture: ComponentFixture<MotoTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

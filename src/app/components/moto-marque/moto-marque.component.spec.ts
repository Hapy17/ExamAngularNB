import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoMarqueComponent } from './moto-marque.component';

describe('MotoMarqueComponent', () => {
  let component: MotoMarqueComponent;
  let fixture: ComponentFixture<MotoMarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoMarqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

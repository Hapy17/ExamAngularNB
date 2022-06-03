import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosPharesComponent } from './motos-phares.component';

describe('MotosPharesComponent', () => {
  let component: MotosPharesComponent;
  let fixture: ComponentFixture<MotosPharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotosPharesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosPharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

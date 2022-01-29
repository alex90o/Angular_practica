import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarReactivoComponent } from './validar-reactivo.component';

describe('ValidarReactivoComponent', () => {
  let component: ValidarReactivoComponent;
  let fixture: ComponentFixture<ValidarReactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarReactivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

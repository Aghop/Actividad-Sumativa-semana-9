import { ComponentFixture, TestBed } from '@angular/core/testing';

import { listadoTareasComponent } from './listadoTareascomponent';

describe('listadoTareasComponent', () => {
  let component: listadoTareasComponent;
  let fixture: ComponentFixture<listadoTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ listadoTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(listadoTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

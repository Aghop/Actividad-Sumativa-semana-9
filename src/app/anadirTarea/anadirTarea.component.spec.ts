import { ComponentFixture, TestBed } from '@angular/core/testing';

import { anadirTareaComponent } from './anadirTarea.component';

describe('anadirTareaComponent', () => {
  let component: anadirTareaComponent;
  let fixture: ComponentFixture<anadirTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ anadirTareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(anadirTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

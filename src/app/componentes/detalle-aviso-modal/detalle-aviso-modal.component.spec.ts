import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetalleAvisoModalComponent } from './detalle-aviso-modal.component';

describe('DetaleAvisoModalComponent', () => {
  let component: DetalleAvisoModalComponent;
  let fixture: ComponentFixture<DetalleAvisoModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DetalleAvisoModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleAvisoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

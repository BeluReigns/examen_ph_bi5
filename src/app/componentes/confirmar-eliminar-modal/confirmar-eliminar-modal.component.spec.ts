import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfirmarEliminarModalComponent } from './confirmar-eliminar-modal.component';

describe('ConfirmarEliminarModalComponent', () => {
  let component: ConfirmarEliminarModalComponent;
  let fixture: ComponentFixture<ConfirmarEliminarModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ConfirmarEliminarModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmarEliminarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

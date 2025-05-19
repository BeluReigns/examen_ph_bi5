import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ModalController } from '@ionic/angular'
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-confirmar-eliminar-modal',
  templateUrl: './confirmar-eliminar-modal.component.html',
  styleUrls: ['./confirmar-eliminar-modal.component.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule, ]
})

export class ConfirmarEliminarModalComponent {
  @Input() titulo: string = ''

  constructor(private modalCtrl: ModalController) {}

  cancelar() {
    this.modalCtrl.dismiss(false)
  }

  confirmar() {
    this.modalCtrl.dismiss(true)
  }
}
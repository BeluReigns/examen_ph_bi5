import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ModalController } from '@ionic/angular'
import { Aviso } from 'src/app/modelos/aviso.model'
import { IonicModule } from '@ionic/angular'


@Component({
  selector: 'app-detale-aviso-modal',
  templateUrl: './detalle-aviso-modal.component.html',
  styleUrls: ['./detalle-aviso-modal.component.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule ]
})

export class DetalleAvisoModalComponent {
  @Input() aviso!: Aviso

  constructor(private modalCtrl: ModalController) {}

  cerrar() {
    this.modalCtrl.dismiss()
  }
}
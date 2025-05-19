import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Aviso } from 'src/app/modelos/aviso.model'
import { trashOutline } from 'ionicons/icons'
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-aviso-item',
  templateUrl: './aviso-item.component.html',
  styleUrls: ['./aviso-item.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule ]
})

export class AvisoItemComponent {
  @Input() aviso!: Aviso
  @Input() mostrarEliminar: boolean = false
  @Output() onEliminar = new EventEmitter<string>()
  @Output() onVerDetalle = new EventEmitter<Aviso>()

  IconoTrash = trashOutline

  eliminar() {
    this.onEliminar.emit(this.aviso.id)
  }

  verDetalle() {
    this.onVerDetalle.emit(this.aviso)
  }
}
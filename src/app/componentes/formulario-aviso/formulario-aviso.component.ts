import { Component, inject, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Aviso } from 'src/app/modelos/aviso.model'
import { AvisosService } from 'src/app/servicios/avisos.service'
import { Camera,CameraResultType, CameraSource } from '@capacitor/camera'
import { AvisoItemComponent } from '../aviso-item/aviso-item.component'
import { ModalController } from '@ionic/angular'
import { ConfirmarEliminarModalComponent } from '../confirmar-eliminar-modal/confirmar-eliminar-modal.component' 
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-formulario-aviso',
  standalone: true,
  imports: [ CommonModule, IonicModule, ReactiveFormsModule, AvisoItemComponent, ConfirmarEliminarModalComponent],
  templateUrl: './formulario-aviso.component.html',
  styleUrls: ['./formulario-aviso.component.scss']
})
export class FormularioAvisoComponent implements OnInit {
  formulario!: FormGroup
  formBuilder = inject(FormBuilder)
  imagenBase64: string = ''

  avisos: Aviso[] = []

  constructor( private avisosService: AvisosService, private modalCtrl: ModalController) {}

  async ngOnInit() {
    this.formulario = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(20)]]
    })
    await this.cargarAvisos()
  }

  async cargarAvisos() {
    await this.avisosService.cargarAvisos()
    this.avisos = this.avisosService.obtenerAvisos()
  }

  async tomarFoto() {
    const foto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 80
    })
    this.imagenBase64 = foto.dataUrl || ''
  }

  async guardar() {
    if (this.formulario.invalid || !this.imagenBase64) return

    const { titulo, descripcion } = this.formulario.value
    await this.avisosService.agregarAviso(titulo, descripcion, this.imagenBase64)
    this.formulario.reset()
    this.imagenBase64 = ''
    await this.cargarAvisos()
  }

  async confirmarEliminacion(id: string) {
    const aviso = this.avisos.find(a => a.id === id)
    const modal = await this.modalCtrl.create({
      component: ConfirmarEliminarModalComponent,
      componentProps: { titulo: aviso?.titulo || '' }
    })
    await modal.present()

    const { data } = await modal.onDidDismiss()
    if (data === true) {
      await this.avisosService.eliminarAviso(id)
      await this.cargarAvisos()
    }
  }
}
import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { Router } from '@angular/router'
import { Aviso } from 'src/app/modelos/aviso.model'
import { AvisosService } from 'src/app/servicios/avisos.service'
import { ConfiguracionesService } from 'src/app/servicios/configuraciones.service'
import { AvisoItemComponent } from 'src/app/componentes/aviso-item/aviso-item.component'
import { ModalController } from '@ionic/angular'
import { DetalleAvisoModalComponent } from 'src/app/componentes/detalle-aviso-modal/detalle-aviso-modal.component'
import { settingsOutline, add } from 'ionicons/icons'


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ CommonModule, IonicModule, AvisoItemComponent ]
})

export class HomePage implements OnInit {
  addIcon = add
  settingsOutline = settingsOutline
  avisos: Aviso[] = []
  mostrarEliminar = false

  constructor(
    private router: Router,
    private avisosService: AvisosService,
    private configuracionesService: ConfiguracionesService,
    private modalCtrl: ModalController
  ) {  }

  async ngOnInit() {
    await this.cargarAvisos()
  }

  async ionViewWillEnter() {
    await this.cargarAvisos()
  }

  async cargarAvisos() {
    await this.avisosService.cargarAvisos()
    this.avisos = this.avisosService.obtenerAvisos()
    this.mostrarEliminar = await this.configuracionesService.obtenerEstadoEliminar()
  }

  async abrirDetalle(aviso: Aviso) {
    const modal = await this.modalCtrl.create({
      component: DetalleAvisoModalComponent,
      componentProps: { aviso },
      cssClass: 'modal-detalle'
    })
    await modal.present()
  }

  eliminarAviso(id: string) {
    this.avisosService.eliminarAviso(id)
    this.avisos = this.avisosService.obtenerAvisos()
  }

  irAFormulario() {
    this.router.navigate(['/formulario'])
  }
  irAConfiguracion() {
    this.router.navigate(['/configuracion'])
  }
}

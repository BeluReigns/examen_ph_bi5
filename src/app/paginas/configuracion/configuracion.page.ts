import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ConfiguracionesService } from 'src/app/servicios/configuraciones.service'
import { homeOutline } from 'ionicons/icons'
import { IonicModule } from '@ionic/angular'
import { Router } from '@angular/router'

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule ]
})

export class ConfiguracionPage implements OnInit {
  mostrarEliminar = false
  homeOutline = homeOutline

  constructor(private configuracionesService: ConfiguracionesService, private router: Router) {  }

  async ngOnInit() {
    this.mostrarEliminar = await this.configuracionesService.obtenerEstadoEliminar()
  }

  async cambiarEstado(event: CustomEvent) {
    this.mostrarEliminar = event.detail.checked
    await this.configuracionesService.guardarEstadoEliminar(this.mostrarEliminar)
  }

  irAlInicio() {
    this.router.navigate(['/home'])
  }
  
}
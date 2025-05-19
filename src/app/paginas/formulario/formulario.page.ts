import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormularioAvisoComponent } from 'src/app/componentes/formulario-aviso/formulario-aviso.component'
import { homeOutline } from 'ionicons/icons'
import { IonicModule } from '@ionic/angular'
import { Router } from '@angular/router'



@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ CommonModule, IonicModule, FormularioAvisoComponent, ],
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss']
})

export class FormularioPage {
  homeOutline = homeOutline
  constructor (private router: Router) {  }

  irAlInicio() {
    this.router.navigate(['/home'])
  }
}



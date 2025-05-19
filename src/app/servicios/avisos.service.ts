import { Injectable } from '@angular/core'
import { Preferences } from '@capacitor/preferences'
import { Aviso } from '../modelos/aviso.model'
import { v4 as uuidv4 } from 'uuid'

@Injectable({ providedIn: 'root' })
export class AvisosService {
  private clave = 'avisos'
  private listaAvisos: Aviso[] = []

  // carga lista de Avisos con promesa si existe un array Aviso con elementos.
  async cargarAvisos(): Promise<Aviso[]> {
    const { value } = await Preferences.get({ key: this.clave })
    this.listaAvisos = value ? JSON.parse(value) : []
    return this.listaAvisos
  }

  // Ver lista de Avisos
  obtenerAvisos(): Aviso[] {
    return this.listaAvisos
  }

  // Agregar Aviso
  async agregarAviso(titulo: string, descripcion: string, imagen: string) {
    const nuevo: Aviso = {
      id: uuidv4(),
      titulo,
      descripcion,
      fecha: new Date().toISOString(),
      imagen
    }
    this.listaAvisos.unshift(nuevo)
    await this.guardarAvisos()
  }

  // Eliminar Aviso
  async eliminarAviso(id: string) {
    this.listaAvisos = this.listaAvisos.filter(aviso => aviso.id !== id)
    await this.guardarAvisos()
  }

  // Guardar Aviso
  private async guardarAvisos() {
    await Preferences.set({
      key: this.clave,
      value: JSON.stringify(this.listaAvisos)
    })
  }
}
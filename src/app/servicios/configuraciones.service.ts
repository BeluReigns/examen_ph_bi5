import { Injectable } from '@angular/core'
import { Preferences } from '@capacitor/preferences'

@Injectable({ providedIn: 'root' })
export class ConfiguracionesService {
  private clave = 'mostrarEliminar'

  // Guardar el estado 
  async guardarEstadoEliminar(valor: boolean): Promise<void> {
    await Preferences.set({
      key: this.clave,
      value: JSON.stringify(valor)
    })
  }

  // obtener estado eliminar con promesa booleana- true o false
  async obtenerEstadoEliminar(): Promise<boolean> {
    const { value } = await Preferences.get({ key: this.clave })
    return value ? JSON.parse(value) : false
  }
}

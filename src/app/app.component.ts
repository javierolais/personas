import { Component, HostBinding } from '@angular/core';
import {PersonaService} from '../../src/app/services/persona.service';
import { Persona } from './models/Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';

  @HostBinding('class') classes = 'row';
  
  persona: Persona = {
    id: 0,
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    categoria: '',
    mensaje: ''
  }

  constructor(private personaService: PersonaService) {
  }

  savePersona() {
    delete this.persona.id;
    if (this.persona.nombre === '') {
      alert('Introduce el nombre de la persona');
    } else if (this.persona.empresa === '') {
      alert('Introduce el nombre de la empresa');
    } else if (this.persona.correo === ''){
      alert('Introduce el correo electrónico');
    } else if (this.persona.telefono === '') {
      alert('Introduce el teléfono');
    } else if (this.persona.categoria === '') {
      alert('Introduce la categoría');
    } else if (this.persona.mensaje === '') {
      alert('Introduce el mensaje');
    } else {
      this.personaService.savePersona(this.persona).subscribe(
        res => {
          alert('Persona registrada exitosamente!');
          window.location.reload();
        },
        err => {
          alert('Ocurrió un error al momento de guardar la persona. Favor de comunicarse con el equipo de soporte!');
        }
      );
    }
  }
}

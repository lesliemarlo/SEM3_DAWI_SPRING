import { Component } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pais } from '../../models/pais.model';
import { PaisService } from '../../services/pais.service';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado.model';
import Swal from 'sweetalert2';






@Component({
  selector: 'app-add-empleado',
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule],
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent {
  lstPaises: Pais[] = []; // Se declara la propiedad lstPaises

  objEmpleado: Empleado = {
    nombres: "",
    apellidos: "",
    fechaNacimiento: new Date(),
    pais: {
      idPais: -1
    }
  }

  constructor(
    private paisService: PaisService,
    private empleadoService: EmpleadoService
  ) {
    this.paisService.listaPais().subscribe(
      x => this.lstPaises = x
    );
  }

  registra() {
    this.empleadoService.registraEmpleado(this.objEmpleado).subscribe(
      x => Swal.fire({
        icon: 'info',
        title: 'Resultado del Registro - Leslie',
        text: x
      })
    );
  }
}
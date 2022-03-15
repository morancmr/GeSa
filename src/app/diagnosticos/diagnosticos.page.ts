import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosticos',
  templateUrl: './diagnosticos.page.html',
  styleUrls: ['./diagnosticos.page.scss'],
})
export class DiagnosticosPage implements OnInit {
  searchTerm:string;
  centrosSalud = [
    {
      "nombre":"Hospital Pedro Emilio De Marchena",
      "direccion":"Av. Las Hortencias, Bonao, R.D.",
      "telefono":"809-936-0697"
    },
    {
      "nombre":"Home",
      "direccion":"Duarte",
      "telefono":"809-345-2322"
    },
    {
      "nombre":"Monseñor",
      "direccion":"Av. Aniana Vargas, Bonao, R.D.",
      "telefono":"809-525-0347"
    },
    {
      "nombre":"Clínica San Antonio",
      "direccion":"Calle Los Santos, Bonao, R.D.",
      "telefono":"849-986-5412"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

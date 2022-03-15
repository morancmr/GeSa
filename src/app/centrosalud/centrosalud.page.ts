import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-centrosalud',
  templateUrl: './centrosalud.page.html',
  styleUrls: ['./centrosalud.page.scss'],
})
export class CentrosaludPage implements OnInit {

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

  constructor(private alertCtrl: AlertController) { }

  async presentPrompt() {
  let alert = this.alertCtrl.create({
    header: 'Agregando Centro de Salud',
    inputs: [
      {
        name: 'nameCentro',
        placeholder: 'Nombre'
      },
      {
        name: 'direccionCentro',
        placeholder: 'Dirección',
        type: 'text'
      },
      {
        name: 'telefonoCentro',
        placeholder: 'Telefono',
        type: 'tel'
      }
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Agregar',
        handler: data => {
          console.log('Submit clicked');
        }
      }
    ]
  });
   (await alert).present();

}
  ngOnInit() {
  }

}

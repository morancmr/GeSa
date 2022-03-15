import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiagnosticosPageRoutingModule } from './diagnosticos-routing.module';

import { DiagnosticosPage } from './diagnosticos.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiagnosticosPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [DiagnosticosPage]
})
export class DiagnosticosPageModule {}

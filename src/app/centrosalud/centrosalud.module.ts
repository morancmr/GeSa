import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentrosaludPageRoutingModule } from './centrosalud-routing.module';

import { CentrosaludPage } from './centrosalud.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentrosaludPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [CentrosaludPage]
})
export class CentrosaludPageModule {}

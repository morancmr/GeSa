import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentrosaludPage } from './centrosalud.page';

const routes: Routes = [
  {
    path: '',
    component: CentrosaludPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentrosaludPageRoutingModule {}

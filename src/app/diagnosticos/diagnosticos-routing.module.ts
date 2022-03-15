import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiagnosticosPage } from './diagnosticos.page';

const routes: Routes = [
  {
    path: '',
    component: DiagnosticosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagnosticosPageRoutingModule {}

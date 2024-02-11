

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderDataComponentComponent } from './render-data-component/render-data-component.component';

const routes: Routes = [
  { path: 'render', component: RenderDataComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

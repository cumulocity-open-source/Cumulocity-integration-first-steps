import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule as ngRouterModule } from '@angular/router';
import { CoreModule, BootstrapComponent, RouterModule } from '@c8y/ngx-components';
import { RenderDataComponentComponent } from './render-data-component/render-data-component.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(),
    ngRouterModule.forRoot([], { enableTracing: false, useHash: true }),
    CoreModule.forRoot()
  ],
  bootstrap: [BootstrapComponent],
   declarations: [
    RenderDataComponentComponent
  ]
})
export class AppModule {}

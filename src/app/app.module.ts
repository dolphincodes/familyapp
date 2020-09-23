import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {PdfJsViewerModule} from 'ng2-pdfjs-viewer';
import {FlexModule} from '@angular/flex-layout';
import {PdfViewerComponent} from './pdf-viewer/pdf-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    PdfJsViewerModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule , Injector} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { PcfComponentComponent } from './pcf-component/pcf-component.component';
import { CdkDrag, DragDropModule} from '@angular/cdk/drag-drop';
import { SyncfusionComponent } from './syncfusion/syncfusion.component';
import { PdfViewerModule } from '@syncfusion/ej2-angular-pdfviewer';


@NgModule({
  declarations: [
      PcfComponentComponent,
      SyncfusionComponent
  ],
  imports: [
    BrowserModule,
    CdkDrag,
    PdfViewerModule
  ],
  providers: [],
  entryComponents : [PcfComponentComponent]
 
})
export class AppModule {
  constructor(private injector : Injector){}
  ngDoBootstrap(){
    const el = createCustomElement(PcfComponentComponent, {injector : this.injector});
    customElements.define('app-pcf-component',el)
  }
 }

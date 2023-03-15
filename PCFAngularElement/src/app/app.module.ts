import { NgModule , Injector} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { PcfComponentComponent } from './pcf-component/pcf-component.component';
import { CdkDrag, DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
      PcfComponentComponent
  ],
  imports: [
    BrowserModule,
    CdkDrag
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, Component } from '@angular/core';
import { createCustomElement} from '@angular/elements'

//import { AppRoutingModule } from './app-routing.module';
import { RatingComponet } from './rating.component';

@NgModule({
  declarations: [
    RatingComponet
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [RatingComponet]
})
export class AppModule { 
  constructor(private injector: Injector){
    const component = createCustomElement(RatingComponet,{injector})
    customElements.define('ca-rating', component);
  }
  
  ngDoBootstrap(){
  }
}
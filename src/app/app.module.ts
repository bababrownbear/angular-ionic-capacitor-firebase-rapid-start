import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules//material/material.module';
import { SectionComponent } from './components/section/section.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent, SectionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

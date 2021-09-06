import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common"
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

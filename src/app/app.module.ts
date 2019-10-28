import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ColorRedDirective } from './directives/color-red.directive';
import { HighlighterDirective } from './directives/highlighter.directive';
import { DatePipe } from './pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    FooterComponent,
    FormComponent,
    HeaderComponent,
    QuoteComponent,
    ColorRedDirective,
    HighlighterDirective,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

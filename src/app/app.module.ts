import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConversorModule } from './conversor';
import { MoedaService, ConversorService} from './conversor/services';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ConversorModule],
  providers: [MoedaService, ConversorService],
  bootstrap: [AppComponent],
})
export class AppModule {}

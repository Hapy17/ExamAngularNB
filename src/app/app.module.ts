import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotosPharesComponent } from './components/motos-phares/motos-phares.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MotoDetailsComponent } from './components/moto-details/moto-details.component';
import { MotoTypeComponent } from './components/moto-type/moto-type.component';
import { MotoMarqueComponent } from './components/moto-marque/moto-marque.component';

@NgModule({
  declarations: [
    AppComponent,
    MotosPharesComponent,
    MotoDetailsComponent,
    MotoTypeComponent,
    MotoMarqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

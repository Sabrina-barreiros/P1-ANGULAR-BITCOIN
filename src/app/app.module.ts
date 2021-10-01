import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SabrinaWalletComponent} from './sabrina-wallet/sabrina-wallet.component';
import { SabrinaCurrencyComponent} from './sabrina-currency/sabrina-currency.component';
import {SabrinaWalletService} from './sabrina-wallet.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    {path: 'sabrina-currency', component: SabrinaCurrencyComponent},
    {path: 'sabrina-wallet', component: SabrinaWalletComponent},
  ]) ],

  declarations: [ AppComponent, HelloComponent, SabrinaWalletComponent, SabrinaCurrencyComponent,  ],
  bootstrap:    [ AppComponent ],
  providers: [SabrinaWalletService],
})
export class AppModule { }

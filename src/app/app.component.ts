import { Component, VERSION } from '@angular/core';
import {SabrinaWalletService} from './sabrina-wallet.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(public walletService: SabrinaWalletService) {}

  ngOnInit() {
    this.walletService.updateBitcoinRates();
  }

}

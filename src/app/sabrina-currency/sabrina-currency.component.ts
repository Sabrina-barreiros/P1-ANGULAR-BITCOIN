import { Component, OnInit } from '@angular/core';
import {SabrinaWalletService} from '../sabrina-wallet.service';

@Component({
  selector: 'app-sabrina-currency',
  templateUrl: './sabrina-currency.component.html',
  styleUrls: ['./sabrina-currency.component.css']
})
export class SabrinaCurrencyComponent implements OnInit {

  constructor(public walletService: SabrinaWalletService) {}

  ngOnInit() {
    this.walletService.updateBitcoinRates();
  }

}
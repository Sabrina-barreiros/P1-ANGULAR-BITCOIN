import { Component, OnInit } from '@angular/core';
import {SabrinaWalletService} from '../sabrina-wallet.service';

@Component({
  selector: 'app-sabrina-wallet',
  templateUrl: './sabrina-wallet.component.html',
  styleUrls: ['./sabrina-wallet.component.css']
})
export class SabrinaWalletComponent implements OnInit {

  constructor(public walletService: SabrinaWalletService) {}

  ngOnInit() {
    this.walletService.updateBitcoinRates();
  }
}
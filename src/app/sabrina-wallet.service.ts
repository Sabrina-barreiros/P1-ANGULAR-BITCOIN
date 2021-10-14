import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Bitcoin{
  time: {
    updated: string
  };
  bpi: {
    USD: {
      symbol: string;
      rate_float: number
    };
    EUR: {
      symbol: string;
      rate_float: number
    }
  }
}

interface BrlBitcoin{
  time: {
    updated: string
  };
  bpi: {
    BRL: {
      symbol: string;
      rate_float: number
    }
  }
}


@Injectable()
export class SabrinaWalletService {
  bitcoinRates: Array<Bitcoin> = [];
  brlRate: Array<BrlBitcoin> = [];

  Bitcoin: number = 0;

  constructor(private http: HttpClient) { 
    this.updateBitcoinRates();
    setInterval(() =>{
      this.updateBitcoinRates();
    },60000);
  }

  updateBitcoinRates(){
    this.http.get<Bitcoin>("https://api.coindesk.com/v1/bpi/currentprice.json").subscribe(data => {
      this.bitcoinRates.push(data);
      
    });

    this.http.get<BrlBitcoin>("https://api.coindesk.com/v1/bpi/currentprice/BRL.json").subscribe(data => {
      this.brlRate.push(data);
      
    });
  }

  addBitcoin(value: number){
    this.Bitcoin += value;
  }

  removeBitcoin(value: number){
    this.Bitcoin -= value;
  }
  
}


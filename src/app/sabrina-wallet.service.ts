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
    BRL: {
      symbol: string;
      rate_float: number
    }
  }
}


@Injectable()
export class SabrinaWalletService {
  bitcoinRates: Array<Bitcoin> = [];
  brlRate: Array<Bitcoin> = [];

  lastBRLRate: number;
  lastUSDRate: number;
  lastEURRate: number;
  previusValue: number;



  constructor(private http: HttpClient) { }

  updateBitcoinRates(){
    this.http.get<Bitcoin>("https://api.coindesk.com/v1/bpi/currentprice.json").subscribe(data => {
      this.bitcoinRates.push(data);
      if (data) {
        this.bitcoinRates.push(data);
        this.lastEURRate = data.bpi.EUR.rate_float;
      }
    });

  if (this.bitcoinRates.length !== 0) {
    this.http
      .get<Bitcoin>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((data) => {
        this.brlRate.push(data);

        this.lastBRLRate = data.bpi.BRL.rate_float;
        this.lastUSDRate = data.bpi.USD.rate_float;

      });
  }
  setInterval(() => {
    this.updateBitcoinRates();
  }, 60000);
  }}


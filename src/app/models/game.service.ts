import { Injectable, OnInit } from '@angular/core';
import { Player } from './game';
import { Http } from '@angular/http';

@Injectable()
export class GameService{

  apiRoot = "//localhost:3000"
  
  me: Player;

  constructor(private http: Http) {
    //this.login("Obi-Wan Kenobi");
   }

   login(name: string){
    this.me = new Player();
    this.me.name = name;
    this.http.get(this.apiRoot + "/game/quotes").subscribe( data =>{
      this.me.quotes = data.json();
    })
   }
}

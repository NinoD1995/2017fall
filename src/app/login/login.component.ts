import { Component, OnInit } from '@angular/core';
import { GameService } from '../models/game.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private game: GameService) { }

  ngOnInit() {
  }

  login(){
    
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  game = { name: '', count: 0 };

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.game = this.navParams.get('game');
  }

  goBack() {
    this.navCtrl.pop();
  }
}

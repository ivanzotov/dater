import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { CreatePage } from '../../pages/create/create';
import { GamePage } from '../../pages/game/game';

@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {
  games = [{
    name: 'Первая игра',
    count: 2,
  }, {
    name: 'Вторая игра',
    count: 3,
  }];

  constructor(public modalCtrl: ModalController, public nav: NavController) {
  }

  openGame(game: Object) {
    this.nav.push(GamePage, { game: game });
  }

  createGame() {
    let modal = this.modalCtrl.create(CreatePage);
    modal.present();
  }

}

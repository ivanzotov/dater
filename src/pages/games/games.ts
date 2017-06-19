import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { CreatePage } from '../../pages/create/create';
import { GamePage } from '../../pages/game/game';

@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {
  items = ['hello', 'world'];

  constructor(public modalCtrl: ModalController, public nav: NavController) {
  }

  openGame(item: string) {
    this.nav.push(GamePage, { item: item });
  }

  createGame() {
    let modal = this.modalCtrl.create(CreatePage);
    modal.present();
  }

}

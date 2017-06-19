import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {
  name = 'Новая игра'
  usersCount = 2

  constructor(public viewCtrl: ViewController) {
  }

  createGame() {
    console.log(`Создание игры "${this.name}", ${this.usersCount}`)
  }

  nameIsEmpty() {
    return this.name.trim() === ''
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

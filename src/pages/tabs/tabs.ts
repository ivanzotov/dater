import { Component } from '@angular/core';

import { GamesPage } from '../games/games';
import { SettingsPage } from '../settings/settings';
import { InfoPage } from '../info/info';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = GamesPage;
  tab2Root = SettingsPage;
  tab3Root = InfoPage;

  constructor() {

  }
}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.html',
})
export class HomePage {
  protected readonly title = signal('emcali-team');
}

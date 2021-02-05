import { Component } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

const STYLES = {
  paper: {
    display: 'block',
    position: 'relative',
    margin: '.5em',
    padding: '1em',
    cursor: 'pointer',
    overflow: 'hidden',
    userSelect: 'none'
  }
};

@Component({
  selector: 'app-wannaflex',
  templateUrl: './wannaflex.component.html',
  styleUrls: ['./wannaflex.component.css']
})
export class WannaflexComponent {

  readonly classes = this._theme.addStyleSheet(STYLES);

  constructor(
    private _theme: LyTheme2
  ) { }
}

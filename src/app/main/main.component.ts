import { Component, Input } from '@angular/core';
import { Member } from 'src/types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @Input()
  members: Member[] = [];
}

import { Component, input } from '@angular/core';
import { ICardInfo } from '../Interfaces/ICardInfo';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  cardInfo = input<ICardInfo>();
}

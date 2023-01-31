import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css'],
})
export class DishCardComponent {
  @Input() productName!: string;
  @Input() productPill!: number;
  @Input() imgProduct!: string;
  @Input() id!: string;
}

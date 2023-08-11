import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-interactive-rating',
  imports: [CommonModule],
  templateUrl: './interactive-rating.component.html',
  styleUrls: ['./interactive-rating.component.scss'],
})
export class InteractiveRatingComponent {
  ratings: number[] = [1, 2, 3, 4, 5];
  selectedRating: number = 0;
  showThankYou: boolean = false;

  constructor() {}

  selectRating(rating: number): void {
    this.selectedRating = rating;
  }

  submitRating(): void {
    this.showThankYou = true;
  }
}

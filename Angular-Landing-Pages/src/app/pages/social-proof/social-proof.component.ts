import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {REVIEW, STARS, USER} from "../../core/constants/social-proof";

@Component({
  selector: 'app-social-proof',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-proof.component.html',
  styleUrls: ['./social-proof.component.scss']
})
export class SocialProofComponent {
  readonly stars = STARS;
  readonly users = USER;
  readonly review = REVIEW;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESULT_SUMMARY } from '../../core/constants/result-summary';

@Component({
  selector: 'app-result-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-summary.component.html',
  styleUrls: ['./result-summary.component.scss'],
})
export class ResultSummaryComponent {
  readonly results = RESULT_SUMMARY;
}

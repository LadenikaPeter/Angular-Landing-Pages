import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FAQ} from "../../core/constants/accordion-card";

@Component({
  selector: 'app-accordion-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-card.component.html',
  styleUrls: ['./accordion-card.component.scss']
})
export class AccordionCardComponent {
  readonly faq = FAQ;
  selectedItem: number = -1;
  clickHandler(i: number){
    if(i != this.selectedItem){
      this.selectedItem = i
    } else {
      this.selectedItem = -1
    }
  }
}

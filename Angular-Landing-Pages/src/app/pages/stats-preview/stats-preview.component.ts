import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-preview.component.html',
  styleUrls: ['./stats-preview.component.scss'],
})
export class StatsPreviewComponent {
  selectedImage: string | undefined;

  constructor() {
    this.setImageBasedOnScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setImageBasedOnScreenSize();
  }

  private setImageBasedOnScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 425) {
      this.selectedImage =
        '/assets/images/stats-preview/image-header-mobile.jpg';
    } else {
      this.selectedImage =
        '/assets/images/stats-preview/image-header-desktop.jpg';
    }
  }
}

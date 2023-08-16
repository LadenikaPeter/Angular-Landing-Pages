import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {PROJECTS} from "../../core/constants/home";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly projects = PROJECTS;
  @ViewChild('projectSection') projectSectionRef: ElementRef;
  showProjectsSection = false;

  constructor() {
  }

  scrollToProjects(){
    this.projectSectionRef.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.projectSectionRef.nativeElement.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= componentPosition - 500) {
      this.showProjectsSection = true;
    }
  }


}

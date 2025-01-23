import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @ViewChild('asMobileMenu') asMobileMenu: ElementRef | undefined;

  toggleMenu(): void {
    const mobileMenu = this.asMobileMenu?.nativeElement;
    mobileMenu.classList.toggle('hidden');
  } 

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rajib';
  constructor(
    private router: Router
  ) {

  }
  ngOnInit(): void {
    const addEventOnElements = function(elements: NodeListOf<Element>, eventType: string, callback: EventListenerOrEventListenerObject) {
      for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
      }
    }
  
    const navbar = document.querySelector("[data-navbar]") as HTMLElement;
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  
    const toggleNav = () => {
      navbar.classList.toggle("active");
      document.body.classList.toggle("nav-active");
    }
  
    addEventOnElements(navTogglers, "click", toggleNav);
  
  
    const header = document.querySelector("[data-header]") as HTMLElement;
    const backTopBtn = document.querySelector("[data-back-top-btn]") as HTMLElement;
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
      }
    });  
  }


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const currentRoute = this.router.url;
    this.router.navigateByUrl(currentRoute);
  }
}

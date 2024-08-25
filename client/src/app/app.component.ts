import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Kam Teacher';
  url = ""
  sidebarActive: boolean = true
  constructor(private router: Router, private activatedRouter: ActivatedRoute) {

  }
  ngOnInit() {
    this.sidebarActive = true
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      console.log(this.router.url);
      this.url = this.router.url
      if (this.url == "/signup" || this.url == "/login") {
        this.sidebarActive = false
      }
    });



  }

}

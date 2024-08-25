import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Kam Teacher';
  url = ""
  constructor(private router: Router, private activatedRouter: ActivatedRoute) {

  }
  ngOnInit() {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      console.log(this.router.url);
      this.url = this.router.url
    });



  }

}

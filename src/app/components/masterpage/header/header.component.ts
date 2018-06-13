import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  styles: [`
#logo{
    height: 59px;
    position: relative;
    display: block;
    min-width: 310px;
}
.logo {
    background: url(./assets/img/logo2.png) no-repeat 0 0;
    min-width: 310px;
    display: block;
    height: 67px;
    position: absolute;
    top: 3px;
}
`],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public isOpen = false;

  constructor(private router: Router) {}

  public ngOnInit() {
    // On route change, close nav window
    this.router.events.subscribe(() => {
      this.isOpen = false;
    });
  }
}

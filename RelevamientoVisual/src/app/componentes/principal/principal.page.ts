import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  spinner: boolean = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

}

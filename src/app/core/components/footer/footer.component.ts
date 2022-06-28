import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  socialData = [

    {url: 'https://github.com/naylsonrj', name: 'Naylson CostaGithub', img: './assets/svg/github.svg'}
  ];

  constructor() { }
}

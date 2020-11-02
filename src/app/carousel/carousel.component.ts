import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  imgUrl: string[] = [
    'https://static.nationalgeographic.fr/files/styles/image_3200/public/01_booktalk_wolves_0.jpg?w=1600&h=900',
    'https://www.sciencesetavenir.fr/assets/img/2020/10/30/cover-r4x3w1000-5f9b1e93155d7-wolf-1992716-1920.jpg',
    'https://www.slate.fr/sites/default/files/styles/1200x680/public/philipp-pilz-qz2equppqjs-unsplash.jpg',
    'https://medias.liberation.fr/photo/1242783-le-loup-gris-a-bien-failli-disparaitre-du-territoire-americain-au-debut-du-20e-siecle-et-a-vraisembl.jpg?modified_at=1578926854&width=960',
    'https://www.demotivateur.fr/images-buzz/cover/12544029855f9c2317eee5f_shutterstock-1031210473.jpg'
  ]

  currentUrl: string = this.imgUrl[0];
  i: number = 0;

  constructor() { 
    this.updateImg();
  }

  ngOnInit(): void {
  }

  updateImg() {
    setInterval(() => {
      if (this.i >= 0 && this.i < 4) {
        this.i++;
      } else {
        this.i = 0;
      }
      this.currentUrl = this.imgUrl[this.i];
    }, 5000)
  }

}

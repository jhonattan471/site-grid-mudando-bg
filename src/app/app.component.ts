import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'sgpweb-home-carteiros';

  constructor() {

  }
  async ngAfterViewInit() {
    let i = 1
    let lastPartId = -1;
    let partId = -1;
    await this.delay(2000);
    while (true) {
      if (i == 8) {
        i = 1;
      }
      do {
        partId = Math.floor(Math.random() * 12) + 1;
      } while (lastPartId == partId || [6,7,10,11].includes(partId))

      await this.iniciarAnimacaoQuadrado(partId, i);
      i++;
    }

  }


  async iniciarAnimacaoQuadrado(posicao, imagem) {
    document.getElementById("part" + posicao).style.opacity = "0";
    document.getElementById("part" + posicao + "b").classList.add("insideShadow");
    if(imagem == 1){
      document.getElementById("part" + posicao + "b").style.backgroundSize = "contain";
    }
    document.getElementById("part" + posicao + "b").style.opacity = "1";
    document.getElementById("part" + posicao + "b").style.backgroundImage = `url(assets/imagem${imagem}.jpg)`;
    await this.delay(3000);
    document.getElementById("part" + posicao + "b").classList.remove("insideShadow");
    document.getElementById("part" + posicao + "b").style.opacity = "0";
    document.getElementById("part" + posicao).style.opacity = "1";
    await this.delay(1000);
    document.getElementById("part" + posicao + "b").style.backgroundSize = "cover";
    return Promise.resolve();
  }


  async delay(tempo) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, tempo);
    })
  }
}


/*
<>!<>
<>?<>

*/
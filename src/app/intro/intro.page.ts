import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
 
  slides = [
    {
      title: "BIENVENIDO A MI TICKET",
      description: "Descubre los eventos disponibles de tu ciudad en nuestra app.",
      image: "../../assets/img/3.jpg",
      help_text: "Desliza para continuar...",
     
    },
    {
      title: "CANSADO DE HACER FILAS?",
      description: "No te preocupes, ahorrate las filas comprando desde nuestra aplicacion.",
      image: "../../assets/img/2.jpg",
      help_text: "Desliza para continuar...",
     
    },
    {
      title: "APARTE TU TICKET YA!",
      description: "Consulta los eventos de las proximas fechas y aparta tu ticket con anticipacion.",
      image: "../../assets/img/1.jpg",
      help_text: "Desliza para continuar...",
      class: "slide-3"
    },
    {
      title: "NOSOTROS TE NOTIFICAMOS",
      description: "No te pierdas ningun evento, activa las notificaciones para estar al tanto de los proximos eventos en tu ciudad.",
      image: "../../assets/img/4.jpg",
     
      class: "slide-4"
    }
  ]

  constructor( 
    private router: Router,
    private storage: Storage) { }
  goToHome(){
    console.log("go to home");
    this.router.navigateByUrl('menu/home');
    this.storage.set('mostreLaIntro', true);
  }
  ngOnInit() {
  }
  ionViewDidEnter() {
    console.log("Ya entre y vi la intro");
    
  }
}

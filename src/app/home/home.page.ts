import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  event_list: any;
  local_events: any;
  categoryList: any;
  categoryById_list: any;

  constructor(
    private router: Router,
    private storage: Storage,
    private events: EventsService,
    private menu: MenuController,
    private navCtrl: NavController
    ) {}
    ionViewDidEnter(){
      this.events.getEvents().then( (res) =>{
        this.event_list = res;
        console.log("Eventos desde el servidor",this.event_list)})
        console.log("Local Events",this.events.getLocalEvents().events);

        this.events.getCategories().then((res) =>{
          this.categoryList = res;
          console.log('Categorias del servidor', res);
        });

        this.events.getID(1).then((res) =>{
          this.categoryById_list = res;
          console.log('Categorias del servidor por id', res);
        })
    }
    ngOnInit() {
    }

  goToIntro(){
    console.log("go to intro");
    this.router.navigateByUrl('/intro');
    this.storage.set('mostreLaIntro', true);
  }
  closeMenu(){
    console.log("cerrar menu")
    this.menu.close();
  }
  logout(){
    this.navCtrl.navigateRoot("/login")
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NgModel, FormsModule} from '@angular/forms';
import { ModalContentPage } from './direct/direct.page';
import { InfoService } from './info.service';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@NgModule({
  declarations: [AppComponent,ModalContentPage],
  entryComponents: [ ModalContentPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  
  providers: [
    StatusBar,
    BluetoothSerial,
    SplashScreen,
    InfoService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

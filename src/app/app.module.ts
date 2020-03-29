import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {GodService} from "../services/god-service";  
import {TempleService} from "../services/temple-service"
import {WeatherProvider} from "../services/weather";
import {SubcatService} from "../services/subcat-service"



import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";

import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";
import {RelegionhomePage} from '../pages/relegionhome/relegionhome';
import { GlobalProvider } from '../providers/global/global';
import {RelgodPage} from "../pages/relgod/relgod"
import {ReltemplePage} from "../pages/reltemple/reltemple"
import {RelsaintPage} from "../pages/relsaint/relsaint"
import { Facebook } from '@ionic-native/facebook';
import { SaintaddPage } from '../pages/saintadd/saintadd';
import { TempleaddPage } from '../pages/templeadd/templeadd';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { RelsaintallPage } from "../pages/relsaintall/relsaintall";

import { HttpModule } from '@angular/http'; 

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    SaintaddPage,
    TempleaddPage,
    AboutusPage,
    RelsaintallPage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    RelegionhomePage,
    RelgodPage,
    ReltemplePage,
    RelsaintPage
  ],
  imports: [ 
    FormsModule,  
    BrowserModule,
    HttpClientModule,
    IonicModule,  
    HttpModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    SaintaddPage,
    TempleaddPage,
    AboutusPage,
    RelsaintallPage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    RelegionhomePage,
    RelgodPage,
    ReltemplePage,
    RelsaintPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    Facebook,
    ActivityService,
    TripService,
    GodService,
    SubcatService,
    TempleService,
    WeatherProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GlobalProvider
  ]
})

export class AppModule {
}

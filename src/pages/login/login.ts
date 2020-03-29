import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import {TripsPage} from "../trips/trips";
import {GlobalProvider} from "../../providers/global/global"



import {RegisterPage} from "../register/register";
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public global:  GlobalProvider,public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController, private fb: Facebook) {  
    this.menu.swipeEnable(false);
    
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
        //this.nav.setRoot(HomePage);
    //this.nav.setRoot(TripsPage);
    this.global.fbLogin = true;
    this.nav.setRoot(TripsPage);

  } 

    // facebook login and go to home page
    fblogin() {
 
 console.log('inside fb');
      //this.nav.setRoot(HomePage);
  //this.nav.setRoot(TripsPage);


  this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));


//this.fb.logEvent(this.fb.EVENT_NAME_ADDED_TO_CART);


//this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);

  this.nav.setRoot(TripsPage);

} 


  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}

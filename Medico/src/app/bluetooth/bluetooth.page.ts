import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController, ToastController } from '@ionic/angular';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.page.html',
  styleUrls: ['./bluetooth.page.scss'],
})
export class BluetoothPage {
  dataSend: string ="";
  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;
enable=false;

  constructor(private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController, private toastCntrl: ToastController ) 
  {
   this.bluetoothSerial.enable();
  }

  enableBluetooth(x)
  {
    x=!x;
    if(x == true)
    {
        this.bluetoothSerial.enable();
    }
    else
    {
      this.bluetoothSerial.enable();
    }
  }


  startScanning() {
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    this.bluetoothSerial.discoverUnpaired().then((success) => {
      this.unpairedDevices = success;
      this.gettingDevices = false;
      success.forEach( element => {
        // alert(element.name);
      });
    },
      (err) => {
        console.log(err);
      })

    this.bluetoothSerial.list().then((success) => {
      this.pairedDevices = success;
    },
      (err) => {

      })
  }
  success = (data) => alert(data);
  fail = (error) => alert(error);

  async selectDevice(address: any) {

    let alert = await this.alertCtrl.create({
      header: 'Connect',
      message: 'Do you want to connect with?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connect',
          handler: () => {
            this.bluetoothSerial.connect(address).subscribe(this.success, this.fail);
          }
        }
      ]
    });
    alert.present();

  }

  async disconnect() {
    let alert = await this.alertCtrl.create({
      header: 'Disconnect?',
      message: 'Do you want to Disconnect?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Disconnect',
          handler: () => {
            this.bluetoothSerial.disconnect();
          }
        }
      ]
    });
    alert.present();
  }

  sendData()//8 to send data to the device
{
  //this.dataSend+='\n';
  this.showToast(this.dataSend);

  this.bluetoothSerial.write(this.dataSend).then(success =>  {
    this.showToast(success);
  }, error =>{
    this.showError(error);
  })
}

ledOn()//8 to send data to the device
{
  //this.dataSend+='\n';
  this.showToast(this.dataSend);

  this.bluetoothSerial.write('1').then(success =>  {
    this.showToast(success);
  }, error =>{
    this.showError(error);
  })
}
ledOff()//8 to send data to the device
{
  //this.dataSend+='\n';
  this.showToast(this.dataSend);

  this.bluetoothSerial.write('0').then(success =>  {
    this.showToast(success);
  }, error =>{
    this.showError(error);
  })
}


async showToast(msj)//10 for toastController
{
const toast = await this.toastCntrl.create({
  message: "Your Request is being procecssed :) ",
  duration: 2000,
  position:'top'
  
});
toast.present();  
}

  async showError(error)//9 for alertController 
{
  let alert =  await this.alertCtrl.create({
    header: 'Error',
    message: 'Please establish connection',
    buttons: ['Dismiss']
  });
alert.present();
}

}

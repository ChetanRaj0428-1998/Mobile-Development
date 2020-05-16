import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController, ToastController } from '@ionic/angular';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  dataSend: string ="";
  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;
  array=[];i=0;//new
  bluetooth=false;
  constructor(private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController, private toastCntrl: ToastController,private flashlight: Flashlight,public bluetoothle: BluetoothLE  ) 
  {
   this.bluetoothSerial.enable();
   
  }
bluetoothToggle()
{
  this.bluetooth=!this.bluetooth;
if(this.bluetooth==true)
{
  this.bluetoothSerial.enable();
  
}
else
{
  this.bluetoothle.disable();
  
}
}
  

arrayData()//new
{
  if(this.dataSend!="")
  {
this.array[this.i]=this.dataSend;
this.dataSend="";
this.i++;
console.log(this.array);
  } 
}

sendArray()
{
  
  this.bluetoothSerial.write(this.array).then(success =>  {
    this.showToast(success);
  }, error =>{
    this.showError(error);
  })
  this.i=0;
  this.array=[];  
  
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
  this.flashlight.switchOff();
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
  this.flashlight.switchOn();
}


async showToast(msj)//10 for toastController
{
const toast = await this.toastCntrl.create({
  message: msj,
  duration: 1000,
  position:'top'
});
toast.present();  
}

  async showError(error)//9 for alertController 
{
  let alert =  await this.alertCtrl.create({
    header: 'Error',
    message: 'Please establish connection',
    buttons: ['Dismiss'],

  });
alert.present();
}

}
/*export class HomePage {
  pairedList: pairedlist;
  listToggle: boolean = false;
  pairedDeviceId: number = 0;
  dataSend: string ="";
  flag=false;
  constructor(private alertCntrl: AlertController, private bluetoothSerial: BluetoothSerial, private toastCntrl: ToastController) //AlertController to give warning messages and  ToastController just to give small messages such as “device connected” and finally Bluetooth Serial module that we installed. To use them in app functions we need to initialize them in constructor.
  {
    
   this.checkBluetoothEnabled();
  }



  checkBluetoothEnabled()//1   check that Bluetooth is enabled 
  {
  this.bluetoothSerial.isEnabled().then(success =>{
    this.listPairedDevices();
  }, error =>
  {
    this.showError("Please Enable Bluetooth");
  });
}

  listPairedDevices()//2 to get list of paired devices that we need to connect
  {
    this.bluetoothSerial.list().then(success => {
      this.pairedList = success;
      this.listToggle=true;
    }, error => {
      this.showError("Please Enable Bluetooth");
      this.listToggle=false;
    });
  } 
  

selectDevice()//4 to select the device from paired devices list 
{
    let connectedDevice = this.pairedList[this.pairedDeviceId];
    if(!connectedDevice.address)
    {
      this.showError('Select Paired Device to Connect');
      return;
    }
    let address = connectedDevice.address;
    let name = connectedDevice.name;

    this.connect(address);
}

connect(address)//5 to connect to that device
{
//Attempt to connect device with the specified address, call app.deviceConnected if success   
this.bluetoothSerial.connect(address).subscribe(success =>{
  this.deviceConnected();
  this.showToast("Successfully Connected");
}, error =>{
  this.showError("Error: Connecting to Device");
});
}

deviceConnected()//6 to check that device is connected with the mobile device and ready to transmit the data
{
  //Subscribe to data recieving as soon as the delimiter( i.e)sequence of one or more characters for specifying the boundary between separate, independent regions in plain text or other data streams.) is read
this.bluetoothSerial.subscribe('\n').subscribe(success =>{
  this.handleData(success);
  this.showToast("Connected successfully");
}, error =>{
  this.showError(error);
})
}

deviceDisconnected()//7  is to disconnect with the device 
{
  //Unsubscribe from data recieving
  this.bluetoothSerial.disconnect();
  this.showToast("Device Disconnected");
}

handleData(data)
{
  this.showToast(data);
}

sendData()//8 to send data to the device
{
  this.dataSend+='\n';
  this.showToast(this.dataSend);

  this.bluetoothSerial.write(this.dataSend).then(success =>  {
    this.showToast(success);
  }, error =>{
    this.showError(error);
  })
}

  showError(error)//9 for alertController 
{
  let alert = await this.alertCntrl.create({
    header: 'Error',
    subHeader: error,
    message: 'This is an alert message.',
    buttons: ['Dismiss']
  });
alert.present();
}

  async showToast(msj)//10 for toastController
{
const toast = await this.toastCntrl.create({
  message: msj,
  duration: 1000
});
toast.present();  
}
}

interface pairedlist {//11 or the interface for pairdList.
  "class":number,
  "id":string,
  "address":string,
  "name":string
}*/


  

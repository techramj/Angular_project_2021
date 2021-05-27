import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
 // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
 // template: `
 //   <app-server></app-server>
 //   <app-server></app-server>
 //  `,
  styleUrls: ['./servers.component.css']

})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = "";
  serverCreationStatus = "No server created";
  username = "";
  buttonStatus = false;
  logs = [];

  onDisplayButtonClick() {
    this.logs.push(new Date());
  }

  onInputClick() {
    this.username = "";
    console.log('Username: ', this.username);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was Created'+' Name is '+this.serverName;
  }

  onUpdateServerName(event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onInputData(event) {
    if (this.username.length != 0) {
      this.buttonStatus = true;
    } else {
      this.buttonStatus = false;
    }
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
     }
      , 2000);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }



}

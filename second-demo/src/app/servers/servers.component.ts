import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = "";
  allowNewServer = false;
  serverCreationStatus = "";
  serverCreated = false;
  servers = ['Server 1','Server 2'];

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server Created. ' + 'Server Name: ' + this.serverName;
    this.servers.push(this.serverName);

  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
     },2000)
   }

  ngOnInit(): void {
  }

}

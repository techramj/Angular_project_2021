import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = "10";
  serverStatus = 'Offline';

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    if (this.serverStatus == 'Offline') {
      return 'red';
    } else {
      return 'green';
    }
  }

  constructor() {
    this.serverStatus=Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  ngOnInit(): void {
  }

}

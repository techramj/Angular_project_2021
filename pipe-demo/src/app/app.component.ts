import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appStatus = new Promise(
    (resolve, error) => {
      setTimeout(() => {
        resolve('stable');
      },2000);
    }
  );


  servers = [
    {
      instanceType: 'medium',
      name: 'Production server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'devlopment server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Env server',
      status: 'critical',
      started: new Date(15, 1, 2017)
    },
  ];

  fileredStatus = "";

  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger':server.status==='critical',
    };
  }

  addServer() {
    this.servers.push({
      instanceType: 'medium',
      name: 'Production server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    });
  }
}

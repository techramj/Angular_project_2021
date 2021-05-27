import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server: { id: number, name: string, status: string } = {id:0,name:'no name',status:'ofline'};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService:ServersService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status

    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status
      }
    );

    this.route.queryParams.subscribe(
      (queryParams) => {
        this.allowEdit = queryParams['allowEdit'] == '1' ? true : false;
      }
    );

  }
  onUpdateServer1() {

  }

  onUpdateServer(id:number, serverInfo:{name:string,status:string}) {
    this.serversService.updateServer(id, serverInfo);
  }

}

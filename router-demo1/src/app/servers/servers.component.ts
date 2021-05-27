import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
  ],
 // providers : [ServersService]
})
export class ServersComponent implements OnInit {
   servers :{id:number,name:string,status:string}[]= [];

  constructor(private router:Router, private route:ActivatedRoute, private serversService:ServersService) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    this.router.navigate(['/servers'],{relativeTo:this.route})
  }

}

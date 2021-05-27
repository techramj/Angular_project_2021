import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  h3{
    color:darkblue;
  }
`]
})
export class ServerComponent {
  serverId = 10;
  Server = 'New server';

  getServerStatus() {
    return "offline";
  }


}

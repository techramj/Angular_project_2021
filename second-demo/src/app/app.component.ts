import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  serverElements = [{ type: 'server', name: 'Test server', content: 'First test server' },
  { type: 'blueprint', name: 'Blueprint server', content: 'First test blueprint' }
  ];


  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    console.log('onServerAdded');
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}

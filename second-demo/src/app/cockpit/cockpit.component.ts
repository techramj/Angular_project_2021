import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  newServername='';
  newServercontent = '';

  // onAddServer() {
  //   this.serverCreated.emit({ serverName: this.newServername, serverContent: this.newServercontent });
  // }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({ serverName: this.newServername, serverContent: this.newServercontent });
  // }

  onAddServer(serverNameInput : HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.serverCreated.emit({ serverName: serverNameInput.value, serverContent: serverContentInput.value });
  }

  onAddBlueprint(serverNameInput : HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: serverNameInput.value, serverContent: serverContentInput.value });
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
// by defuat @Input() will expose the name element if you want to expose it out then pass the paramenter
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { }


  ngOnInit(): void {
  }

}


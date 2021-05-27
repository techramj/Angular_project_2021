import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  statusChanged = new EventEmitter<{id:number,newStatus:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });

  }

}

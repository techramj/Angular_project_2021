import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  onCreateAccount(accountName:string, accountStatus:string) {
    this.accountAdded.emit({ name: accountName, status: accountStatus });
    console.log('A server status chaged: new status: ', accountStatus);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

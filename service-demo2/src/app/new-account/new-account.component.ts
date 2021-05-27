import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
 // providers : [LoggingService]
})
export class NewAccountComponent implements OnInit {


  //constructor(private loggingService:LoggingService, private accountService : AccountsService) { }

  constructor(private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe(
      (status) => alert('New status: '+status)
    );
  }

  ngOnInit(): void {
  }

  onCreateAccount(accountName:string, accountStatus:string) {
    this.accountService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);

  }

}

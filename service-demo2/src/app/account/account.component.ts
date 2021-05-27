import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  //providers : [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  statusChanged = new EventEmitter<{id:number,newStatus:string}>();

 // constructor(private loggingService: LoggingService, private accountService: AccountsService) { }

  constructor(private accountService: AccountsService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    //this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }

}

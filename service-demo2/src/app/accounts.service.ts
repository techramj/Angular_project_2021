import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {

   accounts = [
    { name: "Master account", status: "active" },
    { name: "Test account", status: "inactive" },
    {name:"Hidden account",status:"unknown"}
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) { }

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingService.logStatusChange(status);
  }

  updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }

}

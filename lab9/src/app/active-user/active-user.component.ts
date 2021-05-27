import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit, OnDestroy {
  users: string[] = [];

  private firstObsSubscription: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;

    //non anglular obserable
    /*
    this.firstObsSubscription= interval(1000).subscribe(
      count => {
        console.log(count);
       }
    );
    */

    //create equivalent observerable similar to interval
    const customIntervalObserable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 3) {
          observer.error(new Error('count is greater than 3'));

        }
        count++;
      },1000);
    })

    this.firstObsSubscription=customIntervalObserable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    });

  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }


  ngOnDestroy(): void {
    /*
    this.firstObsSubscription.unsubscribe();
    console.log('destroy called');
    */

  }

}

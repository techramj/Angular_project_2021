import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  paramSubcription :Subscription
  user: { id: number, name: string };

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    this.paramSubcription= this.route.params.subscribe(
      (params) => {
        console.log(params);
        this.user.id = params['id'];
        this.user.name = params['name'];
       }
    );
  }

  ngOnDestroy() {
    //this.paramSubcription.unsubscribe();
  }

}

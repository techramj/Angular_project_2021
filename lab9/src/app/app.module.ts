import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUserComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

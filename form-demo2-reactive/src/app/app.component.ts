import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['jack','john'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        'username': new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        'email': new FormControl(null,[Validators.email,Validators.required], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies' : new FormArray([])
    });

    //two type of form subscriber value and staus
    this.signupForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );

    this.signupForm.statusChanges.subscribe(
      (status) => {
        console.log(status);
      }
    );
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);

    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  onSubmit() {

  }

  forbiddenNames(control:FormControl): {[s:string]:boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) != -1) {
      return {'nameIsForbidden':true}
     }

    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'test@test.com') {
            resolve({ 'emailForForbidden': true });
          } else {
            resolve(null);
          }
        },1500)
       }
    );

    return promise;
  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') submitForm: NgForm;
  defaultQuestion: string = "pet";
  answer: string = '';
  genders: string[] = ['female', 'male '];

  user: { username: string, email: string, gender: string, question: string, answer: string } =
    { username: '', email: '', gender: '', question: '', answer: '' };

  submitted: boolean = false;

  onSubmit() {
    console.log("submitted", this.submitForm);
    this.user.username = this.submitForm.value.userData.username;
    this.user.email = this.submitForm.value.userData.email;
    this.user.answer = this.submitForm.value.questionAnswer;
    this.user.question = this.submitForm.value.secret;
    this.user.gender = this.submitForm.value.gender;

    this.submitted = true;
    this.submitForm.reset();
  }

  suggestUserName() {
    const suggestedname = "superuser";
    /*
    this.submitForm.setValue({
      userData: {
        username: suggestedname,
        email : ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });
    */

    this.submitForm.form.patchValue({
      userData: {
        username: suggestedname
      }
    });


  }

}

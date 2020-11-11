import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent {

  registrationForm: FormGroup;

  constructor(private fBuilder: FormBuilder, private userService: UsersService) {
    this.registrationForm = this.fBuilder.group({
      name: ['', Validators.required]
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.userService.saveUser(this.registrationForm.get('name').value).subscribe();
    this.registrationForm.get('name').reset();
  }

}

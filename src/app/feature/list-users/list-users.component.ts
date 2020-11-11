import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Observable, Subscription} from 'rxjs';

export interface People {
  id: number;
  name: string;
}

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  public people: Subscription;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.people = this.userService.getUsers().subscribe();
  }

}

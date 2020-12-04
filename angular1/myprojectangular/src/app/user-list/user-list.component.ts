import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	
  users: Employee[]= [];

  constructor(private userService: UserService) {
	  this.users = [];
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
  
  
}
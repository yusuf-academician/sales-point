import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!:User
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.userService.getCurrentUser().subscribe((data) => {
      this.user = data.data
      console.log(this.user)
    },error => {
      console.log(error)
    })
  }
}

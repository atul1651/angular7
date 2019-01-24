import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  title1 = 'doctor';
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers = () => console.log('hi');
}

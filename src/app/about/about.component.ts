import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { _getViewData } from '@angular/core/src/render3/instructions';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  public responseData1: any;
  public responseData2: any;
  private interval: Subscription;
  constructor(private heroService: PostsService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts = () => this.interval = this.heroService.PostsService()
    .subscribe(responseList => {
      this.responseData1 = responseList[0];
      this.responseData2 = responseList[1];
    })

  ngOnDestroy = () => {
    this.interval.unsubscribe();
  }

}

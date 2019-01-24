import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  constructor(private abcd: HttpClient) { }

  private postServiceUrl = 'https://jsonplaceholder.typicode.com/posts';
  private userUrl = 'https://jsonplaceholder.typicode.com/users';
  public PostsService(): Observable<any> {
    const users = this.abcd.get(this.userUrl);
    const dataposts = this.abcd.get(this.postServiceUrl);
    return forkJoin(users, dataposts);
  }
}

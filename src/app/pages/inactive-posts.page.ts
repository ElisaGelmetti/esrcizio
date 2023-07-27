import { Component, OnInit } from "@angular/core";
import { Post } from "../Model/post";
import { PostsService } from "../posts.service";

@Component({
  template: `
    <div class="container mt-5">
      <div *ngFor="let post of posts">
        <div *ngIf="!post.active" class="card mb-4">
          <h5 class="card-header">Post</h5>
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">
              {{ post.body }}
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class InactivePostsPage implements OnInit {
  posts!: Post[];

  constructor(private postSrv: PostsService) {
    this.postSrv.getPosts().then((posts: Post[]) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  ngOnInit(): void {}
}

import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Post } from "../Model/post";

@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.html",
  styleUrls: ["../pages/post-item.component.html"],
})
export class PostItemComponent {
  @Input() post!: Post;
  @Output() updatePost = new EventEmitter<Post>();

  toggleActive(): void {
    this.post.active = !this.post.active;
    this.updatePost.emit(this.post);
  }
}

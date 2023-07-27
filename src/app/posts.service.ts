import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Post } from "./Model/post";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  private apiUrl = "/assets/db.json";
  private posts: Post[] = [];

  getPosts() {
    return fetch(this.apiUrl).then((res) => {
      return res.json();
    });
    // Se l'array dei post è già popolato, restituiscilo direttamente
  }
}

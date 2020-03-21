import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Post} from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private db: AngularFirestore) {}

  createPost(post: Post) {
    const postData = JSON.parse(JSON.stringify(post));

    return this.db.collection('posts').add(postData);
  }

  getAllPosts(): Observable<Post[]> {
    const posts = this.db
      .collection<Post>('posts', ref => ref.orderBy('createdDate', 'desc'))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(c => ({
            postId: c.payload.doc.id,
            ...c.payload.doc.data(),
          }));
        })
      );
    return posts;
  }

  getPostbyId(postId: string): Observable<Post | undefined> {
    const postDetails = this.db.doc<Post>(`posts/${postId}`).valueChanges();

    return postDetails;
  }

  updatePost(postId: string, post: Post) {
    const putData = JSON.parse(JSON.stringify(post));

    return this.db.doc(`posts/${postId}`).update(putData);
  }

  deletePost(postId: string) {
    return this.db.doc(`posts/${postId}`).delete();
  }
}

export class Post {
  postId: string;
  title: string;
  content: string;
  author: string;
  createdDate: any;
  likes: number;

  constructor() {
    this.title = '';
    this.content = '';
    this.likes = 0;
  }
}

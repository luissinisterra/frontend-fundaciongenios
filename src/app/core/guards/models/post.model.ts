import { IPost } from "./post.interface";

export class Post implements IPost {
  private id: number;
  private title: string;
  description: string;
  image: string;

  constructor(id: number, title: string, description: string, image: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getImage(): string {
    return this.image;
  } 
}
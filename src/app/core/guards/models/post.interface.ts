export interface IPost {
  id: number;
  title: string;
  description: string;
  image: string;

  getId(): number;
  getTitle(): string;
  getDescription(): string;
  getImage(): string;
}
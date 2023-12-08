export interface IPhoto {
  id: string;
  title?: string;
  description?: string;
  tags?: {
    id: string;
    tag: string;
  }[];
  url: string;
  thumbnailUrl?: string;
}

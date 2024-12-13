export interface NewsEntity {
  id: number;
  title: string;
  slug: string;
  content: string;
  category: string;
  thumbnail_url: string;
  author_id: number;
  created_at: Date;
}
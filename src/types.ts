export interface Project {
  id: number;
  title: string;
  image: string;
  tags: string[];
  category: string;
}

export interface NavItem {
  name: string;
  path: string;
}

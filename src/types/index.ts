
export interface Link {
  id: string;
  title: string;
  url: string;
  icon?: string;
  color?: "purple" | "blue" | "pink" | "green" | "yellow" | "orange";
  style?: "default" | "highlight";
}

export interface Profile {
  name: string;
  username: string;
  bio: string;
  avatar: string;
  links: Link[];
}

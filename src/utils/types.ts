
export type TechnologiesFilter = {
    key: string;
    label: string;
    color: string;
    type: string[]
};


export type Project = {
  id: number;
  title: string;
  frontend: string[];
  backend: string[];
  url: string;
  platform: string[];
  externalLink: boolean;
  urlRepository: string;
  image: string;
};
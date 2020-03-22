export interface Page {
  page: string;
  size: string;
}

export interface TransformedPage {
  page: number;
  size: number;
}

export interface Moment {
  "created_at": string,
  "id": number,
  "text": string,
  "user": {
    "id": number,
    "screen_name": string,
    "name": string
  }
}


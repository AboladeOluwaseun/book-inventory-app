export interface BooksData {
  name: string;
  publisher: string;
  authors: string[];
  isbn: string;
}

export interface FetchedBook {
  authors: string[];
  characters: string[];
  country: string;
  isbn: string;
  mediaType: string;
  name: string;
  numberOfPages: number;
  povCharacters: string[];
  publisher: string;
  released: string;
  url: string;
}

export interface BookData {
  name: string;
  publisher: string;
  authors: string[];
  isbn: string;
  url: string;
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

export interface Character {
  name: string;
  aliases: string[];
  characterBooks: string[];
  culture: string;
}

export interface FetchedCharacter {
  aliases: string[];
  allegiances: [];
  books: string[];
  born: string;
  culture: string;
  died: string;
  father: string;
  gender: string;
  mother: string;
  name: string;
  playedBy: string[];
  povBooks: [];
  spouse: string;
  titles: string;
  tvSeries: string[];
  url: string;
}

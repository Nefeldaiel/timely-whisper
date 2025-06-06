export type LetterType = 'unread' | 'read' | 'sent' | 'draft';

export interface Letter {
  id: number;
  title: string;
  date: string;
  type: LetterType;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  avatarSeed: string;
  isFavorite: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarSeed: string;
  letters: Letter[];
  contacts: Contact[];
} 
export type LegalSection = {
  title: string;
  content: string;
  list?: string[];
};

export type LegalContent = {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}; 
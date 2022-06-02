export type optionsTypes = {
  id?: string;
  header?: string;
  imgSrc?: string;
  imgClass?: string;
  imgAlt?: string;
  contentInfo: sectionTypes[];
}

export type sectionTypes = {
  subheading?: string;
  options: string[];
  links: string[];
}
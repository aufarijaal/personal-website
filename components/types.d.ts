interface IProject {
  title: string;
  description: string;
  techs: string[];
  images: string[];
  videoPreview?: string | undefined;
  demoLink?: string | undefined;
  repoLink?: string | undefined;
}

import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Jamie Kenyon",
  EMAIL: "zerocrunch@outlook.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Jamie Kenyon's blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "mastodon",
    HREF: "https://mastodon.gamedev.place/@triangles_and_textures/",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/TheRealJokerMan/"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/therealjokerman/",
  }
];

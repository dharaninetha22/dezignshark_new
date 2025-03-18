// src/components/BlogData.ts

import { Blog } from "../../../assets";


export interface BlogPost {
  id: string;
  category: string;
  title: string;
  date: string; 
  imagesmall: string;
  description: string;
  author: { name: string; avatar: string };
  image: string;
  bannerImage: string;
  quoteImage: string;
  blogContent: { type: string; content?: string; quoteText?: string }[];
  blogImages: string[];
  extraContent: { title: string; description: string };
}

export const blogData: BlogPost[] = [
  {
    id: "blog1",
    category: "Design / Marketing",
    title: "A Day in the Life of a Fashion Behind the Scene",
    date: "2 Jul 2022",
    imagesmall: Blog.blogsmall,
    author: { name: "Mark Daniel", avatar: Blog.buser },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: Blog.blogfimg1, // Thumbnail Image
    bannerImage: Blog.blogfimg1, // Large Banner Image
    quoteImage: Blog.quote, // Quote Icon
    blogContent: [
      { type: "text", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consequat neque in interdum. Mauris a nulla tortor. Nunc orci dui, blandit eu suscipit at, blandit in dolor. Cras gravida arcu et lorem eleifend, dictum dapibus augue maximus. Integer fermentum viverra sem, eget efficitur nisi gravida ac. Vivamus sodales, sapien quis facilisis hendrerit, elit leo bibendum lectus, et feugiat lectus ante quis quam. Morbi libero nunc, vulputate vitae dui id, congue ultricies risus. Proin porttitor eu libero eget pulvinar. Aliquam tincidunt, urna quis congue blandit, eros velit facilisis odio, eu sagittis libero enim sodales ligula." },
      { type: "quote", quoteText: "VENIAM SOLEAT MOLESTIAE QUI NO, NO HAS EXPLICARI HENDRERIT, LUPTATUM EXPETENDIS IN IUS UT SPLENDID." },
      { type: "text", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consequat neque in interdum. Mauris a nulla tortor. Nunc orci dui, blandit eu suscipit at, blandit in dolor. Cras gravida arcu et lorem eleifend, dictum dapibus augue maximus. Integer fermentum viverra sem, eget efficitur nisi gravida ac. Vivamus sodales, sapien quis facilisis hendrerit, elit leo bibendum lectus, et feugiat lectus ante quis quam. Morbi libero nunc, vulputate vitae dui id, congue ultricies risus. Proin porttitor eu libero eget pulvinar. Aliquam tincidunt, urna" },
    ],
    blogImages: [Blog.blogfimg2, Blog.blogfimg3], // Content Images
    extraContent: {
      title: "On the Specificity of Selectors",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consequat neque in interdum. Mauris a nulla tortor. Nunc orci dui, blandit eu suscipit at, blandit in dolor. Cras gravida arcu et lorem eleifend, dictum dapibus augue maximus. Integer fermentum viverra sem, eget efficitur nisi gravida ac. Vivamus sodales, sapien quis facilisis hendrerit, elit leo bibendum lectus, et feugiat lectus ante quis quam. Morbi libero nunc, vulputate vitae dui id, congue ultricies risus. Proin porttitor eu libero eget pulvinar. Aliquam tincidunt, urna quis congue blandit, eros velit facilisis odio, eu sagittis libero enim sodales ligula.",
    },
  },
  {
    id: "blog2",
    category: "Technology / Development",
    title: "Exploring the Future of Web Design Trends",
    date: "2 Jul 2022",
    imagesmall: Blog.blogsmall,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: { name: "Mark Daniel", avatar: Blog.buser },

    image: Blog.blogfimg1, // Thumbnail Image
    bannerImage: Blog.blogfimg1, // Large Banner Image
    quoteImage: Blog.quote, // Quote Icon
    blogContent: [
      { type: "text", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
      { type: "quote", quoteText: "VENIAM SOLEAT MOLESTIAE QUI NO, NO HAS EXPLICARI HENDRERIT..." },
      { type: "text", content: "Another paragraph of text content..." },
    ],
    blogImages: [Blog.blogfimg2, Blog.blogfimg3], // Content Images
    extraContent: {
      title: "On the Specificity of Selectors",
      description: "More details about CSS selector specificity...",
    },
  },
];

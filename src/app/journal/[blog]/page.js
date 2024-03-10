import Blog from "./blog";
import { blogs } from "../data.js";

export const metadata = {
  title: "Journal | Ports Travel - Explore the World with Us",
  description: "Dive deep into our travel stories and tips from around the globe.",
};

export async function generateStaticParams() {
    return blogs.map((blog) => ({
      blog: blog.slug,
    }))
  }
  // Passing the slug as a prop to the Destination component.
  export default function BlogPage({ params }) {
    return <Blog slug={params.blog} />
  }
  
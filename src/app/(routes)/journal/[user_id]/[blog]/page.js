import Blog from "./blog"

export const metadata = {
  title: "Journal | Ports Travel - Explore the World with Us",
  description:
    "Dive deep into our travel stories and tips from around the globe.",
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/journals`)
  const journals = await res?.json()
  return journals?.map((blog) => ({
    params: {
      user_id: blog.user_id,
      blog: blog.slug,
    },
  }))
}
// Passing the slug as a prop to the Destination component.
export default function BlogPage({ params }) {
  return <Blog user_id={params.user_id} slug={params.blog} />
}

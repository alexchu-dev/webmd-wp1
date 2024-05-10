import Blog from "./blog"


/* Added generateMetaData for dynamic metadata. */
export async function generateMetadata({ params }, parent) {
  const {user_id, blog} = params
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/journals?user_id=${user_id}&slug=${blog}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = await response.json();

  console.log("Journal fetched", data);
  return {
    title: `${data.title} | Ports Travel - Explore the World with Us`,
    description: data.excerpt || 'Explore detailed stories and insights from this travel journal.',
  };
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/journals`)
  const journals = await res?.json()
  return journals?.map((blog) => ({
      user_id: blog.user_id.toString(),
      blog: blog.slug,
  }))
}
// Passing the slug as a prop to the Destination component.
export default function BlogPage({ params }) {
  return <Blog user_id={params.user_id} slug={params.blog} />
}

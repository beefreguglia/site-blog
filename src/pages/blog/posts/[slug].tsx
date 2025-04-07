import { useRouter } from "next/router";

export default function PostsPage() {
  const router = useRouter();

  console.log(router.query.slug);
  
  return(
    <h1>Post Page</h1>
  )
} 
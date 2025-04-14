import { Search } from "@/components/search";
import { useRouter } from "next/router";
import { PostCard } from "./post-card";
import { PostGridCard } from "./post-grid-card";
import { allPosts } from "contentlayer/generated";

export function BlogList() {
  const router = useRouter();

  const query = (router.query.q as string) ?? "";
  const pageTitle = query
    ? `Resultados de busca para ${query}`
    : "Dicas e estratégias para impulsionar seu negócio";

  const posts = allPosts;

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="pb-14">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4">
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              Blog
            </span>
            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              {pageTitle}
            </h1>
          </div>
          <Search />
        </div>
      </header>
      <PostGridCard>
        {posts.map(({ _id, title, description, slug, image, date, author }) => (
          <PostCard
            key={_id}
            title={title}
            author={{
              avatar: author.avatar,
              name: author.name,
            }}
            date={new Date(date).toLocaleDateString("pt-BR")}
            description={description}
            image={image}
            slug={slug}
          />
        ))}
      </PostGridCard>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

type Author = {
  name: string;
  avatar: string;
};

type PostCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: Author;
};

export function PostCard({
  author,
  date,
  description,
  image,
  slug,
  title,
}: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full max-w-2xl rounded-[12px] border bg-gray-600 border-gray-400 overflow-hidden transition-all duration-300 hover:border-blue-300"
    >
      <div className="p-2 rounded-md overflow-hidden">
        <div className="relative">
          <div className="absolute top-0 right-0 px-3 py-1 bg-gray-600 backdrop-blur-sm rounded-bl-[12px]">
            <span className="text-body-xs text-gray-300">{date}</span>
          </div>
          <Image
            src={image}
            alt={title}
            width={288}
            height={144}
            className="w-full h-40 object-cover object-center rounded-lg"
          />
        </div>
        <div className="px-2 mt-4 space-y-4">
          <h2 className="text-heading-sm text-gray-100 line-clamp-3">
            {title}
          </h2>
          <p className="text-ellipsis text-gray-300 text-body-sm line-clamp-3">
            {description}
          </p>

          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <div className="size-5 relative md:size-6 overflow-hidden rounded-full border border-blue-200">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <span className="text-body-sm text-gray-300">{author.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

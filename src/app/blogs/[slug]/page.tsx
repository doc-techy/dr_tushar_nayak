import Image from "next/image";
import { notFound } from "next/navigation";
import { blogArticles, getBlogBySlug } from "@/data/site-content";

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

type BlogArticlePageParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: BlogArticlePageParams) {
  const { slug } = await params;
  const article = getBlogBySlug(slug);
  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | Dr. Tushar Nayak` ,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.heroImage],
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageParams) {
  const { slug } = await params;
  const article = getBlogBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white text-gray-900 pb-24">
      <div className="relative w-screen -mx-[calc(50vw-50%)] h-[320px] sm:h-[420px] lg:h-[500px] overflow-hidden">
        <Image
          src={article.heroImage}
          alt={article.heroAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/10" />
        <div className="relative h-full flex flex-col justify-end px-6 sm:px-10 lg:px-14 pb-10 sm:pb-14">

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight max-w-4xl text-gray-900">
            {article.title}
          </h1>
          <p className="mt-4 text-sm font-semibold text-indigo-600 uppercase tracking-normal">
            {article.readingTime}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid gap-4 lg:gap-6">
          {article.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <div key={`${article.slug}-heading-${index}`} className="space-y-2 pt-4 lg:pt-6">
                  <span className="block h-1 w-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    {block.text}
                  </h2>
                </div>
              );
            }

            if (block.type === "list") {
              return (
                <ul
                  key={`${article.slug}-list-${index}`}
                  className="space-y-3 pl-5 list-disc text-gray-700 text-sm sm:text-base"
                >
                  {block.items.map((item) => (
                    <li key={item} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p
                key={`${article.slug}-paragraph-${index}`}
                className="text-base sm:text-lg text-gray-700 leading-8"
              >
                {block.text}
              </p>
            );
          })}
        </div>

        {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-10 border-t border-gray-200">
          <span className="text-xs uppercase tracking-[0.35em] text-gray-600">
            Share this article
          </span>
          <div className="flex items-center gap-3">
            {[
              { label: "LinkedIn", href: `https://www.linkedin.com/shareArticle?mini=true&url=https://drtusharnayak.com/blogs/${article.slug}` },
              { label: "Twitter", href: `https://twitter.com/intent/tweet?url=https://drtusharnayak.com/blogs/${article.slug}` },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-gray-300 text-xs font-semibold uppercase tracking-normal text-gray-700 hover:bg-gray-100 hover:border-indigo-400 transition"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </article>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogArticles, getBlogBySlug, type BlogContentBlock, type FAQItem } from "@/data/site-content";
import { articleSchema, faqSchema, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

type BlogArticlePageParams = { params: Promise<{ slug: string }> };

function articleFaqs(content: BlogContentBlock[]): FAQItem[] {
  const faqs: FAQItem[] = [];
  for (let index = 0; index < content.length - 1; index += 1) {
    const block = content[index];
    const next = content[index + 1];
    if (block.type !== "heading" || next.type !== "paragraph") continue;
    const question = block.text.replace(/^\d+\.\s*/, "").trim();
    if (!question.includes("?")) continue;
    faqs.push({ question, answer: next.text });
  }
  return faqs;
}

export async function generateMetadata({ params }: BlogArticlePageParams) {
  const { slug } = await params;
  const article = getBlogBySlug(slug);
  if (!article) {
    return {};
  }

  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blogs/${article.slug}`,
    ogType: "article",
    images: [article.heroImage],
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageParams) {
  const { slug } = await params;
  const article = getBlogBySlug(slug);

  if (!article) {
    notFound();
  }

  const path = `/blogs/${article.slug}`;
  const faqs = articleFaqs(article.content);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: article.title, path },
  ];

  return (
    <article className="relative min-h-screen text-white pb-24">
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.excerpt,
          path,
          image: article.heroImage,
        })}
      />
      {faqs.length > 0 ? <JsonLd data={faqSchema(faqs)} /> : null}
      <div className="relative w-screen -mx-[calc(50vw-50%)] h-[320px] sm:h-[420px] lg:h-[500px] overflow-hidden">
        <Image
          src={article.heroImage}
          alt={article.heroAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/45 to-[#0a1628]/10" />
        <div className="relative h-full flex flex-col justify-end px-6 sm:px-10 lg:px-14 pb-10 sm:pb-14">
          <Breadcrumbs items={crumbs} />
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight max-w-4xl text-white">
            {article.title}
          </h1>
          {article.author ? (
            <p className="mt-4 text-sm sm:text-base text-white/80 max-w-3xl leading-relaxed">
              By {article.author}
            </p>
          ) : null}
          <p className="mt-4 text-sm font-semibold text-brand-teal uppercase tracking-normal">
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
                  <span className="block h-1 w-14 bg-gradient-to-r from-brand-teal to-brand-navy rounded-full" />
                  <h2 className="text-3xl font-bold text-white">
                    {block.text}
                  </h2>
                </div>
              );
            }

            if (block.type === "list") {
              return (
                <ul
                  key={`${article.slug}-list-${index}`}
                  className="space-y-3 pl-5 list-disc text-white text-sm sm:text-base"
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
                className="text-base sm:text-lg text-white leading-8"
              >
                {block.text}
              </p>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            Knee, hip, sports, or spine symptoms need a personal assessment. Dr. Tushar Nayak consults in Bangalore at Sparsh Hospital and Nishtha Healthcare.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-teal to-brand-navy px-6 py-3 text-sm font-bold text-white"
          >
            Book an appointment
          </Link>
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
                className="px-4 py-2 rounded-full border border-gray-300 text-xs font-semibold uppercase tracking-normal text-gray-700 hover:bg-gray-100 hover:border-brand-teal transition"
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

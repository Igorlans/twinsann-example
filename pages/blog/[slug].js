import MainLayout from "@/components/client/layouts/MainLayout";
import Article from "@/components/client/pages/Blog/Article/Article";
import prisma from "@/prisma/client";
import { fullProductIncludeArgs } from "@/pages/products/[productSlug]";

export async function getStaticPaths() {
	const slugs = await prisma.post.findMany({
		select: {
			slug: true
		}
	})

	const paths = slugs.map((slug) => ({
		params: { slug: slug.slug },
	}))

	return { paths, fallback: "blocking" }
}

export async function getStaticProps(page) {
	let post = await prisma.post.findUnique({
		where: {
			slug: page.params.slug,
		},
		include: {
			Products: {
				include: {
					product: {
						include: {
							...fullProductIncludeArgs
						}
					}
				}
			},
			Category: {
				include: {
					Products: {
						include: {
							...fullProductIncludeArgs
						}
					}
				}
			},
			Subcategory: {
				include: {
					Products: {
						include: {
							...fullProductIncludeArgs
						}
					}
				}
			},
			Review: {
				where: {
					status: "APPROVED"
				}
			},
		}
	})
	post = JSON.stringify(post)
	post = JSON.parse(post)

	const offer = await prisma.Offer.findMany()

	return {
		props: {
			post,
			offer: offer[0] || 'Помилка оферу',
			messages: (await import(`@/messages/${page.locale}.json`)).default,
		},
	}
}


const ArticlePage = ({ post }) => {
	return <Article post={post} />
};

ArticlePage.getLayout = function getLayout(page) {
	return (
		<MainLayout>
			{page}
		</MainLayout>
	)
}

export default ArticlePage;
import MainLayout from "@/components/client/layouts/MainLayout";
import Blog from "@/components/client/pages/Blog/Blog";
import prisma from "@/prisma/client";

export async function getStaticProps(context) {
	let posts = await prisma.post.findMany({
		orderBy: {
			createdAt: "desc"
		},
		include: {
			Review: true
		}
	})
	posts = JSON.stringify(posts)
	posts = JSON.parse(posts)

	const offer = await prisma.Offer.findMany()

	return {
		props: {
			posts,
			offer: offer[0] || 'Помилка оферу',
			messages: (await import(`@/messages/${context.locale}.json`)).default,
		},
	}
}


const BlogPage = ({ posts }) => {
	return <Blog posts={posts} />
};

BlogPage.getLayout = function getLayout(page) {
	return (
		<MainLayout>
			{page}
		</MainLayout>
	)
}

export default BlogPage;
import MainLayout from "@/components/client/layouts/MainLayout";
import Category from "@/components/client/pages/Category/Category";
import prisma from "@/prisma/client";
import {useDynamicTranslate} from "@/components/client/hooks/useDynamicTranslate";


export async function getStaticPaths(context) {
	const slugs = await prisma.category.findMany({
		select: {
			slug: true
		},
	})

	// Get the paths we want to pre-render based on posts
	const paths = slugs.map((slug) => ({
		params: { categorySlug: slug.slug },
	}))

	return { paths, fallback: 'blocking' }
}
export async function getStaticProps(page) {

	let products = await prisma.product.findMany({
		where: {
			category : {
				slug: page.params.categorySlug
			},
		},
		include: {
			Colors: {
				include: {
					ProductImages: {
						orderBy: {
							order: 'asc'
						},
						include: {
							image: true
						}
					}
				}
			},
			Review: {
				where: {
					approved: 'approve'
				}
			},
			Sales: true,
			category: true,
			subcategory: true
		}
	})

	const category = await prisma.category.findUnique({
		where: {
			slug: page.params.categorySlug
		},
	})

	products = JSON.stringify(products);
	products = JSON.parse(products)

	const offer = await prisma.Offer.findMany()
	const popup = await prisma.Popup.findMany()

	// console.log(jsonData)
	return {
		props: {
			category: category || null,
			products: products || [],
			offer: offer[0]|| 'Помилка оферу',
			popup: popup[0] || 'Помилка Popup',
			messages: (await import(`@/messages/${page.locale}.json`)).default,
		},
		revalidate: 120
	}
}
// export async function getServerSideProps(page) {
//
// 	const response = await fetch(`${API_URL}/api/products?category=${page.params.categorySlug}`, {
// 		method: "GET"
// 	})
//
// 	const jsonData = await response.json()
// 	// console.log(jsonData)
// 	return {
// 		props: {
// 			products: jsonData.products || []
// 		},
// 	}
// }
const CategoryPage = ({products, category}) => {
	const dbTranslate = useDynamicTranslate()

	return (
		// <div>category</div>
		<Category products={products} categoryName={dbTranslate(category, 'name')} isSubcategory={false} category={category}/>
	);
};


CategoryPage.getLayout = function getLayout(page) {
	return (
		<MainLayout>
			{page}
		</MainLayout>
	)
}

export default CategoryPage;
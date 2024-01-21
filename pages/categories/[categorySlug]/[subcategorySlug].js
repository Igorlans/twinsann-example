import {API_URL} from "@/config";
import MainLayout from "@/components/client/layouts/MainLayout";
import Category from "@/components/client/pages/Category/Category";
import prisma from "@/prisma/client";
import {useDynamicTranslate} from "@/components/client/hooks/useDynamicTranslate";


export async function getStaticPaths() {
	const subcategories = await prisma.subcategory.findMany({
		select: {
			slug: true,
			category: {
				select: {
					slug: true
				}
			}
		},
	})

	// Get the paths we want to pre-render based on posts
	const paths = subcategories.map((subcat) => ({
		params: { categorySlug: subcat.category.slug , subcategorySlug: subcat.slug},
	}))

	return { paths, fallback: 'blocking' }
}
export async function getStaticProps(page) {

	let products = await prisma.product.findMany({
		where: {
			category : {
				slug: page.params.categorySlug
			},
			subcategory : {
				slug: page.params.subcategorySlug
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

	let subcategory = await prisma.subcategory.findUnique({
		where: {
			slug: page.params.subcategorySlug
		}
	})

	let category = await prisma.category.findUnique({
		where: {
			slug: page.params.categorySlug
		}
	})


	products = JSON.stringify(products);
	products = JSON.parse(products)
	// console.log(jsonData)

	const offer = await prisma.Offer.findMany()
	const popup = await prisma.Popup.findMany()
	
	return {
		props: {
			subcategory,
			category,
			products: products || [],
			offer: offer[0] || 'Помилка оферу',
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
const SubcategoryPage = ({products, subcategory, category}) => {
	const dbTranslate = useDynamicTranslate()
	return (
		// <div>category</div>
		<Category products={products} categoryName={dbTranslate(subcategory, 'name')} isSubcategory={true} category={category} subcategory={subcategory} />
	);
};


SubcategoryPage.getLayout = function getLayout(page) {
	return (
		<MainLayout>
			{page}
		</MainLayout>
	)
}

export default SubcategoryPage;
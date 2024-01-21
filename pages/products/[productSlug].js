import MainLayout from "@/components/client/layouts/MainLayout";
import Product from "@/components/client/pages/Product/Product";
import prisma from "@/prisma/client";


export async function getStaticPaths() {
	const slugs = await prisma.product.findMany({
		select: {
			slug: true
		},
	})

	// Get the paths we want to pre-render based on posts
	const paths = slugs.map((slug) => ({
		params: { productSlug: slug.slug },
	}))

	return { paths, fallback: 'blocking' }
}

export const fullProductIncludeArgs = {
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
	Criterions: {
		include: {
			CriterionItems: true
		}
	},
	Review: {
		orderBy: {
			createAt: 'desc'
		},
		where: {
			approved: 'approve'
		}
	},
	Sales: true,
	category: true,
	subcategory: true
}
export async function getStaticProps(page) {
	const productId = page.params.productSlug.split('-').slice(-5).join('-')

	const product = await prisma.product.findUnique({
		where: {
			id: productId
		},
		include: fullProductIncludeArgs
	})

	if (!product) {
		return {
			notFound: true,
		}
	}

	const offer = await prisma.Offer.findMany()
	const popup = await prisma.Popup.findMany()

	const category = await prisma.category.findUnique({
		select: {
			name: true,
			name_ru: true,
			slug: true
		},
		where: {
			id: product?.categoryId
		}
	})

	let similarProducts = await prisma.product.findMany({
		take: 15,
		where: {
			categoryId: product?.categoryId
		},
		orderBy: {
			discountValue: 'desc'
		},
		include: fullProductIncludeArgs
	})

	similarProducts = JSON.stringify(similarProducts);
	similarProducts = JSON.parse(similarProducts);

	const productsCount = await prisma.product.count();
	const skip = Math.floor(Math.random() * productsCount);
	let relatedProducts = await prisma.product.findMany({
		take: 15,
		skip,
		orderBy: {
			discountValue: 'desc'
		},
		include: fullProductIncludeArgs
	})

	relatedProducts = JSON.stringify(relatedProducts);
	relatedProducts = JSON.parse(relatedProducts)

	let subcategory;
	if (product?.subcategoryId) {
		subcategory = await prisma.subcategory.findUnique({
			select: {
				name: true,
				name_ru: true,
				slug: true
			},
			where: {
				id: product?.subcategoryId
			}
		})
	}


	let productData = {...product, category: {name: category?.name, name_ru: category?.name_ru, slug: category?.slug} || null, subcategory: {name: subcategory?.name, name_ru: subcategory?.name_ru, slug: subcategory?.slug,} || null}
	productData = JSON.stringify(productData);
	productData = JSON.parse(productData)
	return {
		props: {
			product: productData || null,
			offer: offer[0] || null,
			popup: popup[0] || 'Помилка Popup',
			similarProducts,
			relatedProducts,
			messages: (await import(`@/messages/${page.locale}.json`)).default,
		},
		revalidate: 120
	}
}

// export async function getServerSideProps(page) {
//
// 	const response = await fetch(`${API_URL}/api/products/${page.params.productSlug}`, {
// 		method: "GET"
// 	})
//
// 	const jsonData = await response.json()
// 	// console.log(jsonData)
// 	return {
// 		props: {
// 			product: jsonData.product
// 		},
// 	}
// }
const ProductPage = ({ product, similarProducts, relatedProducts }) => {
	return (
		<>
			<Product
				product={product}
				similarProducts={similarProducts}
				relatedProducts={relatedProducts}
			/>
		</>
		// <div>products</div>
	);
};


ProductPage.getLayout = function getLayout(page) {
	return (
		<MainLayout>
			{page}
		</MainLayout>
	)
}

export default ProductPage;
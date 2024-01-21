import Pagination from '@mui/material/Pagination';
import ArticleCard from "@/components/client/pages/Blog/articleCard/ArticleCard";
import styles from "./blogPage.module.scss";
import usePagination from "@/components/client/pages/Blog/hooks/usePagination";
import { useTranslations } from "next-intl";
import { useDynamicTranslate } from "@/components/client/hooks/useDynamicTranslate";
import SchemaBlock from "@/components/client/SeoBlock/SchemaBlock";

const PER_PAGE = 10;

const Blog = ({ posts }) => {
	const t = useTranslations("Blog");
	const { currentPage, count, renderData, jump } = usePagination(
		posts,
		PER_PAGE
	)

	const dbTranslate = useDynamicTranslate()

	const schema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": posts.map((item, i) => ({
			"@type": "ListItem",
			"position": i + 1,
			"name": dbTranslate(item, 'title'),
			"item": `https://www.twinsann.com/blog/${item.slug}`
		}))
	}

	return (
		<>
			<SchemaBlock schema={schema}/>
			<div className={styles.blog__wrapper}>
				<div className={styles.blog}>
					<h1 className={styles.blog__title}>Блог</h1>
					<p className={styles.blog__subtitle}>
						{ t("subtitle") }
					</p>

					<div className={styles.blog__articles}>
						{
							renderData.map(item => (
								<ArticleCard key={item.id} post={item} />
							))
						}
					</div>
				</div>
				{
					count > 1 ?
						<div className={styles.blog__pagination}>
							<Pagination
								page={currentPage}
								count={count}
								onChange={(_, page) => jump(page)}
							/>
						</div> : null
				}
			</div>
		</>
	)
}

export default Blog;
import SeoBlock from '@/components/client/SeoBlock/SeoBlock';
import classes from './warranty.module.scss'
import SchemaBlock from '@/components/client/SeoBlock/SchemaBlock';
import { useTranslations } from 'next-intl';


const Warranty = ()=> {
	const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Гарантія, обмін, повернення",
          "item": `${process.env.NEXT_PUBLIC_API_URL}/info/warranty`
        }]
    }

	const t = useTranslations("Warranty");
	return (
		<>
			<SeoBlock 
				title="Гарантія, обмін, повернення та додаткові послуги"
                description="Отримайте актуальну інформацію про гарантію, обмін, повернення та додаткові послуги"
			/>
			<SchemaBlock schema={schema} />
			<div className={classes.pageInfo} style={{minHeight: '100vh'}}>
				<h1 className={classes.title}>
					{
						t("title")
					}
				</h1>
				<div className={classes.parts}>
					<div className={classes.part}>
						<div className={classes.upper}>
							<div className={classes.num}>
								1
							</div>
							<div className={classes.partTitle}>
								{
									t("stepOneTitle")
								}
							</div>
						</div>
						<div className={classes.lower}>
							{
								t("stepOneDescr")
							}
						</div>

					</div>
					<div className={classes.part}>
						<div className={classes.upper}>
							<div className={classes.num}>
								2
							</div>
							<div className={classes.partTitle}>
								{
									t("stepTwoTitle")
								}
							</div>
						</div>
						<div className={classes.lower}>
							{
								t("stepTwoDescr")
							}
						</div>

					</div>
				</div>
			</div>
		</>
	)
}
export default Warranty;
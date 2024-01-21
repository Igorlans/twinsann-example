import SeoBlock from '@/components/client/SeoBlock/SeoBlock';
import classes from './about.module.scss';
import Image from "next/image";
import SchemaBlock from '@/components/client/SeoBlock/SchemaBlock';
import { useTranslations } from 'next-intl';

const About = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Про нас",
          "item": `${process.env.NEXT_PUBLIC_API_URL}/info/about`
        }]
    }

    const t = useTranslations("About");
    return (
        <>
            <SeoBlock 
				title="Про нас"
                description="Twin Sann − найбільший онлайн-магазин з власним виробництвом меблів в Україні. З 2020 року ми втілюємо маленькі мрії та грандіозні плани тисяч людей. У нас можна замовити стільчики та пуфи будь-якого дизайну. Ми продаємо за справедливою ціною та надаємо гарантію, бо вважаємо, що онлайн-шопінг має бути максимально зручним і безпечним."
                ogImageUrl={`${process.env.NEXT_PUBLIC_API_URL}/assets/images/foundationer.webp`}
                ogImageWidth={400}
                ogImageHeight={500}
                ogImageAlt="About page photo"
            />
            <SchemaBlock schema={schema} />
            <div className={classes.pageBox}>
                <div className={classes.upper}>
                    <div className={classes.image}>
                        <Image src={'/assets/images/foundationer.webp'} alt="about page photo" fill />
                    </div>

                    <div className={classes.text}>
                        <div className={classes.title}>
                            <h1>
                                {
                                    t("title")
                                }
                            </h1>
                        </div>
                        <div className={classes.main}>
                            <span>
                                {
                                    t("name")
                                } 
                            </span> 
                                {
                                    t("descr")
                                }
                        </div>
                        <div className={classes.socialIcons}>
                            <a href="https://www.instagram.com/twin_sann/">
                                <img src={'/assets/icons/instagram.svg'} alt="instargam icon"/>
                            </a>
                            <a href="https://www.facebook.com/TwinSann/">
                                <img src={'/assets/icons/facebook.svg'} alt="facebook icon"/>
                            </a>
                            <a href="https://t.me/twin_sann">
                                <img src={'/assets/icons/telegram.svg'} alt="telegram icon"/>
                            </a>
                        </div>
                    </div>

                </div>
                <div className={classes.benefits}>
                    <div className={classes.item}>
                        <img src={'/assets/icons/checkmark.png'}/>
                        <div className={classes.text}>
                            <div className={classes.title}>
                                {
                                    t("benefitTitleOne")
                                }
                            </div>
                            <div className={classes.main}>
                               {
                                    t("benefitDescrOne")
                               }
                            </div>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <img src={'/assets/icons/handmade.png'} alt="icon"/>
                        <div className={classes.text}>
                            <div className={classes.title}>
                                {
                                    t("benefitTitleTwo")
                                }
                            </div>
                            <div className={classes.main}>
                               {
                                    t("benefitDescrTwo")
                               }
                            </div>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <img src={'/assets/icons/functional.png'}/>
                        <div className={classes.text}>
                            <div className={classes.title}>
                                {
                                    t("benefitTitleThree")
                                }
                            </div>
                            <div className={classes.main}>
                                {
                                    t("benefitDescrThree")
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
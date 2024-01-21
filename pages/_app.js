import '@/components/client/styles/globals.scss'
import Providers from "@/components/client/shared/Providers";
import {saveUtm} from "@/components/client/lib/gtm/helpers/saveUtm";
import {useEffect} from "react";
import {usePathname} from "next/navigation";
import Script from "next/script";
import Head from "next/head";
import {DefaultSeo} from 'next-seo';
import {NextIntlClientProvider} from "next-intl";

export default function App({Component, pageProps}) {
    const getLayout = Component.getLayout || ((page) => page)
    const pathname = usePathname();
    useEffect(() => {
        saveUtm();

    }, [])

    useEffect(() => {
        if (window.fbq) {
            window?.fbq('track', 'PageView')
        }
    }, [pathname])

  return (
          <>
              <Head>
                  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                  <link rel="manifest" href="/site.webmanifest" />
                  <meta name="google-site-verification" content="AXyrbvGgMZCiwAh0Xvzf5bS2tgaTsxgaN-IbodFQGs8" />
              </Head>
                <DefaultSeo
                    title={undefined}
                    titleTemplate='Twinsann | %s'
                    description='Twinsann'
                    defaultTitle='Twinsann'
                    canonical={`${process.env.NEXT_PUBLIC_API_URL}${pathname}`}
                    defaultOpenGraphImageHeight={600}
                    defaultOpenGraphImageWidth={800}
                    openGraph={{
                        type: 'website',
                        locale: 'uk_UA',
                        title: 'Twinsann',
                        description: 'Twin Sann − найбільший онлайн-магазин з власним виробництвом меблів в Україні. З 2020 року ми втілюємо маленькі мрії та грандіозні плани тисяч людей. У нас можна замовити стільчики та пуфи будь-якого дизайну. Ми продаємо за справедливою ціною та надаємо гарантію, бо вважаємо, що онлайн-шопінг має бути максимально зручним і безпечним.',
                        url: process.env.NEXT_PUBLIC_API_URL,
                        siteName: 'Twinsann.com',
                        images: [
                            { url: `${process.env.NEXT_PUBLIC_API_URL}/assets/icons/TwinSann.svg`, width: 800, height: 600, alt: 'Twinsann' }
                        ]
                    }}
                />
          {
              !pathname?.includes('adminpanel') &&
              <Script id="google-analytics" strategy="lazyOnload">
                {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-K5DK9LK');
                `}
                </Script>
            }
            <NextIntlClientProvider messages={pageProps.messages}>
                <Providers>
                    {getLayout(<Component {...pageProps} />)}
                </Providers>
            </NextIntlClientProvider>
        </>
    )
}

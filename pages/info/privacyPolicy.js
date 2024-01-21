import MainLayout from "@/components/client/layouts/MainLayout";
import PrivacyPolicy from "@/components/client/pages/info/PrivacyPolicy/PrivacyPolicy";
import prisma from "@/prisma/client";

export async function getStaticProps(context) {
	const offer = await prisma.Offer.findMany()
    const popup = await prisma.Popup.findMany()
	return {
		props: {
			offer: offer[0]|| 'Помилка оферу',
            popup: popup[0] || 'Помилка Popup',
            messages: (await import(`@/messages/${context.locale}.json`)).default,
		},
		revalidate: 120
	}
}
const PrivacyPolicyPage = () => {
    return (
        <PrivacyPolicy />
    );
};


PrivacyPolicyPage.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default PrivacyPolicyPage;
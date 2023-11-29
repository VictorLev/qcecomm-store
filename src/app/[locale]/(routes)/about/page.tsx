import Container from "@/components/ui/container"
import { useTranslations } from "next-intl";


const AboutPage = () => {

    const t = useTranslations('About');
    return(
        <Container>
            <div className="flex flex-col space-y-4 px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-black">{t('About')}</h1>
                <p>{t('intro')}</p>
                <h2 className="text-xl font-bold text-black">{t('hJourney')}</h2>
                <p>{t('Journey')}</p>
                <h2 className="text-xl font-bold text-black">{t('hVision')}</h2>
                <p>{t('Vision')}</p>
                <h2 className="text-xl font-bold text-black">{t('hConnect')}</h2>
                <p>{t('Connect')}</p>
            </div>
        </Container>

    )
}

export default AboutPage
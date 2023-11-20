import {useTranslations} from 'next-intl';

const Footer = () => {
    const t = useTranslations('Index');
    return ( 
        <footer className="bg-blue-800 border-t">
            <div className="mx-auto py-10">
                <p className="text-center text-xs text-white">
                    &copy; 2023 QuebecShopDownUnder, Inc. {t('rights reserved')}
                </p>
            </div>
        </footer>
     );
}
 
export default Footer;
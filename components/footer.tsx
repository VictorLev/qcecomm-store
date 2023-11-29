import {useTranslations} from 'next-intl';
import Container from './ui/container';
import { Link } from '@/src/navigation';
import Image from 'next/image';
import linkedinIcon from "public/linkedin.svg";
import githubIcon from "public/github.svg";

const Footer = () => {
    const t = useTranslations('Footer');

    return ( 
        <footer className="bg-blue-800 border-t">
            <Container>
                <div className="grid grid-cols-2 gap-4 p-4  sm:px-6 lg:px-8">
                    <div className="flex flex-col text-xs text-white space-y-3">
                        <h1 className='font-bold'>
                        Contact Info
                        </h1>
                        <p>
                            levesque.vic@gmail.com
                        </p>
                        <div className="flex flex-row">
                            <Link href="https://www.linkedin.com/in/victor-lévesque-p-eng">
                                <Image
                                    src={linkedinIcon}
                                    alt="Go to my LinkedIn page"
                                />
                            </Link>
                            <Link href="https://github.com/VictorLev">
                                <Image
                                    src={githubIcon}
                                    alt="Go to my Github page"
                                />
                            </Link>
                        </div>
    
                    </div>
                    

                    <div className='flex flex-col text-xs text-white space-y-3'>
                        <h1 className="font-bold">
                            Useful Links
                        </h1>
                        <Link href="/about">
                            About The Project
                        </Link>

                    </div>

                </div>
            </Container>
            <div className="mx-auto py-10">
                <p className="text-center text-xs text-white">
                    &copy; 2023 QuebecShopDownUnder, Inc. {t('rights reserved')}
                </p>
            </div>
        </footer>
     );
}
 
export default Footer;
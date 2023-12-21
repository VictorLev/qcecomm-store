import { Link, usePathname } from "@/src/navigation";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavBarActions from "./navbar-actions";
import Image from 'next/image';
import Flag from "@/images/Fleur_de_lys_du_québec.svg";

import {useTranslations} from 'next-intl';
import { Category } from "@/type";

interface NavbarContentProps {
    categories: Category[]
}

const Navbar = async () => {
    const categories = await getCategories();
    return <NavbarContent categories={categories} />;
}

const NavbarContent: React.FC<NavbarContentProps> = ({categories}) => {
    const t = useTranslations('Index');
    return (
        <div className="mx-auto border-b bg-blue-800">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-20 justify-center items-center">
                    <Link href="/" className="ml-4 gap-x-2 ">
                        <p className="font-bold text-white sm:text-sm lg:text-2xl ">
                            <span className="lg-view">{t('title')}</span>
                            <span className="sm-view">{t('stitle')}</span>
                        </p>
                    </Link>
                    <span className="lg-view">
                        <Image className="mx-2 flex"
                            priority
                            src={Flag}
                            height={28}
                            width={28}
                            alt="Quebec Flag here"
                        />
                    </span>
                    <MainNav data={categories} />
                    <NavBarActions />
                </div>
            </Container>
        </div>
    );
}


export default Navbar;

import { Link, usePathname } from "@/src/navigation";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavBarActions from "./navbar-actions";
import Image from 'next/image';
import Flag from "@/images/Fleur_de_lys_du_québec.svg";

import {useTranslations} from 'next-intl';
import { Category } from "@/type";
import MobileNavBar from "./mobile-navbar";

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
                        <p className="font-bold text-white text-2xl ">
                            {t('title')}
                        </p>
                    </Link>
                    <Image className="mx-2 flex"
                        priority
                        src={Flag}
                        height={28}
                        width={28}
                        alt="Quebec Flag here"
                    />
                    <MainNav data={categories} />
                    <div className="hidden ml-auto lg:flex items-center gap-x-4">
                      <NavBarActions />
                    </div>
                    <MobileNavBar data={categories} />
                </div>
            </Container>
        </div>
    );
}


export default Navbar;

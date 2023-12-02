import { Link, usePathname } from "@/src/navigation";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavBarActions from "./navbar-actions";
import Image from 'next/image';
import Flag from "@/images/Flag_of_Quebec.svg";

import {useTranslations} from 'next-intl';
import { Category } from "@/type";
 
interface NavbarContentProps {
    categories: Category[]
}

const Navbar = async () => {
    const categories = await getCategories();
    console.log(categories)
    return <NavbarContent categories={categories} />;
}

const NavbarContent: React.FC<NavbarContentProps> = ({categories}) => {
    const t = useTranslations('Index');
    return ( 
        <div className="mx-auto border-b bg-blue-800">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-20 justify-center items-center">
                    <Image className="mx-2 flex rounded-lg border-2 border-white gap-x-2"
                        priority
                        src={Flag}
                        height={100}
                        width={100}
                        alt="Quebec Flag here"
                    />
                    <Link href="/" className="ml-4 gap-x-2 ">
                        <p className="font-bold text-white  text-xl">
                            <span className="lg-view">{t('title')}</span>
                        </p>
                    </Link>
                    <MainNav data={categories} />
                    <NavBarActions />
                </div>
            </Container>
        </div>
    );
}

 
export default Navbar;

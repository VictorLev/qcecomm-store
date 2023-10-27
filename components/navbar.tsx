import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavBarActions from "./navbar-actions";
import Image from 'next/image';
import Flag from "@/images/Flag_of_Quebec.svg";


const Navbar = async () => {
    const categories = await getCategories();
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
                    <Link href="/" className="ml-4 flex gap-x-2">
                        <p className="font-bold text-white  text-xl">
                            Quebec Shop Down Under
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

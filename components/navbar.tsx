import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavBarActions from "./navbar-actions";

const Navbar = async () => {
    const categories = await getCategories();
    return ( 
        <div className="border-b bg-blue-800">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-white  text-xl">
                            Quebec Down Under Store
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

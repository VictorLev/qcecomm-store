import Link from "next/link";
import Container from "./ui/container";

const Navbar = () => {
    return ( 
        <div className="border-b">
            <Container>
                <Link href="/">
                    <p>
                        Store
                    </p>
                </Link>
            </Container>
        </div>
    );
}
 
export default Navbar;

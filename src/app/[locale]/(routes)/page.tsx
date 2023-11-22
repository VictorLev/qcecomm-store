import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"
import { Billboard as BillboardType, Product } from "@/type";
import { useTranslations } from "next-intl";

interface HomePageContentProps {
    products: Product[],
    billboard: BillboardType
}

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true})
    const billboard = await getBillboard("aaeb2c7e-fcdd-43c6-acd4-bf3014f68b6f");
    return <HomePageContent products={products} billboard={billboard} />;
}

const HomePageContent: React.FC<HomePageContentProps> = ({billboard,products}) => {

    const t = useTranslations('Index');
    
    return(
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title={t('featured products')} items={products}/>
                </div>
            </div>
        </Container>

    )
}

export default HomePage
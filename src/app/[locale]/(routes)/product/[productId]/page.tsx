import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { Category } from "@/type";
import { useLocale, useTranslations } from "next-intl";

export const revalidate = 0;

interface ProductPageProps {
    params: {
        productId: string;
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {

    const product = await getProduct(params.productId)
    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id
    })
    const locale = useLocale();
    const name = 'name'.concat(locale.charAt(0).toUpperCase()+locale[1]);

    return (
    <div className="bg-white ">
        <Container>
            <div className="px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 items-start gap-x-8">
                    <Gallery images={product.images}/>
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <Info data={product}/>
                    </div>
                </div>

                <hr className="my-10"/>
                <ProductList title={''} items={suggestedProducts}/>
            </div>
        </Container>
    </div> );
}

export default ProductPage;

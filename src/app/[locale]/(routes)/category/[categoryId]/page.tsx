import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";
import { useTranslations } from "next-intl";
import { Billboard as BillboardType, Category, Color, Product, Size } from "@/type";

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string
    },
    searchParams: {
        colorId: string,
        sizeId: string,
    }
}

interface CategoryPageContentProps {
    products: Product[],
    enSize: boolean,
    enColor: boolean,
    sizes: Size[],
    colors: Color[],
    billboard: BillboardType 

}

const CategoryPage: React.FC<CategoryPageProps> =  async ({
    params,
    searchParams
}) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    })
    
    const enSize = products.map(x => x.size).filter((x) => x.name!='N/A').length !== 0;
    const enColor = products.map(x => x.color).filter((x) => x.name!='N/A').length !== 0;


    const sizes = await getSizes();
    const colors = await getColors();
    const category = await getCategory(params.categoryId);

    return <CategoryPageContent 
                products={products} 
                enSize={enSize}
                enColor={enColor}
                sizes={sizes}
                colors={colors}
                billboard={category.billboard}
            />
}

const CategoryPageContent: React.FC<CategoryPageContentProps> = (
    {
        products,
        sizes,
        colors,
        enSize,
        enColor,
        billboard
    }) => {

    const t = useTranslations('Filter');
    return ( 
        <div className="bg-white">
            <Container>
                <Billboard
                    data={billboard}
                />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors} />
                        
                        <div className="hidden lg:block">
                            <Filter 
                                valueKey="sizeId"
                                name={t('Size')}
                                data={sizes}
                                enabled={enSize}
                            />
                            <Filter 
                                valueKey="colorId"
                                name={t('Color')}
                                data={colors}
                                enabled={enColor}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((item) => (
                                    <ProductCard key={item.id} data={item}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
     );
}


export default CategoryPage;
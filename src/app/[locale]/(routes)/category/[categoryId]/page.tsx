import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import { useTranslations } from "next-intl";
import { Billboard as BillboardType, Category, Cday, Color, Product, Province, Size, Sportsteam, Type } from "@/type";
import getProvinces from "@/actions/get-provinces";
import getTypes from "@/actions/get-types";
import getCdays from "@/actions/get-cdays";
import getSportsteams from "@/actions/get-sportsteams";
import FilterColor from "./components/filterColor";
import HomeBillboard from "@/components/home-billboard";

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string
    },
    searchParams: {
        colorId: string,
        sizeId: string,
        provinceId:string,
        typeId:string,
        cdayId:string,
        sportsteamId:string
    }
}

interface CategoryPageContentProps {
    products: Product[],
    enSize: boolean,
    enColor: boolean,
    enProv:boolean,
    enSpor:boolean,
    enCday:boolean,
    enType:boolean,
    sizes: Size[],
    colors: Color[],
    provinces: Province[],
    types: Type[],
    cdays: Cday[],
    sportsteams: Sportsteam[],
    billboard: BillboardType

}

const CategoryPage: React.FC<CategoryPageProps> =  async ({
    params,
    searchParams
}) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
        provinceId: searchParams.provinceId,
        typeId: searchParams.typeId,
        cdayId: searchParams.cdayId,
        sportsteamId: searchParams.sportsteamId
    })
    const enSize = products.map(x => x.size).filter((x) => x.name!='N/A').length !== 0;
    const enColor = products.map(x => x.color).filter((x) => x.name!='N/A').length !== 0;
    const enProv = products.map(x => x.province).filter((x) => x.name!=='N/A').length !== 0;
    const enType = products.map(x => x.type).filter((x) => x.name!=='N/A').length !== 0;
    const enCday = products.map(x => x.cday).filter((x) => x.name!=='N/A').length !== 0;
    const enSpor = products.map(x => x.sportsteam).filter((x) => x.name!=='N/A').length !== 0;


    const sizes = await getSizes();
    const provinces = await getProvinces();
    const types = await getTypes();
    const cdays = await getCdays();
    const sportsteams = await getSportsteams();
    const colors = await getColors();
    const category = await getCategory(params.categoryId);


    return <CategoryPageContent
                products={products}
                enSize={enSize}
                enColor={enColor}
                sizes={sizes}
                colors={colors}

                provinces = {provinces}
                types = {types}
                cdays = {cdays}
                sportsteams = {sportsteams}
                enProv = {enProv}
                enType = {enType}
                enCday = {enCday}
                enSpor = {enSpor}
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
        provinces,
        types,
        cdays,
        sportsteams ,
        enProv,
        enType ,
        enCday ,
        enSpor ,
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
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name={t('Size')}
                                data={sizes}
                                enabled={enSize}
                            />
                            <FilterColor
                                valueKey="colorId"
                                name={t('Color')}
                                data={colors}
                                enabled={enColor}
                            />
                            <Filter
                                valueKey="provinceId"
                                name={t('Province')}
                                data={provinces}
                                enabled={enProv}
                            />
                            <Filter
                                valueKey="typeId"
                                name={t('Type')}
                                data={types}
                                enabled={enType}
                            />
                            <Filter
                                valueKey="cdayId"
                                name={t('Cday')}
                                data={cdays}
                                enabled={enCday}
                            />
                            <Filter
                                valueKey="sportsteamId"
                                name={t('Sportsteam')}
                                data={sportsteams}
                                enabled={enSpor}
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

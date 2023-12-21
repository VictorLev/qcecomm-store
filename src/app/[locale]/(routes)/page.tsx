import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import HomeBillboard from "@/components/home-billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"
import { Billboard as BillboardType, Category, Product } from "@/type";
import { useTranslations } from "next-intl";
import CategoryCards from "@/components/category-cards";
import getProduct from "@/actions/get-product";
import mapleBackground from "@/images/maples.jpg"
import Image from "next/image";

export const revalidate = 0;

interface HomePageContentProps {
    featuredProducts: Product[],
    onFoodProducts: Product[],
    billboard: BillboardType
}

const HomePage = async () => {
    const getFeaturedProducts = await getProducts({isFeatured: true})
    const getFoodProducts = await getProducts({
      categoryId:"14611642-a1ff-4c2a-9634-9d2e42641efa",
      typeId:"80ee52e7-480c-4b08-ad42-eba10e770af7"
    })
    const getHomeBillboard = await getBillboard("abf294dc-2f35-48bb-8a40-0f22643a1aef");

    return <HomePageContent
              featuredProducts={getFeaturedProducts}
              onFoodProducts={getFoodProducts}
              billboard={getHomeBillboard}
            />;
}

const HomePageContent: React.FC<HomePageContentProps> = ({
    billboard,
    featuredProducts,
    onFoodProducts
}) => {

    const t = useTranslations('Index');

    return(
      <div className="bg-[#F2F2F2]">
        <HomeBillboard data={billboard} />
          <Container>
              <div className="space-y-10 pb-10">
                  <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                      <ProductList title={t('featured products')} items={featuredProducts}/>
                  </div>
              </div>
              <div className="space-y-10 pb-10">
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                  <div className="font-bold text-3xl">
                    Shop by Category {/*To Translate*/}
                  </div>
                    <CategoryCards/>
                </div>
              </div>
              <div className="space-y-10 pb-10">
                <div className="relative flex flex-col items-center w-full h-full bg-cover bg-center rounded"
                  style={{
                    backgroundImage: `url(${mapleBackground.src})`,
                    width: '100%',
                    height: '100%'
                  }}>
                    <div className="flex m-auto text-center items-center font-bold text-4xl p-2">
                    🍁 LIQUIDATION SALE! 40% OFF on all maple products 🍁 {/*To Translate*/}
                    </div>
                    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 pb-4">
                        <ProductList title={""} items={onFoodProducts}/>
                    </div>


                </div>
              </div>
          </Container>
        </div>
    )
}

export default HomePage

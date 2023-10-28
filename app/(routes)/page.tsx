import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("8e82fde3-4f18-4c8c-8e9e-878a7674e026");
    const products = await getProducts({isFeatured: true});


    return(
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} /> 
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                
            </div>
        </Container>
    )
}

export default HomePage
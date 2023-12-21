import Image from "next/image";
import getCategories from "@/actions/get-categories";
import CategoryCard from "./ui/category-card";
import getBillboard from "@/actions/get-billboard";

const CategoryCards = async () => {
    const categories = await getCategories()
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
            <CategoryCard key={category.id} data={category} billboard={category.billboard}/>
      ))}
    </div>
    );

}

export default CategoryCards;

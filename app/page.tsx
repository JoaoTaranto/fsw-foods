import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-6 px-5">
        <Search />
        <div className="px-5 pt-6">
          <CategoryList />
        </div>

        <Image src="/promo-banner-01.png" alt="Até 30% de desconto em pizzas!" height={0} width={0} className="h-auto w-full object-contain" sizes="100vw" quality={100} />
      </div>
    </>
  );
}

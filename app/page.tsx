import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-6 px-5">
        <Search />
        <div className="px-5 pt-6">
          <CategoryList />
        </div>
      </div>
    </>
  );
}

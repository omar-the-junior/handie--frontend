import { Icon } from '@iconify/react/dist/iconify.js';
import Header from '../components/Header';
import { Input } from '../components/Input';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const breadcrumbs = [{ name: 'Home', link: '/' }, { name: 'Shop' }];

  return (
    <div className="">
      <Header breadcrumbs={breadcrumbs} />
      <div className="flex gap-9 bg-secondary py-3">
        <form className="container flex flex-col items-center gap-9 self-stretch md:flex md:flex-row">
          <label
            htmlFor="search"
            className="border-black flex w-full min-w-72 max-w-sm items-center gap-2 rounded-md border-2 bg-white px-5 py-2"
          >
            <button>
              <Icon icon="mingcute:search-line" className="size-5" />
            </button>
            <Input
              variant={'unstyled'}
              id="search"
              placeholder="Search for a product"
              className="bg-transparent"
            />
          </label>
          <div className="flex gap-9 md:flex md:justify-between">
            <select
              name="cars"
              id="cars"
              aria-placeholder="Sort by"
              className="border-black flex gap-2 rounded-md border-2 bg-white px-5 py-2"
            >
              <option disabled selected>
                Sort by
              </option>
              <option value="BMW">Price (Low to High)</option>
              <option value="mercedes">Price (High to Low)</option>
            </select>

            <button className="flex items-center gap-2 text-xl">
              <Icon icon="mage:filter-fill" className="size-6 cursor-pointer" />
              <p>Filter</p>
            </button>
          </div>
        </form>
      </div>

      {/* products */}
      <div className="contianer flex flex-wrap content-start items-start justify-center gap-10 self-stretch py-12">
        <ProductCard
          imageSrc="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          price={15000}
          productName="sofa"
          rating={3}
          sellerName="Furniture Store"
          discount={20}
          isNew
        />
        <ProductCard
          imageSrc="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          price={15000}
          productName="sofa"
          rating={4}
          sellerName="Furniture Store"
          discount={20}
          isNew
        />
        <ProductCard
          imageSrc="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          price={15000}
          productName="sofa"
          rating={5}
          sellerName="Furniture Store"
          discount={20}
          isNew
        />
        <ProductCard
          imageSrc="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          price={15000}
          productName="sofa"
          rating={4}
          sellerName="Furniture Store"
          discount={20}
          isNew
        />
      </div>
    </div>
  );
};

export default Shop;

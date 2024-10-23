import { useState, ChangeEvent } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import Header from '../components/Header';
import { Input } from '../components/Input';
import { useLoaderData } from 'react-router-dom';
import { Product } from '../types/response.types';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const breadcrumbs = [{ name: 'Home', link: '/' }, { name: 'Shop' }];
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const { products } = useLoaderData() as { products: Product[] };
  console.log(products);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const filteredAndSortedProducts = products
    .filter((product) => product.title.toLowerCase().includes(searchTerm))
    .sort((a, b) => {
      if (sortOrder === 'lowToHigh') {
        return a.price - b.price;
      } else if (sortOrder === 'highToLow') {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <>
      <Header breadcrumbs={breadcrumbs} />
      <search className="flex gap-9 bg-secondary py-6">
        <form className="container flex flex-col items-center gap-9 md:flex md:flex-row">
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
              className="w-full bg-transparent"
              onChange={handleSearch}
            />
          </label>
          <div className="flex w-full max-w-sm justify-between gap-9 md:justify-start">
            <select
              name="sort"
              id="sort"
              aria-placeholder="Sort by"
              className="border-black flex gap-2 rounded-md border-2 bg-white px-5 py-2"
              onChange={handleSort}
              value={sortOrder}
            >
              <option value="" disabled>
                Sort by
              </option>
              <option value="lowToHigh">Price (Low to High)</option>
              <option value="highToLow">Price (High to Low)</option>
            </select>

            <button className="flex items-center gap-2 text-xl">
              <Icon icon="mage:filter-fill" className="size-6 cursor-pointer" />
              <p>Filter</p>
            </button>
          </div>
        </form>
      </search>

      {/* products */}
      <div className="container grid place-items-center gap-10 py-12 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {filteredAndSortedProducts.map(
          ({ id, image, price, title, rating, seller, discount }) => (
            <ProductCard
              key={id}
              imageSrc={image ?? ''}
              price={price}
              productName={title}
              rating={rating ?? 0}
              sellerName={seller.name}
              discount={discount}
              className="w-full max-w-sm"
            />
          ),
        )}
      </div>
    </>
  );
};

export default Shop;

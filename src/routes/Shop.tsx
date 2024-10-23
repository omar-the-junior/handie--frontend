import { Icon } from '@iconify/react/dist/iconify.js';
import Header from '../components/Header';
import { Input } from '../components/Input';
// import ProductCard from '../components/ProductCard';
import { useLoaderData } from 'react-router-dom';
import { Product } from '../types/response.types';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const breadcrumbs = [{ name: 'Home', link: '/' }, { name: 'Shop' }];

  // const products = [
  //   {
  //     imageSrc:
  //       'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 15000,
  //     productName: 'sofa',
  //     rating: 3,
  //     sellerName: 'Furniture Store',
  //     discount: 20,
  //     isNew: true,
  //   },
  //   {
  //     imageSrc:
  //       'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 15000,
  //     productName: 'sofa',
  //     rating: 3,
  //     sellerName: 'Furniture Store',
  //     discount: 20,
  //     isNew: true,
  //   },
  //   {
  //     imageSrc:
  //       'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 20000,
  //     productName: 'sofa',
  //     rating: 4,
  //     sellerName: 'Furniture Store',
  //     discount: 20,
  //     isNew: true,
  //   },
  //   {
  //     imageSrc:
  //       'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 15000,
  //     productName: 'sofa',
  //     rating: 3,
  //     sellerName: 'Furniture Store',
  //     discount: 20,
  //     isNew: true,
  //   },
  //   {
  //     imageSrc:
  //       'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 15000,
  //     productName: 'sofa',
  //     rating: 3,
  //     sellerName: 'Furniture Store',
  //     discount: 20,
  //     isNew: true,
  //   },
  //   {
  //     imageSrc:
  //       'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 15000,
  //     productName: 'sofa',
  //     rating: 3,
  //     sellerName: 'Furniture Store',
  //     discount: 20,
  //     isNew: true,
  //   },
  // ];

  const { products } = useLoaderData() as { products: Product[] };
  console.log(products);

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
            />
          </label>
          <div className="flex w-full max-w-sm justify-between gap-9 md:justify-start">
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
      </search>

      {/* products */}
      <div className="container grid place-items-center gap-10 py-12 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {products.map(
          ({ id, image, price, title, rating, seller, discount }) => (
            <ProductCard
              key={id} // Add a unique key for each product
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

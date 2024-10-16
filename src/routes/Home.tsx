import { Icon } from '@iconify/react/dist/iconify.js';
import Category from '../components/Category';

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-secondary">
        <div className="container py-5">
          <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
            {/* Text and button */}
            <div className="flex max-w-xl flex-col items-start gap-7">
              <h1 className="h1 font-bold">
                <span className="text-primary">Crafted with Passion, </span>
                <span className="text-charcoal">Delivered with Care</span>
              </h1>
              <p className="text-lg-r text-neutral">
                Discover unique handmade treasures crafted by skilled artisans.
                Find the perfect piece that tells your story or create your own.
              </p>
              <button className="btn btn-lg self-center lg:self-auto">
                Explore Unique Finds
              </button>
            </div>

            {/* Gallery */}
            <div className="grid w-full max-w-lg grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/1.jpg"
                  alt="Handcrafted item 1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/2.jpg"
                  alt="Handcrafted item 2"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/3.jpg"
                  alt="Handcrafted item 3"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/4.jpg"
                  alt="Handcrafted item 4"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* catgeories */}
      <div className="container py-12">
        <div className="flex flex-col gap-20">
          {/* text */}
          <div className="h3 flex items-center justify-between self-stretch font-semibold">
            <p>Explore by categories</p>

            <button className="flex items-center gap-2 text-base font-bold">
              <p>VIEW MORE</p>
              <Icon icon="line-md:arrow-right" />
            </button>
          </div>
          {/* categories */}
          <div className="grid grid-cols-1 place-items-center justify-between gap-y-16 md:place-content-between lg:grid-cols-2 2xl:grid-cols-3">
            <Category title="Jewelry & Accessories" bgUrl="/images/jowel.png" />
            <Category title="Clothing & Apparel" bgUrl="/images/clothes.png" />
            <Category title="Home Décor" bgUrl="/images/home.png" />
            <Category title="Art & Prints" bgUrl="/images/arts.jpg" />
            <Category title="Toys & Baby Items" bgUrl="/images/toys.png" />
            <Category title="Wellness & Beauty" bgUrl="/images/wellness.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

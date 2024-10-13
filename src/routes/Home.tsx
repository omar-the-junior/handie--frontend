import { Icon } from '@iconify/react/dist/iconify.js';
import Category from '../components/Category';

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-secondary">
        <div className="container p-20">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
            {/* Text and button */}
            <div className="flex max-w-xl flex-col items-start gap-7">
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                <span className="text-primary">Crafted with Passion, </span>
                <span className="text-charcoal">Delivered with Care</span>
              </h1>
              <p className="text-lg text-neutral">
                Discover unique handmade treasures crafted by skilled artisans.
                Find the perfect piece that tells your story or create your own.
              </p>
              <button className="rounded-lg bg-primary px-7 py-3 text-lg font-bold text-white transition-colors hover:bg-primary/90">
                Explore Unique Finds
              </button>
            </div>

            {/* Gallery */}
            <div className="grid w-full max-w-lg grid-cols-2 gap-4 p-5">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/public/images/1.jpg"
                  alt="Handcrafted item 1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/public/images/2.jpg"
                  alt="Handcrafted item 2"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/public/images/3.jpg"
                  alt="Handcrafted item 3"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/public/images/4.jpg"
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
          <div className="flex items-center justify-between self-stretch text-4xl font-semibold">
            <p>Explore by categories</p>

            <button className="flex items-center gap-2 text-base font-bold">
              <p>VIEW MORE</p>
              <Icon icon="line-md:arrow-right" />
            </button>
          </div>
          {/* categories */}
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3 md:gap-20">
            <Category
              title="Jewelry & Accessories"
              bgUrl="/public/images/jowel.png"
            />
            <Category
              title="Clothing & Apparel"
              bgUrl="/public/images/clothes.png"
            />
            <Category title="Home Décor" bgUrl="/public/images/home.png" />
            <Category title="Art & Prints" bgUrl="/public/images/arts.jpg" />
            <Category
              title="Toys & Baby Items"
              bgUrl="/public/images/toys.png"
            />
            <Category
              title="Wellness & Beauty"
              bgUrl="/public/images/wellness.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { Icon } from '@iconify/react';

function Strap() {
  return (
    <div className="flex w-full max-w-[1440px] flex-col items-center justify-between bg-secondary py-10 md:py-24">
      <div className="flex w-full max-w-[1334px] flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row md:px-0">
        <div className="flex items-center gap-2.5">
          <Icon
            icon="fluent-emoji-high-contrast:shopping-bags"
            className="h-12 w-12 md:h-16 md:w-16"
          />
          <div className="flex flex-col">
            <p className="text-sm md:text-base">Artisan Quality</p>
            <p className="text-xs text-primary md:text-sm">
              Handmade with care
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <Icon
            icon="fluent:star-emphasis-24-regular"
            className="h-12 w-12 md:h-16 md:w-16"
          />
          <div className="flex flex-col">
            <p className="text-sm md:text-base">Top Rated</p>
            <p className="text-xs text-primary md:text-sm">
              One-of-a-kind products
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <Icon
            icon="fluent-emoji-high-contrast:artist-palette"
            className="h-12 w-12 md:h-16 md:w-16"
          />
          <div className="flex flex-col">
            <p className="text-sm md:text-base">30-day return policy</p>
            <p className="text-xs text-primary md:text-sm">Creative Designs</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <Icon
            icon="fluent-emoji-high-contrast:handshake"
            className="h-12 w-12 md:h-16 md:w-16"
          />
          <div className="flex flex-col">
            <p className="text-sm md:text-base">Trusted Partners</p>
            <p className="text-xs text-primary md:text-sm">
              Direct from creators
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Strap;

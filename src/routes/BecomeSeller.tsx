import { Icon } from '@iconify/react/dist/iconify.js';
import FormGroup from '../components/FormGroup';
import { Input, InputGroup } from '../components/Input';

export default function BecomeSeller() {
  const image = '/icons/online-store-10 1.svg';

  return (
    <div className="bg-background flex flex-col gap-14 py-8 md:py-14">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="w-full max-w-md lg:w-1/2">
            <img
              src={image}
              alt="online store illustration"
              className="mx-auto w-full max-w-sm lg:max-w-md"
            />
          </div>

          <div className="flex w-full max-w-xl flex-col items-center gap-6 text-center lg:w-1/2 lg:items-start lg:text-left">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
                Ready to Start Selling?
              </h1>
              <p className="text-xl font-medium text-charcoal sm:text-2xl md:text-3xl">
                Turn your passion into profit by becoming a seller on our
                platform.
              </p>
            </div>
            <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2 text-white transition-colors hover:bg-primary/90 sm:px-7 sm:py-3">
              <Icon icon="carbon:upgrade" className="h-5 w-5 sm:h-7 sm:w-7" />
              <span className="text-lg font-bold sm:text-xl">
                Upgrade to Seller
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto mt-14 w-full max-w-2xl">
          <h2 className="mb-6 text-center text-4xl font-bold text-primary">
            Complete Your Seller Profile
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <FormGroup title="Business Details" className="space-y-4">
              <InputGroup label="Business Name">
                <Input
                  type="text"
                  id="businessName"
                  name="businessName"
                  placeholder="Handmade store"
                />
              </InputGroup>

              <InputGroup label="Short Business Description">
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Description"
                  required
                ></textarea>
              </InputGroup>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputGroup label="Business Email">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    required
                  />
                </InputGroup>

                <InputGroup label="Phone number">
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+20"
                    required
                  />
                </InputGroup>
              </div>
            </FormGroup>
            <button type="submit" className="btn btn-lg w-full">
              Become a Seller
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import { Input, InputGroup } from '../components/Input';

const Checkout = () => {
  return (
    <div className="bg-whisper py-10">
      <div className="container mx-auto md:items-start flex flex-col justify-center md:justify-between gap-8 md:flex-row">
        <div className="billing-details max-w-xl flex-1 rounded-2xl bg-white px-20 py-9 shadow-lg">
          <h2 className="h4 mb-6 font-semibold">Billing details</h2>
          <form>
            <div className="mb-6 flex gap-8">
              <InputGroup label="First Name">
                <Input
                  id="firstName"
                  placeholder="John"
                  className="border-gray-300 w-full rounded-md border p-3"
                />
              </InputGroup>

              <InputGroup label="Last Name">
                <Input
                  id="lastName"
                  placeholder="Doe"
                  className="border-gray-300 w-full rounded-md border p-3"
                />
              </InputGroup>
            </div>

            <InputGroup label="Company Name (optional)">
              <Input
                id="companyName"
                placeholder="Handie"
                className="border-gray-300 mb-6 w-full rounded-md border p-3"
              />
            </InputGroup>

            <InputGroup label="Country/Region">
              <select
                id="country"
                className="border-gray-300 mb-6 w-full rounded-md border p-3"
              >
                <option value="Algeria">Algeria</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Comoros">Comoros</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Egypt">Egypt</option>
                <option value="Iraq">Iraq</option>
                <option value="Jordan">Jordan</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Libya">Libya</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Morocco">Morocco</option>
                <option value="Oman">Oman</option>
                <option value="Palestine">Palestine</option>
                <option value="Qatar">Qatar</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Somalia">Somalia</option>
                <option value="Sudan">Sudan</option>
                <option value="Syria">Syria</option>
                <option value="Tunisia">Tunisia</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="Yemen">Yemen</option>
              </select>
            </InputGroup>

            <InputGroup label="Street Address">
              <Input
                id="address"
                placeholder="27th street"
                className="border-gray-300 mb-6 w-full rounded-md border p-3"
              />
            </InputGroup>

            <InputGroup label="Governorate">
              <Input
                id="governorate"
                placeholder="Beni-suef"
                className="border-gray-300 mb-6 w-full rounded-md border p-3"
              />
            </InputGroup>

            <InputGroup label="City">
              <Input
                id="city"
                placeholder="Beni-suef"
                className="border-gray-300 mb-6 w-full rounded-md border p-3"
              />
            </InputGroup>

            <InputGroup label="Phone">
              <Input
                type="tel"
                id="phone"
                placeholder="+20 1029312312"
                className="border-gray-300 mb-6 w-full rounded-md border p-3"
              />
            </InputGroup>

            <InputGroup label="Email">
              <Input
                type="email"
                id="email"
                placeholder="user@example.com"
                className="border-gray-300 w-full rounded-md border p-3"
              />
            </InputGroup>
          </form>
        </div>

        <div className="order-summary sm:w-8/10 w-full max-w-full rounded-2xl bg-white p-9 shadow-lg md:w-2/5 lg:w-1/3">
          <div className="flex justify-between">
            <h3 className="mb-6 text-lg font-semibold">Product</h3>
            <h3 className="mb-6 text-lg font-semibold">Subtotal</h3>
          </div>
          <div className="flex justify-between">
            <p className="mb-6 text-sm text-gray">Asgaard sofa x 1</p>
            <p className="mb-6 text-sm">250,000.00 EGP</p>
          </div>
          <div className="summary-totals mb-4">
            <p className="mb-6 flex justify-between text-sm">
              Subtotal: <span>250,000.00 EGP</span>
            </p>
            <p className="mb-7 flex justify-between">
              Total:{' '}
              <span className="text-xl font-bold text-accent">
                250,000.00 EGP
              </span>
            </p>
          </div>
          <div className="mb-7 h-[1px] w-full bg-gray"></div>

          <div className="payment-options mb-5">
            <div className="mb-4 flex flex-row gap-4">
              <img src="/icons/Eliapse.svg" alt="" />
              <h4 className="text-sm font-normal">Direct Bank Transfer</h4>
            </div>
            <p className="text-gray-500 mb-2 sm:mb-3 text-sm">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>

            <div className="mb-4">
              <label className="mb-3 flex items-center">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                  className="mr-2"
                />
                Direct Bank Transfer
              </label>
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2 text-gray" />
                Cash on Delivery
              </label>
            </div>
            <div className="mb-3">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </div>
          </div>
          <button className="btn w-full">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

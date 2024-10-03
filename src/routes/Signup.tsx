import { Input, InputGroup } from '../components/Input';

function Signup() {
  return (
    <div className="min-h-screen bg-white py-8 ">
      <div className="container flex flex-row items-center justify-between gap-8">
        <img
          className="hidden h-auto max-w-full rounded-md md:block"
          src="/images/signup.svg"
          alt="Handmade Marketplace"
        />

        <div className="w-full max-w-lg">
          <h1 className="mb-4 text-2xl font-bold text-primary md:text-4xl">
            Welcome to Your Handmade Marketplace
          </h1>
          <p className="text-black mb-8">
            Create an account to buy or sell handcrafted items.
          </p>

          <form className="space-y-4">
            <InputGroup className="flex-1" label="">
              <Input
                id="name"
                variant="simple"
                type="text"
                placeholder="Name"
              />
            </InputGroup>

            <InputGroup className="flex-1" label="">
              <Input
                id="email"
                variant="simple"
                type="email"
                placeholder="Email"
              />
            </InputGroup>

            <InputGroup className="flex-1" label="">
              <Input
                id="password"
                variant="simple"
                type="password"
                placeholder="Password"
              />
            </InputGroup>

            <InputGroup className="flex-1" label="">
              <Input
                id="password"
                variant="simple"
                type="password"
                placeholder="Repeat Password"
              />
            </InputGroup>

            <button className="btn w-full">
              Sign up
            </button>
            <div className="mt-4 flex items-center">
              <span className="text-sm">Already have an account?</span>
              <a
                href="/login"
                className="text-sm font-bold text-primary hover:underline ml-1"
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

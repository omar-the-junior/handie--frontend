import { Input, InputGroup } from '../components/Input';

function Signup() {
  return (
    <div className="py-8">
      <div className="container grid place-items-center gap-8 lg:grid-cols-2">
        <img
          className="hidden max-h-[713px] w-full rounded-md lg:block"
          src="/images/signup.jpg"
          alt="Handmade Marketplace"
          height="713"
          width="535"
        />

        <div className="w-full md:max-w-lg">
          <h1 className="h3 mb-4 font-bold text-primary">
            Welcome to Your Handmade Marketplace
          </h1>
          <p className="mb-8 text-charcoal">
            Create an account to buy or sell handcrafted items.
          </p>

          <form className="grid gap-10">
            <InputGroup>
              <Input
                id="name"
                variant="simple"
                type="text"
                placeholder="Name"
              />
            </InputGroup>

            <InputGroup>
              <Input
                id="email"
                variant="simple"
                type="email"
                placeholder="Email"
              />
            </InputGroup>

            <InputGroup>
              <Input
                id="password"
                variant="simple"
                type="password"
                placeholder="Password"
              />
            </InputGroup>

            <InputGroup>
              <Input
                id="password"
                variant="simple"
                type="password"
                placeholder="Repeat Password"
              />
            </InputGroup>

            <button className="btn mt-12 w-full">Sign up</button>
            <div className="flex items-center">
              <span className="text-sm">Already have an account?</span>
              <a
                href="/login"
                className="ml-1 text-sm font-bold text-primary hover:underline"
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

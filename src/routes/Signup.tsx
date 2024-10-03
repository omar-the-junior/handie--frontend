import { Link } from 'react-router-dom';
import { Input, InputGroup } from '../components/Input';

function Signup() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container grid grid-cols-2 place-items-center gap-8">
        <img
          className="hidden max-h-[713px] w-full rounded-md md:block"
          src="/images/signup.svg"
          alt="Handmade Marketplace"
          height="713"
          width="535"
        />

        <div className="w-full max-w-lg ">
          <h1 className="mb-4  text-3xl font-bold text-primary ">
            Welcome to Your Handmade Marketplace
          </h1>
          <p className="mb-8 text-charcoal">
            Create an account to buy or sell handcrafted items.
          </p>

          <form className="grid gap-10">
            <InputGroup className="flex-1">
              <Input
                id="name"
                variant="simple"
                type="text"
                placeholder="Name"
              />
            </InputGroup>

            <InputGroup className="flex-1">
              <Input
                id="email"
                variant="simple"
                type="email"
                placeholder="Email"
              />
            </InputGroup>

            <InputGroup className="flex-1">
              <Input
                id="password"
                variant="simple"
                type="password"
                placeholder="Password"
              />
            </InputGroup>

            <InputGroup className="flex-1">
              <Input
                id="password"
                variant="simple"
                type="password"
                placeholder="Repeat Password"
              />
            </InputGroup>

            <button className="btn mt-6 w-full">Sign up</button>
            <div className=" flex items-center">
              <span className="text-sm">Already have an account?</span>
              <Link
                to="/login"
                className="ml-1 text-sm font-bold text-primary hover:underline"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

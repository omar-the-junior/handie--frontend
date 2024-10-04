import { Input, InputGroup } from '../components/Input';

function Login() {
  return (
    <div className="py-8">
      <div className="container grid place-items-center gap-8 lg:grid-cols-2">
        <img
          className="hidden max-h-[713px] w-full rounded-md lg:block"
          src="/images/login.png"
          alt="Handmade Marketplace"
          height="713"
          width="535"
        />

        <div className="w-full md:max-w-lg">
          <h1 className="h3 mb-4 font-bold text-primary">Welcome Back!</h1>
          <p className="mb-8 text-charcoal">
            Explore Unique Handmade Creations
          </p>

          <form className="grid gap-10">
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

            <button className="btn mt-12 w-full">Login</button>
            <div className="flex items-center">
              <span className="text-sm">Create account?</span>
              <a
                href="/Signup"
                className="ml-1 text-sm font-bold text-primary hover:underline"
              >
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;

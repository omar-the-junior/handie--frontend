import { Input, InputGroup } from '../components/Input';

function Login() {
  return (
    <div className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-lg">
      <h1 className="mb-6 text-2xl font-bold">User Registration Form</h1>
      <form>
        <InputGroup
          label="Full Name"
          className="mb-4"
          error="Full Name is required"
        >
          <Input id="fullName" placeholder="Enter your full name" />
        </InputGroup>
        <InputGroup label="Age" className="mb-4" error="Age is required">
          <Input id="age" type="number" placeholder="Enter your age" />
        </InputGroup>
        <InputGroup label="Email" className="mb-4" error="Email is required">
          <Input id="email" type="email" placeholder="Enter your email" />
        </InputGroup>
        <InputGroup
          label="Password"
          className="mb-4"
          error="Password is required"
        >
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </InputGroup>
        <InputGroup
          label="Repeat Password"
          className="mb-4"
          error="Repeat Password is required"
        >
          <Input
            id="repeatPassword"
            type="password"
            placeholder="Repeat your password"
          />
        </InputGroup>
        <InputGroup
          label="Upload Image"
          className="mb-4"
          error="Image is required"
        >
          <Input id="image" type="file" />
        </InputGroup>
        <InputGroup
          label="Upload Image"
          className="mb-4"
          error="Image is required"
        >
          <Input id="image" type="mul" />
        </InputGroup>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="BMW">BMW</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <textarea name="somearea" id=""></textarea>
        <button
          type="submit"
          className="rounded-lg bg-primary px-4 py-2 font-semibold text-white hover:bg-accent focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Login;

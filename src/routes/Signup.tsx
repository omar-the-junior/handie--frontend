import { Link } from 'react-router-dom';
import { Input, InputGroup } from '../components/Input';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '../Router';
import { postData } from '../utils/api';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  repeatPassword: z.string().min(8),
});

type FormField = z.infer<typeof schema>;

function Signup() {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    defaultValues: { name: '', email: '', password: '', repeatPassword: '' },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      const { name, email, password, repeatPassword } = data;

      if (password !== repeatPassword) {
        setError('repeatPassword', {
          message: 'Passwords do not match',
        });
        return;
      }

      const response = await postData<{ token: string }, FormField>(
        'auth/signup',
        {
          name,
          email,
          password,
          repeatPassword,
        },
      );
      console.log('the user added successfully', response);
      router.navigate('/login');
    } catch (err) {
      console.log('error', err);
      setError('root', { message: 'Invalid email or password' });
    }
  };

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

          <form className="grid gap-10" onSubmit={handleSubmit(onSubmit)}>
            <InputGroup error={errors.name?.message}>
              <Input
                id="name"
                variant="simple"
                type="text"
                placeholder="Name"
                {...register('name')}
              />
            </InputGroup>

            <InputGroup error={errors.email?.message}>
              <Input
                id="email"
                variant="simple"
                type="email"
                placeholder="Email"
                {...register('email')}
              />
            </InputGroup>

            <InputGroup error={errors.password?.message}>
              <Input
                id="password"
                variant="simple"
                type="password"
                placeholder="Password"
                {...register('password')}
              />
            </InputGroup>

            <InputGroup error={errors.repeatPassword?.message}>
              <Input
                id="password"
                variant="simple"
                type="password"
                placeholder="Repeat Password"
                {...register('repeatPassword')}
              />
            </InputGroup>

            <button className="btn mt-12 w-full" disabled={isSubmitting}>
              Sign up
            </button>
            <div className="flex items-center">
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

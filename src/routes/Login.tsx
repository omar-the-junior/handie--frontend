import { Link } from 'react-router-dom';
import { Input, InputGroup } from '../components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '../Router';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { login } from '../store/authSlice';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormField = z.infer<typeof schema>;

function Login() {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      const { email, password } = data;

      await dispatch(
        login({
          email,
          password,
        }),
      ).unwrap();
      router.navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      setError('root', { message: 'Invalid email or password' });
    }
  };

  return (
    <div className="py-8">
      <div className="container grid place-items-center gap-8 lg:grid-cols-2">
        <img
          className="hidden max-h-[564px] w-full rounded-md lg:block"
          src="/images/login.png"
          alt="Handmade Marketplace"
          height="564"
          width="535"
        />

        <div className="w-full md:max-w-lg">
          <h1 className="h3 mb-4 font-bold text-primary">Welcome Back!</h1>
          <p className="mb-8 text-charcoal">
            Explore Unique Handmade Creations
          </p>

          <form className="grid gap-10" onSubmit={handleSubmit(onSubmit)}>
            <p className="text-sm font-medium text-error">
              {errors.root?.message}
            </p>
            <InputGroup error={errors.email?.message}>
              <Input
                id="email"
                variant="simple"
                type="text"
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

            <button
              type="submit"
              className="btn mt-12 w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Loading...' : 'Login'}
            </button>
            <div className="flex items-center">
              <span className="text-sm">Create account?</span>
              <Link
                to="/Signup"
                className="ml-1 text-sm font-bold text-primary hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

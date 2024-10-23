import { useRouteLoaderData } from 'react-router-dom';
import { Input, InputGroup } from '../components/Input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { putData } from '../api/services.api';
import { useState } from 'react';

// Define Zod schema
const userProfileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().email('Invalid email address'),
});

type UserProfileFormData = z.infer<typeof userProfileSchema>;

const UserProfile = () => {
  const { user } = useRouteLoaderData('profile') as {
    user: {
      id: number;
      email: string;
      name: string;
      phone: string;
      userType: string;
    };
  };

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProfileFormData>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      name: user.name,
      phone: user.phone,
      email: user.email,
    },
  });

  const onSubmit = async (data: UserProfileFormData) => {
    try {
      const response = await putData('/api/user/profile', data);
      console.log(response);
      setSuccessMessage('Profile updated successfully');
      setErrorMessage(null);
    } catch (error) {
      console.log(error);
      setErrorMessage('Failed to update profile');
      setSuccessMessage(null);
    }
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-32">
        <h1 className="h4 mb-9 text-left font-semibold text-primary">
          Edit Your Profile
        </h1>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex w-full flex-col gap-5 sm:flex-row">
            <InputGroup
              className="flex-1"
              label="Name"
              dontShowIndicator
              error={errors.name?.message}
            >
              <Input
                id="name"
                variant="rounded"
                placeholder="John"
                defaultValue={user.name}
                {...register('name')}
              />
            </InputGroup>
            <InputGroup
              className="flex-1"
              label="Phone number"
              dontShowIndicator
              error={errors.phone?.message}
            >
              <Input
                id="phone"
                variant="rounded"
                type="tel"
                defaultValue={user.phone}
                {...register('phone')}
              />
            </InputGroup>
          </div>
          <InputGroup
            className="mt-5 flex-1"
            label="Email"
            dontShowIndicator
            error={errors.email?.message}
          >
            <Input
              id="email"
              variant="rounded"
              type="email"
              defaultValue={user.email}
              {...register('email')}
            />
          </InputGroup>

          {successMessage && (
            <div className="mt-5 text-center text-2xl text-success">
              {successMessage}
            </div>
          )}
          {errorMessage && <div className="text-error">{errorMessage}</div>}

          <div className="mt-6 flex justify-end space-x-4">
            <button type="button" className="btn-outline">
              Cancel
            </button>
            <button type="submit" className="btn">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;

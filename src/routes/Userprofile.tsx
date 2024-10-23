import { useRouteLoaderData } from 'react-router-dom';
import { Input, InputGroup } from '../components/Input';

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
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-32">
        <h1 className="h4 mb-9 text-left font-semibold text-primary">
          Edit Your Profile
        </h1>
        <form className="w-full">
          <div className="flex w-full flex-col gap-5 sm:flex-row">
            <InputGroup className="flex-1" label="Name" dontShowIndicator>
              <Input
                id="name"
                variant="rounded"
                placeholder="John"
                value={user.name}
              />
            </InputGroup>
            <InputGroup
              className="flex-1"
              label="Phone number"
              dontShowIndicator
            >
              <Input
                id="phone"
                variant="rounded"
                type="tel"
                value={user.phone}
              />
            </InputGroup>
          </div>
          <InputGroup className="mt-5 flex-1" label="Email" dontShowIndicator>
            <Input
              id="email"
              variant="rounded"
              type="email"
              value={user.email}
            />
          </InputGroup>
          {/* <div className="mt-6 flex w-full flex-col gap-5">
            <InputGroup className="flex-1" label="change password">
              <Input
                id="change password"
                variant="rounded"
                type="password"
                placeholder="current password"
              />
            </InputGroup>
            <InputGroup className="flex-1" label="">
              <Input
                id="New password"
                variant="rounded"
                type="password"
                placeholder="New password"
              />
            </InputGroup>
            <InputGroup className="flex-1" label="">
              <Input
                id="Repeat New password"
                variant="rounded"
                type="password"
                placeholder="Repeat New password"
              />
            </InputGroup>
          </div> */}

          {/* Button */}
          <div className="mt-6 flex justify-end space-x-4">
            <button type="button" className="btn-outline">
              Cancel
            </button>
            <button className="btn">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;

import { Input, InputGroup } from '../components/Input';

const UserProfile = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-32">
        <div className="h4 mb-9 text-left font-semibold text-primary">
          Edit Your Profile
        </div>
        <form className="w-full">
          <div className="flex w-full flex-col gap-5 md:flex-row">
            <InputGroup className="flex-1" label="First Name">
              <Input id="first-name" variant="rounded" placeholder="John" />
            </InputGroup>
            <InputGroup className="flex-1" label="Last Name">
              <Input id="last-name" variant="rounded" placeholder="Doe" />
            </InputGroup>
          </div>

          <div className="mt-6 flex w-full flex-col gap-5 md:flex-row">
            <InputGroup className="flex-1" label="Email">
              <Input
                id="email"
                variant="rounded"
                placeholder="johndoe@example.com"
              />
            </InputGroup>
            <InputGroup className="flex-1" label="Address">
              <Input
                id="address"
                variant="rounded"
                placeholder="Your address"
              />
            </InputGroup>
          </div>

          <div className="mt-6 flex w-full flex-col gap-5">
            <InputGroup className="flex-1" label="change password">
              <Input
                id="change password"
                variant="rounded"
                placeholder="current password"
              />
            </InputGroup>
            <InputGroup className="flex-1" label="">
              <Input
                id="New password"
                variant="rounded"
                placeholder="New password"
              />
            </InputGroup>
            <InputGroup className="flex-1" label="">
              <Input
                id="Repeat New password"
                variant="rounded"
                placeholder="Repeat New password"
              />
            </InputGroup>
          </div>

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

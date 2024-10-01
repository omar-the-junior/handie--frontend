import { Input, InputGroup } from '../components/Input';

function Contact() {
  return (
    <>
      <div className="bg-whisper">
        <article className="container flex flex-col items-center gap-16">
          <header className="mt-24 flex flex-col items-center">
            <h1 className="text-black h4 font-poppins font-semibold leading-normal">
              Get In Touch With Us
            </h1>
            <p className="text-base-r w-full max-w-xl text-center font-poppins font-normal leading-normal text-neutral">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Will Always Be There To Help
              You Out. Do Not Hesitate!
            </p>
          </header>

          <article className="mb-24 flex w-full flex-col justify-between gap-10 lg:flex-row">
            <address className="flex-start flex w-full flex-wrap justify-between gap-10 self-start rounded-lg bg-white px-12 py-9 not-italic lg:w-auto lg:flex-col">
              <div className="flex flex-row gap-8 lg:w-full">
                <img
                  className="self-start"
                  src="/icons/customer_support_logo.svg"
                  alt="icon_customer_support"
                />
                <div className="flex flex-col">
                  <div className="text-black h5 font-poppins font-medium leading-normal">
                    Customer Support
                  </div>
                  <div className="text-black leading-norma font-poppins text-base font-normal">
                    +(20) 33322
                  </div>
                  <div className="text-black leading-norma font-poppins text-base font-normal">
                    +(20) 11 000 333 20
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-8 lg:w-full">
                <img
                  className="self-start"
                  src="icons/email_icon.svg"
                  alt="email_logo"
                ></img>
                <div className="flex flex-col">
                  <div className="text-black font-poppins text-[24px] font-normal leading-normal">
                    Email
                  </div>
                  <div className="text-balance font-poppins text-[16px] font-normal leading-normal">
                    support@handie.com
                  </div>
                </div>
              </div>
            </address>
            <div className="flex h-auto w-full flex-col gap-8 rounded-lg bg-white px-10 py-9 lg:max-w-lg">
              <h2 className="h4 font-poppins font-semibold leading-normal text-primary">
                Contact us directly
              </h2>
              <form className="space-y-4">
                <InputGroup label="Your Name" error="">
                  <Input id="name" variant="rounded" placeholder="John" />
                </InputGroup>

                <InputGroup label="Email" error="">
                  <Input
                    id="email"
                    variant="rounded"
                    placeholder="John@example.com"
                  />
                </InputGroup>

                <InputGroup label="Subjet">
                  <Input
                    id="subject"
                    variant="rounded"
                    placeholder="Question"
                  />
                </InputGroup>
                <InputGroup label="Message">
                  <Input
                    id="Message"
                    variant="rounded"
                    className="h-[150px]"
                    placeholder="Some text ......"
                  />
                </InputGroup>
                <button className="btn w-full">Submit</button>
              </form>
            </div>
          </article>
        </article>
      </div>
    </>
  );
}

export default Contact;

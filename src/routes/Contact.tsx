import { Input, InputGroup } from '../components/Input';

function Contact() {
  return (
    <div>
      <div className="h-auto bg-whisper">
        <div className="container flex flex-col items-center gap-[72px] self-stretch">
          <div className="mt-[98px] flex flex-col items-center">
            <div className="text-black font-poppins text-[30px] font-semibold leading-normal">
              Get In Touch With Us
            </div>
            <div className="xs:w-[650px] w-full max-w-[650px] text-center font-poppins text-[16px] font-normal leading-normal text-[#9F9F9F]">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Will Always Be There To Help
              You Out. Do Not Hesitate!
            </div>
          </div>

          <div className="mb-[98px] flex h-[auto] w-full flex-row justify-between">
            <div className="flex-start flex h-[260px] flex-col rounded-lg bg-white pb-[37px] pl-[46px] pr-[46px] pt-[37px]">
              <div className="flex flex-row gap-[30px]">
                <div>
                  <img
                    src="../../public/customer_support_logo.svg"
                    alt="icon_customer_support"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-black font-poppins text-[24px] font-medium leading-normal">
                    Customer Support
                  </div>
                  <div className="text-black leading-norma font-poppins text-[16px] font-normal">
                    +(20) 33322
                  </div>
                  <div className="text-black leading-norma font-poppins text-[16px] font-normal">
                    +(20) 11 000 333 20
                  </div>
                </div>
              </div>
              <div className="mt-[42px] flex flex-row gap-[30px]">
                <div>
                  <img src="../../public/email_icon.svg" alt="email_logo"></img>
                </div>
                <div className="flex flex-col">
                  <div className="text-black font-poppins text-[24px] font-normal leading-normal">
                    Email
                  </div>
                  <div className="text-balance font-poppins text-[16px] font-normal leading-normal">
                    support@handie.com
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-end flex h-auto gap-[30px] rounded-lg bg-white pb-[35px] pl-[40px] pr-[40px] pt-[35px]">
              <div>
                <div className="align-stretch font-poppins text-[30px] font-semibold leading-normal text-primary">
                  Contact us directly
                </div>
                <div>
                  <form className="space-y-4">
                    <InputGroup
                      className="w-[420px] pt-[30px]"
                      label="Your Name"
                      error=""
                    >
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
                    <button className="w-full rounded-lg bg-primary py-[14px] font-poppins text-[16px] font-medium text-white">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

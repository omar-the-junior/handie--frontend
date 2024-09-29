import { Link } from 'react-router-dom';

const Footer = () => {
  const logoVertical = '/images/logo-vertical.svg';
  const style = 'font-medium text-neutral text-base-r ';

  return (
    <footer className="w-full bg-secondary py-20">
      <div className="container">
        {/* footer top */}
        <div className="md:flex-row flex flex-col items-start justify-between gap-12 self-stretch border-b-2 border-neutral px-0 py-5">
          {/* logo & description */}
          <div className="md:max-w-sm w-full flex-shrink-0">
            <img src={logoVertical} alt="logo" className='size-36' />
            <p className="text-base-r text-neutral">
              Handie is your go-to platform for discovering unique, handmade
              creations crafted with passion. We connect talented makers with
              buyers who value creativity and quality.
            </p>
          </div>

          {/* links & help */}
          <div className="flex w-full justify-between lg:contents">
            <div className="md:gap-12 flex flex-col gap-7">
              {/* links */}
              <h3 className="text-base-r font-semibold text-charcoal">Links</h3>
              <ul className="flex flex-col gap-7">
                <li className={style}>
                  <Link to="/">Home</Link>
                </li>
                <li className={style}>
                  <Link to="/shop">Shop</Link>
                </li>
                <li className={style}>
                  <Link to="/about">About</Link>
                </li>
                <li className={style}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* help */}
            <div className="md:gap-12 flex flex-col gap-7">
              <h3 className="text-base-r font-semibold text-charcoal">Help</h3>
              <ul className="flex flex-col gap-7">
                <li className={style}>
                  <a href="#">Payment Options</a>
                </li>
                <li className={style}>
                  <a href="#">Returns</a>
                </li>
                <li className={style}>
                  <a href="#">Privacy Policies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* footer bottom */}
        <div>
          <p className="text-base-r font-normal text-charcoal">
            &copy;2024 Handie. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

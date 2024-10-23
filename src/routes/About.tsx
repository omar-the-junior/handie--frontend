import Header from '../components/Header';

const About = () => {
  const breadcrumbs = [{ name: 'Home', link: '/' }, { name: 'About' }];

  return (
    <>
      <Header breadcrumbs={breadcrumbs} pageName="About Us" />
      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-charcoal">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to Handie, your number one source for all things [product,
            ie: furniture, electronics, etc.]. We're dedicated to giving you the
            very best of [product], with a focus on dependability, customer
            service, and uniqueness.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-charcoal">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to provide high-quality products that meet the needs
            and expectations of our customers. We strive to offer exceptional
            customer service and a seamless shopping experience.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-charcoal">
            Our Team
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our team is made up of passionate individuals who are dedicated to
            providing the best possible service to our customers. We work hard
            to ensure that every customer is satisfied with their purchase.
          </p>
        </section>
      </div>
    </>
  );
};

export default About;

import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nemo
            quo dolorem optio repudiandae ipsa possimus quibusdam in, quisquam
            maiores.
          </p>

          <p>©️ WizzyDigics All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Lorem, ipsum dolor.</p>
            <p className="my-5">Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Lagos, Nigeria.</p>
            <p>+234(0)- 703- 2191- 259 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

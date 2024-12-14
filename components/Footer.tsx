// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="grid grid-cols-1 px-2 py-4 lg:grid-cols-2 bg-yellow-300 fixed bottom-0">
    <div className="m-1 text-center">
      <h4 className="font-bold">About</h4>
      <p>
        Web App using  TheMealDB open API and nextjs, localStorage as
        storage for favourite meal
      </p>
    </div>

    <div className="m-1 text-center">
      <h4 className="font-bold">Contact</h4>     
      <p>Author: Quica Espi Puig</p>
      <p>Email: qepsaforweb@gmail.com</p>
    </div>
  </div>
  );
};

export default Footer;

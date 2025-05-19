import "./PointOfSale.scss";
import { Card } from "flowbite-react";
import Navigation from "../Navigation/Navigation";

function PointOfSale() {
  return (
    <div className="pos-container  pos">
      <nav className="flex-1">
        <Navigation className="nav-modify" />
      </nav>

      <section className="flex justify-around items-center w-[57.8%] rounded-lg h-[6%] pos__categories-selection">
        <h2 className="rounded-lg pos__categories-selection__category">
          Coffee
        </h2>
        <h2 className=" rounded-lg pos__categories-selection__category">
          Pastry
        </h2>
        <h2 className="rounded-lg pos__categories-selection__category">Tea</h2>
        <h2 className="rounded-lg pos__categories-selection__category">
          Beverages
        </h2>
      </section>
      <section className="bg-[#f5ecd5]/6 backdrop-blur-sm border border-white/20 rounded-xl p-6 hidden md:block w-[57.8%] h-[72%] overflow-y-scroll pos__monitor">
        <Card
          className="max-w-[200px] pos__monitor__product"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg"
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Espresso
          </h5>
        </Card>
        <Card
          className="max-w-[200px] pos__monitor__product"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/911810/pexels-photo-911810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Matcha Latte
          </h5>
        </Card>
        <Card
          className="max-w-[200px] pos__monitor__product"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/3704460/pexels-photo-3704460.jpeg"
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Americano
          </h5>
        </Card>
        <Card
          className="max-w-[200px] pos__monitor__product"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Cappuccino
          </h5>
        </Card>
        <Card
          className="max-w-[200px] pos__monitor__product"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/8472184/pexels-photo-8472184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Flat White
          </h5>
        </Card>
        <Card
          className="max-w-[200px] pos__monitor__product"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg"
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Espresso
          </h5>
        </Card>
      </section>

      <section className="pos__cart h-[88%] w-[20%]">Cart</section>
    </div>
  );
}

export default PointOfSale;

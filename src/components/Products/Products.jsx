import "./Products.scss";
import Navigation from "../Navigation/Navigation";
import {
  Card,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { useState } from "react";

function Products() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Navigation />
      <section className=" bg-[#f5ecd5]/6 backdrop-blur-sm border border-white/20 rounded-xl hidden md:block min-w-240 h-[80%] overflow-y-scroll   product__monitor">
        <Card
          className="max-w-[170px] product__monitor__products"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Espresso
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Available: 10
          </h6>
        </Card>
        <Card
          className="max-w-[170px] product__monitor__products"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/911810/pexels-photo-911810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Matcha Latte
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Available: 7
          </h6>
        </Card>
        <Card
          className="max-w-[170px] product__monitor__products"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/3704460/pexels-photo-3704460.jpeg"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Americano
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Available: 20
          </h6>
        </Card>
        <Card
          className="max-w-[170px] product__monitor__products"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Cappuccino
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Available: 10
          </h6>
        </Card>
        <Card
          className="max-w-[170px] product__monitor__products"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/8472184/pexels-photo-8472184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Flat White
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Available: 2
          </h6>
        </Card>
        <Card
          className="max-w-[170px] product__monitor__products"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Espresso
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Available: 25
          </h6>
        </Card>
        <Card
          className="max-w-[170px] product__monitor__products"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Espresso
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Available: 10
          </h6>
        </Card>
        <Card
          className="max-w-[170px] product__monitor__products"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/911810/pexels-photo-911810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Matcha Latte
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Available: 7
          </h6>
        </Card>
        <Card
          className="max-w-[170px] product__monitor__products"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/3704460/pexels-photo-3704460.jpeg"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Americano
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Available: 20
          </h6>
        </Card>
        <Card
          className="max-w-[170px] product__monitor__products"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Cappuccino
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Available: 10
          </h6>
        </Card>
        <Card
          className="max-w-[170px] product__monitor__products"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/8472184/pexels-photo-8472184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Flat White
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Available: 2
          </h6>
        </Card>
        <Card
          className="max-w-[170px] product__monitor__products"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Espresso
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Available: 25
          </h6>
        </Card>
      </section>
      {/* modal */}

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Terms of Service</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Products;

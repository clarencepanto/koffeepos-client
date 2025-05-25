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
      <section className="bg-[#f5ecd5]/6 backdrop-blur-sm  border-white/20 rounded-xl hidden md:block min-w-245 box-border h-[80%] overflow-y-scroll product__monitor">
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
        <Card
          className="max-w-[170px] product__monitor__products"
          imgSrc="https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Create Product
          </h5>
        </Card>
      </section>
      {/* modal */}

      <Modal
        className="product__modal"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <ModalHeader>How To Make</ModalHeader>
        <ModalBody className="flex">
          <section className="text-white">
            <h2 className="text-3xl pb-5">Americano</h2>
            <article>20ml Milk</article>
            <article>2g Chocolate chip</article>
            <article>2g Coffee grain</article>
          </section>
          <section className="text-white pl-20">
            <h2 className="text-3xl pb-5">Instructions</h2>
            <article>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque obcaecati libero, quisquam voluptates tenetur
              laudantium, tempora magni similique recusandae optio fugiat
            </article>
          </section>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
}

export default Products;

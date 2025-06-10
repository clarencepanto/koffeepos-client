import "./PointOfSale.scss";
import socket from "../../socket";
import {
  Card,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Label,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Select,
} from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import axios from "axios";

function PointOfSale() {
  // product modifier
  const [openModal, setOpenModal] = useState(false);
  const [openModalCheckout, setOpenModalCheckout] = useState(false);
  const [productArray, setProductArray] = useState([]);
  const [confirmedProduct, setConfirmedProduct] = useState([]);
  // patching
  const [getCardId, setGetCardId] = useState(null);
  // product quantity
  const [getQuantity, setGetQuantity] = useState(1);
  const [getNormalPrice, setGetNormalPrice] = useState(0);
  const [getFullPrice, setGetFullPrice] = useState(0);
  const [availabilityUpdates, setAvailabilityUpdates] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [getDeleteId, setGetDeleteId] = useState(0);

  // fetch product data and availability data
  useEffect(() => {
    const getProductData = async () => {
      const response = await axios.get("http://localhost:8080/products");
      setProductArray(response.data);
    };
    const getInitialAvailability = async () => {
      const response = await axios.get("http://localhost:8080/productavail");
      setAvailabilityUpdates(response.data);
    };

    getProductData();
    getInitialAvailability();

    //   // for available products after purchase
    const handleUpdate = (data) => {
      console.log("✅ Received updated availability:", data);
      setAvailabilityUpdates(data);
    };

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    socket.on("product_availability_update", handleUpdate);
  }, []);

  // get id for patch request
  const handleGetCardId = (getId) => {
    setGetCardId(getId);
  };

  // handle patch quantity request
  const updateProductQuantity = async () => {
    try {
      // update request
      const response = await axios.patch(
        `http://localhost:8080/products/${getCardId}`,
        {
          quantity: getQuantity,
        }
      );
      console.log("updated quantity", response.data);
      // update new quantity
      setConfirmedProduct((prev) => [...prev, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  //  get regular price and tax price
  useEffect(() => {
    const regPrice = confirmedProduct.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const gstAdd = regPrice * 0.05;
    const pstAdd = regPrice * 0.07;
    const fullPrice = regPrice + gstAdd + pstAdd;
    setGetNormalPrice(regPrice);
    setGetFullPrice(fullPrice);
  }, [confirmedProduct]);

  // delete the item cart
  const handleRemoveFromCart = (id) => {
    setConfirmedProduct((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // post request after checking out the product order and will adjust inventory accordingly
  const checkoutProducts = async () => {
    try {
      const checkoutItems = confirmedProduct.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      }));

      await axios.post("http://localhost:8080/sales", checkoutItems);
    } catch (error) {
      console.error(error);
    }
  };

  // call cart from usuals
  useEffect(() => {
    const cartData = JSON.parse(sessionStorage.getItem("checkoutCart")) || [];
    setConfirmedProduct(cartData);
  }, []);

  return (
    <div className="pos-container  pos">
      <nav className="flex-1">
        <Navigation className="nav-modify" />
      </nav>
      <section className="flex justify-around items-center  rounded-lg h-[6%] pos__categories-selection">
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
      {/* iterates the product data to ui */}
      <section className="bg-[#f5ecd5]/6 backdrop-blur-sm border border-white/20 rounded-xl p-6 hidden md:block w-[57.8%] h-[72%] overflow-y-scroll pos__monitor">
        {productArray &&
          productArray.map((productdata) => {
            // Find matching recipe availability
            const updated = availabilityUpdates.find(
              (item) => item.id === productdata.id
            );
            const availableStock = updated ? updated.available : 0;

            return (
              <Card
                className="max-w-[200px] pos__monitor__product"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={productdata.image_url}
                onClick={() => {
                  setOpenModal(true);
                  handleGetCardId(productdata.id);
                }}
                key={productdata.id}
              >
                <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
                  {productdata.name}
                </h5>
                <h6 className="text-center dark:text-white font-bold ">
                  Price: ${productdata.price} Available: {availableStock}
                  {productdata.availability}
                </h6>
              </Card>
            );
          })}
      </section>
      {/* Modal Modifier Selection*/}
      <Modal
        show={openModal}
        position="center"
        onClose={() => setOpenModal(false)}
      >
        <ModalHeader>Get Products</ModalHeader>

        <ModalBody>
          {/* drink sizes */}
          <section className="flex gap-20">
            <div className="flex max-w-md flex-col gap-4">
              <h5 className="dark:text-white pr-[5px] text-md">Drink size</h5>
              <div className="flex items-center gap-2">
                <Radio id="small" name="sizes" value="small" defaultChecked />
                <Label htmlFor="medium">Small</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="medium" name="sizes" value="medium" />
                <Label htmlFor="medium">Medium</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="large" name="sizes" value="large" />
                <Label htmlFor="large">Large</Label>
              </div>
            </div>

            {/* Sugar Selection */}
            <div className="flex max-w-md flex-col gap-4">
              <h5 className="dark:text-white pr-[5px] text-md">Sugar Levels</h5>
              <div className="flex items-center gap-2">
                <Radio id="full" name="levels" value="full" defaultChecked />
                <Label htmlFor="full">100%</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="half" name="levels" value="half" />
                <Label htmlFor="half">50%</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="none" name="levels" value="none" />
                <Label htmlFor="none">0%</Label>
              </div>
            </div>

            {/* hot or cold */}
            <div className="flex max-w-md flex-col gap-4">
              <h5 className="dark:text-white pr-[5px] text-md">Hot or Iced</h5>
              <div className="flex items-center gap-2">
                <Radio id="hot" name="temp" value="hot" defaultChecked />
                <Label htmlFor="hot">Hot</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="iced" name="temp" value="iced" />
                <Label htmlFor="iced">Iced</Label>
              </div>
            </div>

            {/* quantity */}
            <div className="flex max-w-md flex-col gap-2">
              <h5 className="dark:text-white pr-[5px] text-md">Quantity</h5>
              <input
                type="number"
                value={getQuantity}
                onChange={(e) => setGetQuantity(e.target.value)}
                className="max-w-10 bg-white outline-blue-500"
              />
            </div>
          </section>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              setOpenModal(false);
              updateProductQuantity();
            }}
          >
            Add
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {/* cart */}
      <section className=" pos__cart-container pos__cart">
        <div className=" overflow-y-auto pos__cart__monitor">
          <Table className="min-w-full table-auto mb-20">
            <TableHead className="sticky top-0">
              <TableRow>
                <TableHeadCell className=" pos__cart__monitor__table-head">
                  Product name
                </TableHeadCell>
                <TableHeadCell className="pos__cart__monitor__table-head">
                  Price
                </TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="divide-y">
              {confirmedProduct &&
                confirmedProduct.map((data) => {
                  const normalPrice = data.price * data.quantity;

                  return (
                    <>
                      <TableRow
                        onClick={() => {
                          setDeleteModal(true);
                          setGetDeleteId(data.id);
                        }}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        key={data.id}
                      >
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                          {data.name} {data.quantity}x
                        </TableCell>
                        <TableCell className="pos__cart__monitor__table-data">
                          ${normalPrice}
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
            </TableBody>
          </Table>
        </div>
      </section>
      {/* checkout price  */}
      <section className="absolute left-394 bottom-10 pos__checkout">
        <Card
          href="#"
          className=" max-w-sm rounded-none pos__checkout__taxscreen"
        >
          <div className="flex justify-around">
            <h5 className="text-8px font-bold tracking-tight  dark:text-white">
              RegPrice:
            </h5>
            <h5 className="text-8px font-bold tracking-tight  dark:text-white">
              ${getNormalPrice}
            </h5>
          </div>
          <div className="flex justify-around relative h-30 ">
            <h5 className="text-xl font-bold tracking-tight  dark:text-white">
              Total Price:
            </h5>
            <h5 className="text-xl font-bold tracking-tight  dark:text-white">
              ${getFullPrice}
            </h5>
          </div>
        </Card>
      </section>
      {/* Buy now */}
      <section className="absolute right-30 bottom-20">
        <Button onClick={() => setOpenModalCheckout(true)}>Checkout</Button>
        <Modal
          show={openModalCheckout}
          onClose={() => setOpenModalCheckout(false)}
        >
          <ModalHeader>Checkout</ModalHeader>
          <ModalBody>
            {/* Final summary of orders */}
            <h2 className="text-white">Orders</h2>

            {confirmedProduct &&
              confirmedProduct.map((data) => {
                return (
                  <p className="text-white">
                    {data.name} {data.quantity}x
                  </p>
                );
              })}
            {/* select a payment option */}
            <div className="space-y-6">
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="payment-methods">
                    Select the payment option
                  </Label>
                </div>
                <Select id="payment-methods" required>
                  <option>Mastercard</option>
                  <option>Visa</option>
                  <option>Amex</option>
                  <option>Cash</option>
                </Select>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                setOpenModalCheckout(false);
                checkoutProducts();
                setConfirmedProduct([]);
              }}
            >
              Pay Now
            </Button>
          </ModalFooter>
        </Modal>
      </section>

      {/* delete modal */}
      <Modal show={deleteModal} size="md" onClose={() => setDeleteModal(false)}>
        <ModalBody>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => {
                  setDeleteModal(false);
                  handleRemoveFromCart(getDeleteId);
                }}
              >
                Delete
              </Button>
              <Button color="gray" onClick={() => setDeleteModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default PointOfSale;

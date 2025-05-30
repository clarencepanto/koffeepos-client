import "./PointOfSale.scss";
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
import { useState } from "react";
import Navigation from "../Navigation/Navigation";

function PointOfSale() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalCheckout, setOpenModalCheckout] = useState(false);

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
      <section className="bg-[#f5ecd5]/6 backdrop-blur-sm border border-white/20 rounded-xl p-6 hidden md:block w-[57.8%] h-[72%] overflow-y-scroll pos__monitor">
        <Card
          className="max-w-[200px] pos__monitor__product"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Espresso
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Price: $2.00 Available: 10
          </h6>
        </Card>
        <Card
          className="max-w-[200px] pos__monitor__product"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/911810/pexels-photo-911810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Matcha Latte
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Price: $3.00 Available: 7
          </h6>
        </Card>
        <Card
          className="max-w-[200px] pos__monitor__product"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/3704460/pexels-photo-3704460.jpeg"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Americano
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Price: $2.50 Available: 20
          </h6>
        </Card>
        <Card
          className="max-w-[200px] pos__monitor__product"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Cappuccino
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Price: $3.00 Available: 10
          </h6>
        </Card>
        <Card
          className="max-w-[200px] pos__monitor__product"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/8472184/pexels-photo-8472184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Flat White
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Price: $2.50 Available: 2
          </h6>
        </Card>
        <Card
          className="max-w-[200px] pos__monitor__product"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg"
          onClick={() => setOpenModal(true)}
        >
          <h5 className="text-center text-md font-bold tracking-tight dark:text-white">
            Espresso
          </h5>
          <h6 className="text-center dark:text-white font-bold ">
            Price: $2.00 Available: 25
          </h6>
        </Card>
      </section>
      {/* Modal */}

      <Modal
        show={openModal}
        position="center"
        onClose={() => setOpenModal(false)}
      >
        <ModalHeader>Get Coffee</ModalHeader>

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
                type="text"
                className="max-w-10 bg-white outline-blue-500"
              />
            </div>
          </section>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModal(false)}>Add</Button>
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
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Espresso 1x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $2.5
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Matcha Latte 10x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $6
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Americano 2x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $7.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cortado 4x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $8.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cortado 4x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $8.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cappuccino 3x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $6.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Flat White 1x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $8.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cortado 4x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $8.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cappuccino 3x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $6.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cappuccino 3x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $6.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cappuccino 3x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $6.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cappuccino 3x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $6.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cappuccino 3x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $6.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cappuccino 3x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $6.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cappuccino 3x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $6.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cappuccino 3x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $6.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cappuccino 3x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $6.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cappuccino 3x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $6.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cappuccino 3x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $6.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cappuccino 3x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $6.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Cappuccino 3x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $6.50
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white pos__cart__monitor__table-data">
                  Flat White 1x
                </TableCell>
                <TableCell className="pos__cart__monitor__table-data">
                  $8.50
                </TableCell>
              </TableRow>
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
              Tax:
            </h5>
            <h5 className="text-8px font-bold tracking-tight  dark:text-white">
              $22.50
            </h5>
          </div>
          <div className="flex justify-around relative h-30 ">
            <h5 className="text-xl font-bold tracking-tight  dark:text-white">
              Total Price:
            </h5>
            <h5 className="text-xl font-bold tracking-tight  dark:text-white">
              $44.50
            </h5>
          </div>
        </Card>
      </section>

      {/* Buy now */}

      <section className="absolute right-19 bottom-15">
        <Button onClick={() => setOpenModalCheckout(true)}>Checkout</Button>
        <Modal
          show={openModalCheckout}
          onClose={() => setOpenModalCheckout(false)}
        >
          <ModalHeader>Checkout</ModalHeader>
          <ModalBody>
            {/* Final summary of orders */}
            <h2 className="text-white">Orders</h2>
            <p className="text-white">Espresso 1x</p>
            <p className="text-white">Espresso 1x</p>
            <p className="text-white">Espresso 1x</p>
            <p className="text-white">Espresso 1x</p>
            <p className="text-white">Espresso 1x</p>
            <p className="text-white">Espresso 1x</p>
            <p className="text-white">Espresso 1x</p>
            <p className="text-white">Espresso 1x</p>
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
            <Button onClick={() => setOpenModalCheckout(false)}>Pay Now</Button>
          </ModalFooter>
        </Modal>
      </section>
    </div>
  );
}

export default PointOfSale;

import "./Supplier.scss";
import Navigation from "../Navigation/Navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Label,
  TextInput,
  Select,
  Card,
} from "flowbite-react";
import { useState } from "react";

function Supplier() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalCheckout, setOpenModalCheckout] = useState(false);
  return (
    <div>
      <Navigation />
      <section className="absolute max-h-160 top-18 right-64 overflow-y-scroll ">
        <Table className="min-w-192 table-auto">
          <TableHead className="sticky top-0">
            <TableRow>
              <TableHeadCell>Ingredient Name</TableHeadCell>
              <TableHeadCell>Stock</TableHeadCell>
              <TableHeadCell>Supplier Name</TableHeadCell>
              <TableHeadCell>Price</TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Edit</span>
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Sugar
              </TableCell>
              <TableCell>100 gm</TableCell>
              <TableCell>Wyatt Co</TableCell>
              <TableCell>400</TableCell>
              <TableCell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  onClick={() => setOpenModal(true)}
                >
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Coffee Beans
              </TableCell>
              <TableCell>100 gm</TableCell>
              <TableCell>Wyatt Co</TableCell>
              <TableCell>300</TableCell>
              <TableCell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  onClick={() => setOpenModal(true)}
                >
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Matcha Powder
              </TableCell>
              <TableCell>100 gm</TableCell>
              <TableCell>Wyatt Co</TableCell>
              <TableCell>500</TableCell>
              <TableCell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  onClick={() => setOpenModal(true)}
                >
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Chai Powder
              </TableCell>
              <TableCell>200 gm</TableCell>
              <TableCell>Wyatt Co</TableCell>
              <TableCell>400</TableCell>
              <TableCell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  onClick={() => setOpenModal(true)}
                >
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Oat Milk
              </TableCell>
              <TableCell>1000 ml</TableCell>
              <TableCell>Wyatt Co</TableCell>
              <TableCell>600</TableCell>
              <TableCell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  onClick={() => setOpenModal(true)}
                >
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Chocolate Chip
              </TableCell>
              <TableCell>50 gm</TableCell>
              <TableCell>Nordel Co</TableCell>
              <TableCell>100</TableCell>
              <TableCell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  onClick={() => setOpenModal(true)}
                >
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Maple Syrup
              </TableCell>
              <TableCell>500 ml</TableCell>
              <TableCell>SideSoul Co</TableCell>
              <TableCell>40</TableCell>
              <TableCell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  onClick={() => setOpenModal(true)}
                >
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Sugar
              </TableCell>
              <TableCell>100 gm</TableCell>
              <TableCell>Wyatt Co</TableCell>
              <TableCell>400</TableCell>
              <TableCell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  onClick={() => setOpenModal(true)}
                >
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Sugar
              </TableCell>
              <TableCell>100 gm</TableCell>
              <TableCell>Wyatt Co</TableCell>
              <TableCell>400</TableCell>
              <TableCell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  onClick={() => setOpenModal(true)}
                >
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Sugar
              </TableCell>
              <TableCell>100 gm</TableCell>
              <TableCell>Wyatt Co</TableCell>
              <TableCell>400</TableCell>
              <TableCell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  onClick={() => setOpenModal(true)}
                >
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Sugar
              </TableCell>
              <TableCell>100 gm</TableCell>
              <TableCell>Wyatt Co</TableCell>
              <TableCell>400</TableCell>
              <TableCell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  onClick={() => setOpenModal(true)}
                >
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Sugar
              </TableCell>
              <TableCell>100 gm</TableCell>
              <TableCell>Wyatt Co</TableCell>
              <TableCell>400</TableCell>
              <TableCell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  onClick={() => setOpenModal(true)}
                >
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Sugar
              </TableCell>
              <TableCell>100 gm</TableCell>
              <TableCell>Wyatt Co</TableCell>
              <TableCell>400</TableCell>
              <TableCell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  onClick={() => setOpenModal(true)}
                >
                  Add
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Modal */}
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <ModalHeader>Confirm Order</ModalHeader>
          <ModalBody className="max-w-120">
            <div className="space-y-6">
              <div className="flex max-w-lg gap-15">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="order">Order</Label>
                  </div>
                  <TextInput
                    id="order"
                    type="number"
                    sizing="md"
                    className="max-w-30"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="mpassword">Manager Password</Label>
                  </div>
                  <TextInput
                    id="mpassword"
                    type="password"
                    sizing="md"
                    className="max-w-30"
                  />
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpenModal(false)}>Add Order</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </section>
      {/* cart */}
      <section className="h-[95%] w-[20%] pos__cart-container pos__cart">
        <div className=" max-h-150 overflow-y-auto pos__cart__monitor">
          <Table className="min-w-full table-auto mb-20">
            <TableHead className="sticky top-0">
              <TableRow>
                <TableHeadCell className=" pos__cart__monitor__table-head">
                  Ingredient Name
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
      {/* pricing */}
      <section className="absolute right-0 bottom-0 pos__checkout">
        <Card
          href="#"
          className=" max-w-sm rounded-none pos__checkout__taxscreen"
        >
          <div className="flex justify-between">
            <h5 className="text-8px font-bold tracking-tight  dark:text-white">
              Tax:
            </h5>
            <h5 className="text-8px font-bold tracking-tight  dark:text-white">
              $22.50
            </h5>
          </div>
          <div className="flex justify-between relative h-30 ">
            <h5 className="text-xl font-bold tracking-tight  dark:text-white">
              Total Price:
            </h5>
            <h5 className="text-xl font-bold tracking-tight  dark:text-white">
              $44.50
            </h5>
          </div>
        </Card>
      </section>
      {/* checkout button */}
      <section className="absolute right-19 bottom-10">
        <Button onClick={() => setOpenModalCheckout(true)}>Checkout</Button>
        <Modal
          show={openModalCheckout}
          onClose={() => setOpenModalCheckout(false)}
        >
          <ModalHeader>Checkout</ModalHeader>
          <ModalBody>
            {/* Final summary of orders */}
            <h2 className="text-white">Orders</h2>
            <p className="text-white">Sugar 1x</p>
            <p className="text-white">Cream 1x</p>
            <p className="text-white">Coffee Beans 1x</p>
            <p className="text-white">Milk 1x</p>
            <p className="text-white">Matcha Latte 1x</p>
            <p className="text-white">Chai Latte 1x</p>
            <p className="text-white">Oat Milk 1x</p>
            <p className="text-white">Dark Roast Beans 1x</p>
            {/* select a payment option */}
            <div className="space-y-6">
              <div className="max-w-md pt-10">
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
            <Button onClick={() => setOpenModalCheckout(false)}>
              Send Order
            </Button>
            <Button onClick={() => setOpenModalCheckout(false)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </section>
    </div>
  );
}

export default Supplier;

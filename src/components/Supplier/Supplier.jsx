import "./Supplier.scss";
import Navigation from "../Navigation/Navigation";
import {
  Card,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import { useState } from "react";

function Supplier() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Navigation />

      <HiShoppingCart
        className="text-3xl shopping__cart "
        onClick={() => setOpenModal(true)}
      />

      <section className="ingredients-table-supplier">
        {/* ingredient orders mobile*/}
        <Table className="table-auto table-cont-mobile-supplier ">
          <TableHead className="sticky top-0">
            <TableRow>
              <TableHeadCell className="supplier-header">
                Ingredient Name
              </TableHeadCell>
              <TableHeadCell className="supplier-header">
                Quantity
              </TableHeadCell>
              <TableHeadCell className="supplier-header">Price</TableHeadCell>

              <TableHeadCell>
                <span className="sr-only">Add</span>
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Sugar
              </TableCell>
              <TableCell>100 gm</TableCell>
              <TableCell>$21</TableCell>
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
                Milk
              </TableCell>
              <TableCell>1000 ml</TableCell>
              <TableCell>$21</TableCell>

              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Coffee Beans
              </TableCell>
              <TableCell>200 gm</TableCell>
              <TableCell>$21</TableCell>
              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Matcha Powder
              </TableCell>
              <TableCell>25 gm</TableCell>
              <TableCell>$21</TableCell>

              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Cocoa Powder
              </TableCell>
              <TableCell>10 gm</TableCell>
              <TableCell>$21</TableCell>

              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Sugar
              </TableCell>
              <TableCell>100 gm</TableCell>
              <TableCell>$21</TableCell>

              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Milk
              </TableCell>
              <TableCell>1000 ml</TableCell>
              <TableCell>$21</TableCell>
              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Add
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* tablet /desktop table supplies */}

        <Table className="table-auto table-cont-supplier">
          <TableHead className="sticky top-0">
            <TableRow>
              <TableHeadCell className="supplier-header">
                Ingredient Name
              </TableHeadCell>
              <TableHeadCell className="supplier-header">
                Quantity
              </TableHeadCell>
              <TableHeadCell className="supplier-header">Price</TableHeadCell>

              <TableHeadCell>
                <span className="sr-only">Add</span>
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Sugar
              </TableCell>
              <TableCell>100 gm</TableCell>
              <TableCell>$21</TableCell>
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
                Milk
              </TableCell>
              <TableCell>1000 ml</TableCell>
              <TableCell>$21</TableCell>

              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Coffee Beans
              </TableCell>
              <TableCell>200 gm</TableCell>
              <TableCell>$21</TableCell>
              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Matcha Powder
              </TableCell>
              <TableCell>25 gm</TableCell>
              <TableCell>$21</TableCell>

              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Cocoa Powder
              </TableCell>
              <TableCell>10 gm</TableCell>
              <TableCell>$21</TableCell>

              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Sugar
              </TableCell>
              <TableCell>100 gm</TableCell>
              <TableCell>$21</TableCell>

              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Add
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Milk
              </TableCell>
              <TableCell>1000 ml</TableCell>
              <TableCell>$21</TableCell>
              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Add
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Supplier Order</ModalHeader>
        <ModalBody className="overflow-y-hidden">
          <div className="space-y-6">
            {/* cart */}
            <section>
              <div className=" overflow-y-auto overflow-x-hidden table__shopping__supplier ">
                <Table className="min-w-full table-auto mb-20 ">
                  <TableHead className="sticky top-0">
                    <TableRow>
                      <TableHeadCell>Ingredient name</TableHeadCell>
                      <TableHeadCell>Price</TableHeadCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="divide-y">
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Espresso 1x
                      </TableCell>
                      <TableCell>$2.5</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Matcha Latte 10x
                      </TableCell>
                      <TableCell>$6</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Americano 2x
                      </TableCell>
                      <TableCell>$7.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cortado 4x
                      </TableCell>
                      <TableCell>$8.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cortado 4x
                      </TableCell>
                      <TableCell>$8.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cappuccino 3x
                      </TableCell>
                      <TableCell>$6.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Flat White 1x
                      </TableCell>
                      <TableCell>$8.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cortado 4x
                      </TableCell>
                      <TableCell>$8.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cappuccino 3x
                      </TableCell>
                      <TableCell>$6.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cappuccino 3x
                      </TableCell>
                      <TableCell>$6.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cappuccino 3x
                      </TableCell>
                      <TableCell>$6.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cappuccino 3x
                      </TableCell>
                      <TableCell>$6.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cappuccino 3x
                      </TableCell>
                      <TableCell>$6.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cappuccino 3x
                      </TableCell>
                      <TableCell>$6.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cappuccino 3x
                      </TableCell>
                      <TableCell>$6.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cappuccino 3x
                      </TableCell>
                      <TableCell>$6.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cappuccino 3x
                      </TableCell>
                      <TableCell>$6.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cappuccino 3x
                      </TableCell>
                      <TableCell>$6.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cappuccino 3x
                      </TableCell>
                      <TableCell>$6.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cappuccino 3x
                      </TableCell>
                      <TableCell>$6.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Cappuccino 3x
                      </TableCell>
                      <TableCell>$6.50</TableCell>
                    </TableRow>
                    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                        Flat White 1x
                      </TableCell>
                      <TableCell>$8.50</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </section>

            {/* checkout price  */}
            <section>
              <Card
                href="#"
                className=" max-w-sm  rounded-none checkout-supply"
              >
                <div className="flex justify-around relative ">
                  <h5 className=" font-bold tracking-tight  dark:text-white checkout-product-price">
                    Pay:
                  </h5>
                  <h5 className=" font-bold tracking-tight  dark:text-white checkout-product-price">
                    $44.50
                  </h5>
                </div>
              </Card>
            </section>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModal(false)}>Purchase</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Supplier;

import "./Ingredients.scss";
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
} from "flowbite-react";
import Navigation from "../Navigation/Navigation";
import { useEffect, useState } from "react";
import axios from "axios";

function Ingredients() {
  const [openModal, setOpenModal] = useState(false);
  const [getIngredients, setGetIngredients] =useState([])

  console.log(getIngredients)

      const getIngredientsData = async () => {
      const response = await axios.get("http://localhost:8080/ingredients");
      setGetIngredients(response.data);
    };

    useEffect(() => {
      getIngredientsData();
    },[])

  return (
    <div>
      <Navigation />
      <section className="overflow-y-scroll ingredients-table ">
        <Table className="table-auto table-cont">
          <TableHead className="sticky top-0">
            <TableRow>
              <TableHeadCell>Ingredient Name</TableHeadCell>
              <TableHeadCell>Stock</TableHeadCell>
              <TableHeadCell>Date Ordered</TableHeadCell>
              <TableHeadCell>Expiry</TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Edit</span>
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            {getIngredients && getIngredients.map((data) => {
              return(
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800" key={data.id}>
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {data.name}
              </TableCell>
              <TableCell>{data.stock} {data.unit}</TableCell>
              <TableCell>2025-05-07</TableCell>
              <TableCell>2026-05-07</TableCell>
              <TableCell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  onClick={() => setOpenModal(true)}
                >
                  Edit
                </a>
              </TableCell>
            </TableRow>)  
           
            })}
           
          </TableBody>
        </Table>

        {/* mobile table */}
        <Table className="table-auto table-cont-mobile">
          <TableHead className="sticky top-0">
            <TableRow>
              <TableHeadCell>Ingredient Name</TableHeadCell>
              <TableHeadCell>Stock</TableHeadCell>
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
              <TableCell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  onClick={() => setOpenModal(true)}
                >
                  Edit
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Milk
              </TableCell>
              <TableCell>1000 ml</TableCell>

              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Edit
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Coffee Beans
              </TableCell>
              <TableCell>200 gm</TableCell>
              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Edit
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Matcha Powder
              </TableCell>
              <TableCell>25 gm</TableCell>

              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Edit
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Cocoa Powder
              </TableCell>
              <TableCell>10 gm</TableCell>

              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Edit
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Sugar
              </TableCell>
              <TableCell>100 gm</TableCell>

              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Edit
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Milk
              </TableCell>
              <TableCell>1000 ml</TableCell>
              <TableCell>
                <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Edit
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Modal */}
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <ModalHeader>Edit Sugar Ingredient</ModalHeader>
          <ModalBody className="max-w-120">
            <div className="space-y-6">
              <div className="flex max-w-lg gap-15">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="stock">Edit Stock</Label>
                  </div>
                  <TextInput
                    id="stock"
                    type="text"
                    sizing="md"
                    className="max-w-20"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="expiry">Edit Expiry</Label>
                  </div>
                  <TextInput
                    id="expiry"
                    type="date"
                    sizing="md"
                    className="max-w-20"
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
            <Button onClick={() => setOpenModal(false)}>Apply</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </section>
    </div>
  );
}

export default Ingredients;

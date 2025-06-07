import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import {
  Button,
  Label,
  Modal,
  ModalBody,
  TextInput,
  Card,
  ModalFooter,
  ModalHeader,
  Checkbox,
} from "flowbite-react";
import { HiOutlineSearch, HiOutlineExclamationCircle } from "react-icons/hi";
import "./Usuals.scss";

function Usuals() {
  const [searchLoyalty, setSearchLoyalty] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openModalLoyalty, setOpenModalLoyalty] = useState(false);
  const [loyaltyDeleteRecipe, setLoyaltyDeleteRecipe] = useState(false);
  const [loyaltyCreateRecipe, setLoyaltyCreateRecipe] = useState(false);

  //   const testItems = ["coffee", "macchiato", "604386", "pink"];

  //   filter the items to be displayed later
  //   const filteredItems = testItems.filter((data) =>
  //     data.toLowerCase().includes(searchLoyalty.toLowerCase())
  //   );

  return (
    <div>
      <Navigation />

      <section className="bg-[#f5ecd5]/6 backdrop-blur-sm  border-white/20 rounded-xl overflow-y-hidden usuals__monitor">
        <h1 className="text-5xl usuals__monitor__title">Loyalties</h1>
        <input
          type="text"
          placeholder="Search Loyalties..."
          className="px-4 py-2 border border-gray-400 rounded-xl focus:outline-none focus:ring-2  search__input "
          value={searchLoyalty}
          onChange={(e) => setSearchLoyalty(e.target.value)}
        />
        <HiOutlineSearch className="absolute z-30 top-35 left-212" />
        <Button
          className="absolute top-33 left-240 z-20 usuals__add__loyalty"
          onClick={() => setOpenModal(true)}
          pill
        >
          Add Loyalty
        </Button>
        {/* for filtering later */}
        {/* {filteredItems &&
          filteredItems.map((data) => {
            return <li>{data}</li>;
          })} */}
      </section>
      <section className="loyalty__profile">
        <Card className="max-w-sm">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </h5>
            <p className="text-white p-1 loyalty__visits">Visits: 2</p>
            <p className="text-white p-1  loyalty__contact">
              Contact: 6044443322
            </p>
            <p className="text-white p-1  loyalty__allergies">
              Food Allergies: None
            </p>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                onClick={() => setOpenModalLoyalty(true)}
              >
                Open Loyalty
              </a>
            </div>
          </div>
        </Card>
        <Card className="max-w-sm">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Ted Clubberlang
            </h5>
            <p className="text-white p-1 loyalty__visits">Visits: 20</p>
            <p className="text-white p-1  loyalty__contact">
              Contact: 6044443322
            </p>
            <p className="text-white p-1  loyalty__allergies">
              Food Allergies: None
            </p>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                onClick={() => setOpenModalLoyalty(true)}
              >
                Open Loyalty
              </a>
            </div>
          </div>
        </Card>
        <Card className="max-w-sm">
          <div className="flex justify-end px-4 pt-4"></div>
          <div className="flex flex-col items-center pb-10">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Leon Kennedy
            </h5>
            <p className="text-white p-1 loyalty__visits">Visits: 50</p>
            <p className="text-white p-1  loyalty__contact">
              Contact: 6044443322
            </p>
            <p className="text-white p-1  loyalty__allergies">
              Food Allergies: None
            </p>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                onClick={() => setOpenModalLoyalty(true)}
              >
                Open Loyalty
              </a>
            </div>
          </div>
        </Card>
      </section>

      {/* modal for adding loyalty */}
      <Modal show={openModal} size="md" popup>
        <ModalBody>
          <form className="flex max-w-md flex-col gap-4 p-5">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="customer_name">Name</Label>
              </div>
              <TextInput
                id="customer_name"
                type="text"
                placeholder="customername...."
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="customer_allergies">Allergies</Label>
              </div>
              <TextInput id="customer_allergies" type="text" required shadow />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="customer_phone">Contact</Label>
              </div>
              <TextInput id="customer_phone" type="text" required shadow />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="customer_visits">Customer Visits</Label>
              </div>
              <TextInput id="customer_visits" type="text" required shadow />
            </div>
            <Button type="submit">Add Loyalty</Button>
            <Button onClick={() => setOpenModal(false)}>Cancel</Button>
          </form>
        </ModalBody>
      </Modal>

      {/* opens modal for loyalties info */}
      <Modal show={openModalLoyalty} onClose={() => setOpenModalLoyalty(false)}>
        <ModalHeader>Loyalty Name</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <h2
              className="text-white"
              onClick={() => setLoyaltyDeleteRecipe(true)}
            >
              Espresso with blueberry 1x $10
            </h2>
            <Button onClick={() => setLoyaltyCreateRecipe(true)}>
              Add Customized Recipe
            </Button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModalLoyalty(false)}>
            Add To Cart
          </Button>
          <Button
            color="alternative"
            onClick={() => setOpenModalLoyalty(false)}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* modal for deleting a special order */}
      <Modal
        show={loyaltyDeleteRecipe}
        size="md"
        onClose={() => setLoyaltyDeleteRecipe(false)}
        popup
      >
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="red" onClick={() => setLoyaltyDeleteRecipe(false)}>
                Yes, I'm sure
              </Button>
              <Button
                color="alternative"
                onClick={() => setLoyaltyDeleteRecipe(false)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>

      {/* modal for creating new loyalty recipe */}
      <Modal show={loyaltyCreateRecipe} size="md" popup>
        <ModalBody>
          <div className="space-y-6 pt-5">
            <form className="flex max-w-md flex-col gap-4 p-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="specialorder_name">Name</Label>
                </div>
                <TextInput
                  id="specialorder_name"
                  type="text"
                  placeholder="specialordername...."
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="ingredient-1">Ingredient #1</Label>
                </div>
                <TextInput id="ingredient-1" type="text" required shadow />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="ingredient-2">Ingredient #2</Label>
                </div>
                <TextInput id="ingredient-2" type="text" required shadow />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="ingredient-3">Ingredient #3</Label>
                </div>
                <TextInput id="ingredient-3" type="text" required shadow />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="special-order-price">Set Price</Label>
                </div>
                <TextInput
                  id="special-order-price"
                  type="text"
                  required
                  shadow
                />
              </div>
              <Button type="submit">Add New Recipe</Button>
              <Button onClick={() => setLoyaltyCreateRecipe(false)}>
                Cancel
              </Button>
            </form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Usuals;

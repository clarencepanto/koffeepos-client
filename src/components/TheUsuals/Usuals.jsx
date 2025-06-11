import { useEffect, useState } from "react";
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
} from "flowbite-react";
import {
  HiOutlineSearch,
  HiOutlineExclamationCircle,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi";
import "./Usuals.scss";
import axios from "axios";

function Usuals() {
  // search bar state
  const [searchLoyalty, setSearchLoyalty] = useState("");
  const [openModalToCreateLoyalty, setOpenModalToCreateLoyalty] =
    useState(false);

  // edit
  const [editLoyaltyInfoModal, seteditLoyaltyInfoModal] = useState(false);
  const [editLoyaltyInfo, setEditLoyaltyInfo] = useState({
    customer_name: "",
    customer_allergy: "",
    customer_phone: "",
  });

  // edit loyalty products
  const [editLoyaltyProducts, setEditLoyaltyProducts] = useState({
    id: null, // product id to PATCH
    product_name: "",
    product_ingredients: [],
    product_qty: "",
    product_price: "",
  });
  // referencing the id that is gonna be updated
  const [editingCustomerId, setEditingCustomerId] = useState(null);

  // referencing the id that is gonna be deleted
  const [deletingCustomerId, setDeletingCustomerId] = useState(null);

  // for referencing loyalty products
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  // for referencing names
  const [selectedCustomer, setSelectedCustomer] = useState("");

  // loyalty info modal
  const [openModalLoyalty, setOpenModalLoyalty] = useState(false);
  const [loyaltyDeleteRecipeModal, setLoyaltyDeleteRecipeModal] =
    useState(false);
  const [LoyaltyCreateRecipeModal, setLoyaltyCreateRecipeModal] =
    useState(false);

  const [loyaltyEditRecipeModal, setLoyaltyEditRecipeModal] = useState(false);

  // to add new loyalty and loyalty recipe
  const [newLoyaltyData, setNewLoyaltyData] = useState({
    customer_name: "",
    customer_allergy: "",
    customer_phone: "",
  });
  const [deleteLoyaltyModal, setDeleteLoyaltyModal] = useState(false);

  // get data from backend
  const [customerData, setCustomerData] = useState("");

  // new loyalty products
  const [newLoyaltyProduct, setNewLoyaltyProduct] = useState({
    product_name: "",
    product_qty: "",
    product_price: "",
    product_ingredients: [],
  });

  const [getSelectedLoyaltyProducts, setGetSelectedLoyaltyProducts] =
    useState("");

  const [getIdForProductDeletion, setGetIdForProductDeletion] = useState("");

  const [availableIngredients, setAvailableIngredients] = useState([]);

  useEffect(() => {
    const getAvailIngredients = async () => {
      const response = await axios.get("http://localhost:8080/ingredients");
      setAvailableIngredients(response.data);
    };

    getAvailIngredients();
  }, []);

  // for search functionality
  const filteredItems = customerData?.length
    ? customerData.filter(
        (data) =>
          data.customer_name
            ?.toLowerCase()
            .includes(searchLoyalty.toLowerCase()) ||
          data.customer_phone?.includes(searchLoyalty)
      )
    : [];

  // adding handle loyalty onchange
  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewLoyaltyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handleeditformchange
  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditLoyaltyInfo((prev) => ({ ...prev, [name]: value }));
  };

  // getcustomer data
  const getCustomerData = async () => {
    const response = await axios.get("http://localhost:8080/loyalcust");
    setCustomerData(response.data);
  };

  // call data upon starting
  useEffect(() => {
    getCustomerData();
  }, []);

  // handle submission for new loyalties
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/loyalcust", newLoyaltyData);
      // call again
      getCustomerData();
      setNewLoyaltyData({
        customer_name: "",
        customer_allergy: "",
        customer_phone: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  // handle delete for loyalties
  const handleDeleteLoyalty = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/loyalcust/${id}`);

      // call again
      getCustomerData();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  // puts in the recent data and tracks the changes to be send to the backend later
  const handleEditClick = (customer) => {
    setEditingCustomerId(customer.id);
    setEditLoyaltyInfo({
      customer_name: customer.customer_name,
      customer_allergy: customer.customer_allergy,
      customer_phone: customer.customer_phone,
    });
    seteditLoyaltyInfoModal(true);
  };

  // send patch request and update backend
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:8080/loyalcust/${editingCustomerId}`,
        editLoyaltyInfo
      );
      getCustomerData(); // refresh UI
      seteditLoyaltyInfoModal(false); // close modal
      setEditingCustomerId(null); // clear state
    } catch (err) {
      console.error("Edit failed:", err);
    }
  };

  // product functionality

  // get loyalty product

  // edit modal loyalty products
  const openEditModal = (product) => {
    setEditLoyaltyProducts({
      id: product.id,
      product_name: product.product_name,
      product_ingredients: Array.isArray(product.product_ingredients)
        ? product.product_ingredients
        : JSON.parse(product.product_ingredients.split(",") || "[]"), // just in case DB returns comma string
      product_qty: product.product_qty,
      product_price: product.product_price,
    });
    setLoyaltyEditRecipeModal(true);
  };

  // edit handle info change for editing recipe
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditLoyaltyProducts((prev) => ({ ...prev, [name]: value }));
  };

  const handleIngredientEditChange = (e) => {
    const { value, checked } = e.target;

    setEditLoyaltyProducts((prev) => {
      let updatedIngredients;
      if (checked) {
        updatedIngredients = [...prev.product_ingredients, value];
      } else {
        updatedIngredients = prev.product_ingredients.filter(
          (ing) => ing !== value
        );
      }

      return {
        ...prev,
        product_ingredients: updatedIngredients, // override the old list
      };
    });
  };

  // set individual customer products
  const fetchCustomerProducts = async () => {
    const res = await axios.get(
      `http://localhost:8080/customerproducts/${selectedCustomerId}`
    );
    setGetSelectedLoyaltyProducts(res.data);
  };

  // handle edit sub
  const handleEditSubmitForLoyaltySpecial = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(
        `http://localhost:8080/customerproducts/${editLoyaltyProducts.id}`,
        editLoyaltyProducts
      );
      alert("Product updated!");

      await fetchCustomerProducts();
      setLoyaltyEditRecipeModal(false);
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update product.");
    }
  };

  // for creating new loyalty product change
  const handleNewInputChange = (e) => {
    const { name, value } = e.target;
    setNewLoyaltyProduct((prev) => ({ ...prev, [name]: value }));
  };

  // for creating new loyalty product checkbox
  const handleNewIngredientToggle = (e) => {
    const { value, checked } = e.target;

    setNewLoyaltyProduct((prev) => {
      const updated = checked
        ? [...prev.product_ingredients, value]
        : prev.product_ingredients.filter((ing) => ing !== value);

      return {
        ...prev,
        product_ingredients: updated,
      };
    });
  };

  // for posting new loyalty product
  const handleNewLoyaltyProductSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:8080/customerproducts/${selectedCustomerId}`,
        newLoyaltyProduct
      );
      alert("New product created!");

      setNewLoyaltyProduct({
        product_name: "",
        product_qty: "",
        product_price: "",
        product_ingredients: [],
      });

      // individual list products
      fetchCustomerProducts();
      setLoyaltyCreateRecipeModal(false); // close modal
    } catch (err) {
      console.error("Failed to create product:", err);
      alert("Creation failed.");
    }
  };

  useEffect(() => {
    fetchCustomerProducts();
  }, [selectedCustomerId]);

  // handle delete
  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/customerproducts/${productId}`);
      alert("Product deleted!");

      await fetchCustomerProducts(); // 🔄 Refresh the list
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete product.");
    }
  };

  // add to cart
const handleAddToCart = (product) => {
  const cart = JSON.parse(sessionStorage.getItem("checkoutCart")) || {
    customer: "",
    items: [],
  };

  const newItem = {
    id: crypto.randomUUID(),
    name: product.product_name,
    quantity: Number(product.product_qty),
    price: Number(product.product_price),
  };

  const updatedCart = {
    customer: cart.customer || selectedCustomer.customer_name,
    items: [...cart.items, newItem],
  };

  sessionStorage.setItem("checkoutCart", JSON.stringify(updatedCart));
  alert("Product sent to POS!");
};

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
          onClick={() => setOpenModalToCreateLoyalty(true)}
          pill
        >
          Add Loyalty
        </Button>
      </section>

      <section className="loyalty__profile">
        {filteredItems &&
          filteredItems.map((data) => {
            return (
              <Card className="max-w-sm" key={data.id}>
                <div className="flex justify-end px-4 pt-4"></div>
                <div className="flex flex-col items-center pb-10">
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {data.customer_name}
                  </h5>
                  <p className="text-white p-1 loyalty__visits">
                    Visits: {data.visits}
                  </p>
                  <p className="text-white p-1  loyalty__contact">
                    Contact: {data.customer_phone}
                  </p>
                  <p className="text-white p-1  loyalty__allergies">
                    Food Allergies: {data.customer_allergy}
                  </p>
                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg bg-cyan-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-cyan-800"
                      onClick={() => {
                        setOpenModalLoyalty(true);
                        setSelectedCustomerId(data.id);
                        setSelectedCustomer(data);
                      }}
                    >
                      Open Loyalty
                    </a>
                  </div>
                  <div className="flex pt-5 text-4xl text-white">
                    <p
                      className="m-2 cursor-pointer"
                      onClick={() => {
                        seteditLoyaltyInfoModal(true);
                        handleEditClick(data);
                      }}
                    >
                      <HiOutlinePencil />
                    </p>
                    <p
                      className="m-2 cursor-pointer"
                      onClick={() => {
                        setDeletingCustomerId(data.id);
                        setDeleteLoyaltyModal(true);
                      }}
                    >
                      <HiOutlineTrash />
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
      </section>

      <div>
        {/* modal for adding loyalty */}
        <Modal show={openModalToCreateLoyalty} size="md" popup>
          <ModalBody>
            <form
              onSubmit={handleSubmit}
              className="flex max-w-md flex-col gap-4 p-5"
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="customer_name">Name</Label>
                </div>
                <TextInput
                  name="customer_name"
                  onChange={handleChange}
                  id="customer_name"
                  type="text"
                  placeholder="customername...."
                  value={newLoyaltyData.customer_name}
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="customer_allergy">Allergies</Label>
                </div>
                <TextInput
                  name="customer_allergy"
                  onChange={handleChange}
                  id="customer_allergy"
                  type="text"
                  value={newLoyaltyData.customer_allergy}
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="customer_phone">Contact</Label>
                </div>
                <TextInput
                  name="customer_phone"
                  onChange={handleChange}
                  id="customer_phone"
                  type="text"
                  value={newLoyaltyData.customer_phone}
                  required
                  shadow
                />
              </div>
              <Button type="submit">Add Loyalty</Button>
              <Button onClick={() => setOpenModalToCreateLoyalty(false)}>
                Cancel
              </Button>
            </form>
          </ModalBody>
        </Modal>

        {/* {edit modal for loyalty profile} */}
        <Modal show={editLoyaltyInfoModal} size="md" popup>
          <ModalBody>
            <form
              onSubmit={handleEditSubmit}
              className="flex max-w-md flex-col gap-4 p-5"
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="customer_name">Name</Label>
                </div>
                <TextInput
                  name="customer_name"
                  onChange={handleEditFormChange}
                  id="customer_name"
                  type="text"
                  placeholder="customername...."
                  value={editLoyaltyInfo.customer_name}
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="customer_allergy">Allergies</Label>
                </div>
                <TextInput
                  name="customer_allergy"
                  onChange={handleEditFormChange}
                  id="customer_allergy"
                  type="text"
                  value={editLoyaltyInfo.customer_allergy}
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="customer_phone">Contact</Label>
                </div>
                <TextInput
                  name="customer_phone"
                  onChange={handleEditFormChange}
                  id="customer_phone"
                  type="text"
                  value={editLoyaltyInfo.customer_phone}
                  required
                  shadow
                />
              </div>
              <Button type="submit">Save</Button>
              <Button onClick={() => seteditLoyaltyInfoModal(false)}>
                Cancel
              </Button>
            </form>
          </ModalBody>
        </Modal>

        {/* opens modal for loyalties info */}
        <Modal
          show={openModalLoyalty}
          onClose={() => setOpenModalLoyalty(false)}
        >
          <ModalHeader>{selectedCustomer.customer_name}</ModalHeader>
          <ModalBody>
            {getSelectedLoyaltyProducts &&
              selectedCustomerId &&
              getSelectedLoyaltyProducts.map((data) => {
                return (
                  <div className="space-y-6" key={data.id}>
                    <h2 className="text-white ">
                      Product Name: {data.product_name}
                      <div className="mb-1 mt-1">Qty:{data.product_qty}x</div>
                      <div>Price: ${data.product_price}</div>
                      <div>
                        Ingredients Used: {data.product_ingredients.join(", ")}
                      </div>
                      <div className="mt-5 mb-2 flex">
                        <HiOutlineTrash
                          className=" text-2xl cursor-pointer"
                          onClick={() => {
                            setLoyaltyDeleteRecipeModal(true);
                            setGetIdForProductDeletion(data.id);
                          }}
                        />
                        <HiOutlinePencil
                          className="ml-3 text-2xl cursor-pointer "
                          onClick={() => {
                            openEditModal(data);
                          }}
                        />
                      </div>
                    </h2>
                  </div>
                );
              })}
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setLoyaltyCreateRecipeModal(true)}>
              Add Customized Recipe
            </Button>
            <Button
              onClick={() => {
                handleAddToCart(getSelectedLoyaltyProducts);
                setOpenModalLoyalty(false);
              }}
            >
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

        {/* modal for deleting loyalty */}
        <Modal
          show={deleteLoyaltyModal}
          size="md"
          onClose={() => setDeleteLoyaltyModal(false)}
          popup
        >
          <ModalHeader />
          <ModalBody>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this Loyalty?
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="red"
                  onClick={() => {
                    handleDeleteLoyalty(deletingCustomerId);
                    setDeleteLoyaltyModal(false);
                  }}
                >
                  Yes, I'm sure
                </Button>
                <Button
                  color="alternative"
                  onClick={() => setDeleteLoyaltyModal(false)}
                >
                  No, cancel
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>

        {/* loyalty products */}

        {/* modal for creating new loyalty recipe */}
        <Modal show={LoyaltyCreateRecipeModal} size="md" popup>
          <ModalBody>
            <div className="space-y-6 pt-5">
              <form
                onSubmit={handleNewLoyaltyProductSubmit}
                className="flex max-w-md flex-col gap-4 p-5"
              >
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="specialorder_name">Name</Label>
                  </div>
                  <TextInput
                    name="product_name"
                    id="specialorder_name"
                    type="text"
                    placeholder="specialordername...."
                    onChange={handleNewInputChange}
                    value={newLoyaltyProduct.product_name}
                    required
                    shadow
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="specialorder_qty">Product Qty</Label>
                  </div>
                  <TextInput
                    type="text"
                    name="product_qty"
                    value={newLoyaltyProduct.product_qty}
                    onChange={handleNewInputChange}
                    required
                    shadow
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="special-order-price">Set Price</Label>
                  </div>
                  <TextInput
                    name="product_price"
                    id="special-order-price"
                    type="number"
                    onChange={handleNewInputChange}
                    value={newLoyaltyProduct.product_price}
                    required
                    shadow
                  />
                </div>

                {/* Ingredient Checkboxes */}
                <div>
                  <p className="mb-2 font-semibold text-white">
                    Select Ingredients:
                  </p>
                  {availableIngredients.map((ingredient) => (
                    <label
                      key={ingredient.id}
                      className="flex items-center gap-2 mb-1 text-white"
                    >
                      <input
                        type="checkbox"
                        value={ingredient.name}
                        checked={newLoyaltyProduct.product_ingredients.includes(
                          ingredient.name
                        )}
                        onChange={handleNewIngredientToggle}
                      />
                      {ingredient.name} Stock: {ingredient.stock}{" "}
                      {ingredient.unit}
                    </label>
                  ))}
                </div>
                <Button type="submit">Add New Recipe</Button>
                <Button onClick={() => setLoyaltyCreateRecipeModal(false)}>
                  Cancel
                </Button>
              </form>
            </div>
          </ModalBody>
        </Modal>

        {/* modal for deleting a product */}
        <Modal
          show={loyaltyDeleteRecipeModal}
          size="md"
          onClose={() => setLoyaltyDeleteRecipeModal(false)}
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
                <Button
                  color="red"
                  onClick={() => {
                    handleDeleteProduct(getIdForProductDeletion),
                      setLoyaltyDeleteRecipeModal(false);
                  }}
                >
                  Yes, I'm sure
                </Button>
                <Button
                  color="alternative"
                  onClick={() => setLoyaltyDeleteRecipeModal(false)}
                >
                  No, cancel
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>

        {/* {edit modal for loyalty products} */}
        <Modal show={loyaltyEditRecipeModal} size="md" popup>
          <ModalBody>
            <form
              className="flex max-w-md flex-col gap-4 p-5"
              onSubmit={handleEditSubmitForLoyaltySpecial}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="specialorder_name">Product Name</Label>
                </div>
                <TextInput
                  type="text"
                  name="product_name"
                  value={editLoyaltyProducts.product_name}
                  onChange={handleEditInputChange}
                  required
                  shadow
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="specialorder_qty">Product Qty</Label>
                </div>
                <TextInput
                  type="text"
                  name="product_qty"
                  value={editLoyaltyProducts.product_qty}
                  onChange={handleEditInputChange}
                  required
                  shadow
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="special-order-price">Product Price</Label>
                </div>
                <TextInput
                  type="number"
                  name="product_price"
                  value={editLoyaltyProducts.product_price}
                  onChange={handleEditInputChange}
                  required
                  shadow
                />
              </div>

              {/* Ingredients checkboxes */}
              <div>
                <p className="mb-2 font-semibold text-white">
                  Select Ingredients:
                </p>

                {availableIngredients.map((ingredient) => (
                  <label
                    key={ingredient.id}
                    className="flex items-center gap-2 mb-1 text-white"
                  >
                    <input
                      type="checkbox"
                      value={ingredient.name}
                      checked={editLoyaltyProducts.product_ingredients.includes(
                        ingredient.name
                      )}
                      onChange={handleIngredientEditChange}
                    />
                    {ingredient.name}
                    {console.log(
                      "Currently selected ingredients:",
                      editLoyaltyProducts.product_ingredients
                    )}
                  </label>
                ))}
              </div>

              <Button type="submit">Save</Button>
              <Button onClick={() => setLoyaltyEditRecipeModal(false)}>
                Cancel
              </Button>
            </form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}

export default Usuals;

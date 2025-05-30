import "./SummaryTable.scss";
import Navigation from "../Navigation/Navigation";
import Bargraph from "./BarGraph/Bargraph";
import {
  Card,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { useState } from "react";

function SummaryTable() {
  const [openModalSales, setOpenModalSales] = useState(false);
  const [openModalInventory, setOpenModalInventory] = useState(false);

  return (
    <div>
      <Navigation />
      <section className="bg-[#f5ecd5]/6 backdrop-blur-sm  border-white/20 rounded-xl overflow-y-scroll summarytable__monitor">
        <div className="flex flex-col">
          <Card href="#" className="summarytable__monitor__content">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Revenue Today
            </h5>
            <p className="font-normal text-5xl dark:text-gray-400">$32K</p>
          </Card>
          <Card href="#" className="summarytable__monitor__content">
            <h5
              className="text-2xl
             font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Expired Products Watchlist
            </h5>
            <p className="text-[18px] font-normal text-gray-700 dark:text-gray-400">
              Milk, Matcha Powder, Chai Powder, Oat Milk
            </p>
          </Card>
          <Card href="#" className="summarytable__monitor__content">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Customers Served
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-5xl">
              200+
            </p>
          </Card>
          <Card href="#" className="summarytable__monitor__content ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Inventory and Sales Records
            </h5>
            <p
              onClick={() => setOpenModalSales(true)}
              className="font-normal text-2xl dark:text-gray-400"
            >
              POS records
            </p>
            <p
              onClick={() => setOpenModalInventory(true)}
              className="font-normal text-2xl dark:text-gray-400"
            >
              Inventory records
            </p>
          </Card>
        </div>

        <Bargraph />
      </section>

      {/* modal for POS sales */}
      <Modal
        className="summarytable__modal"
        show={openModalSales}
        onClose={() => setOpenModalSales(false)}
      >
        <ModalHeader className="summarytable__modal__title">
          POS Sales Record
        </ModalHeader>
        <ModalBody>
          <div className="space-y-6 text-white">Sales Info</div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModalSales(false)}>Return</Button>
        </ModalFooter>
      </Modal>

      {/* modal for inventory sales */}
      <div className="summarytable-cont-modal">
        <Modal
          show={openModalInventory}
          onClose={() => setOpenModalInventory(false)}
          className="summarytable__modal"
        >
          <ModalHeader className="summarytable__modal__title">
            Inventory Sales Record
          </ModalHeader>
          <ModalBody>
            <div className="space-y-6 text-white">Inventory Sales Info</div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpenModalInventory(false)}>Return</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default SummaryTable;

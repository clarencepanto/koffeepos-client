import "./SummaryTable.scss";
import Navigation from "../Navigation/Navigation";
import Bargraph from "./BarGraph/Bargraph";
import { Card } from "flowbite-react";

function SummaryTable() {
  return (
    <div>
      <Navigation />
      <section className="bg-[#f5ecd5]/6 backdrop-blur-sm  border-white/20 rounded-xl hidden md:block min-w-245 box-border h-[80%] p-5  summarytable__monitor">
        <div className="flex justify-around w-[100%]">
          <Card href="#" className="max-w-80 ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Revenue Today
            </h5>
            <p className="font-normal text-5xl dark:text-gray-400">$32K</p>
          </Card>
          <Card href="#" className="max-w-90">
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
          <Card href="#" className="max-w-80">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Customers Served
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-5xl">
              200
            </p>
          </Card>
        </div>

        <Bargraph />
      </section>
    </div>
  );
}

export default SummaryTable;

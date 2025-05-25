import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Chart from "react-apexcharts";

function Bargraph() {
  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Products",
        data: [50, 10, 30, 100, 250, 350, 200, 240, 100],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Espresso",
          "Cappuccino",
          "Matcha Latte",
          "Americano",
          "Chai Latte",
          "Coke",
          "Blueberry Cake",
          "Chocolate Milk",
          "Flat White",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <div>
      <Card className="min-w-245 bg-[#d2b48c]  ">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center justify-center text-4xl"
        >
          Most Ordered Items Today
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    </div>
  );
}

export default Bargraph;

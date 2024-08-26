import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";

const NewCustomers = () => {
  const [type, setType] = useState(["Date"]);
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [],
      },
    ],
  });

  useEffect(() => {
    axios.get("http://localhost:2000/api/customers/new-customers", {
        params: {
          value: type,
        },
      })
      .then((response) => {
        // setData(response.data);
        // console.log(response.data);
        setData(Data(response.data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [type]);

  const HandleChange = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };

  return (
    <div>
      <select onChange={HandleChange}>
        <option value="daily">Daily</option>
        <option value="monthly">Monthly</option>
        <option value="quarterly">Quarterly</option>
        <option value="yearly">Yearly</option>
      </select>
      <Line data={data} />
      <Bar data={data} />
    </div>
  );
};

const Data = (array) => {
  return {
    labels: array.map((item) => {
      return item._id;
    }),
    datasets: [
      {
        label: "New Customers",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: array.map((item) => {
          return item.totalNewCustomer;
        }),
      },
    ],
  };
};
export default NewCustomers;

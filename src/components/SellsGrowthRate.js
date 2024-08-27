import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Line, Pie, Bubble } from "react-chartjs-2";
import Graph from "./Graph";

const SellsGrowthRate = ({API_BASE_URL}) => {
    const URL = `${API_BASE_URL}/api/orders/Growth-Rate`;
    const [type, setType] = useState(["Date"]);
    const [chart, setChart] = useState('Line');
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
    // axios.get("http://localhost:2000/api/orders/all-orders")
    axios
        .get(URL, {
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
    // console.log(e.target.value);
    setType(e.target.value);
    };

    
    const HandleChange2 = (e) => {
        // console.log(e.target.value);
        setChart(e.target.value);
    };


    return (
        <div>
          <Graph title="Total Sells Growth Rate" HandleChange={HandleChange} HandleChange2={HandleChange2} data={data} chart={chart}/>
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
        label: "Sells Growth Rate",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: array.map((item) => {
            return item.growthRate;
        }),
        },
    ],
    };
};
    
export default SellsGrowthRate;

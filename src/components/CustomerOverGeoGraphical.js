import React, { useEffect, useState } from "react";
import axios from "axios";

const CustomerOverGeoGraphical = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api-s27s.onrender.com/api/customers/geographical-distribution")
      .then((response) => {
        // setData(response.data);
        // console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Number of Customers</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => {
              return (
                  <tr key={val._id}>
                      <td>{val._id}</td>
                      <td>{val.NumberOfCustomer}</td>
                  </tr>
              )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerOverGeoGraphical;

import React, { useEffect, useState } from "react";
import axios from "axios";

const CustomerOverGeoGraphical = ({API_BASE_URL}) => {
  const [data, setData] = useState([]);
  const URL = `${API_BASE_URL}/api/customers/geographical-distribution`;
  useEffect(() => {
    axios.get(URL)
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
    <div className="flex flex-wrap h-full w-full">
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

import React from "react";
import { AiFillEye } from "react-icons/ai";

const PurchaseHistory = () => {
  return (
    <div className="h-full">
      <div className="overflow-x-auto">
        <table className="table table-zebra 	table-md">
          {/* head */}
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>#60685</th>
              <td>2021-09-30</td>
              <td> N</td>
              <td>Total Amount 6000 BDT and 1 Items</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseHistory;

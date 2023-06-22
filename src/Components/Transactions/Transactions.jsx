import React from "react";

const Transactions = () => {
  return (
    <div className="h-full text-[#616161] p-5">
      <h1 className="py-2 border-b">Wallet Balance: 0.00</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra 	table-md">
          {/* head */}
          <thead className="">
            <tr>
              <th>SL</th>
              <th>Type Of Transaction</th>
              <th>Tansaction No</th>
              <th>Date</th>
              <th>To or From</th>
              <th>Debit</th>
              <th>Credit</th>
              <th>Balance</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Customer Advance</td>
              <td> 267486</td>
              <td>30-09-2021</td>
              <td>ctgadmin@annex.com</td>
              <td>0</td>
              <td>6000</td>
              <td>6000</td>
              <td>hello </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;

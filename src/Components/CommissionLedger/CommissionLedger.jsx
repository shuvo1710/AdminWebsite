import React from "react";

const CommissionLedger = () => {
  return (
    <div className="h-full text-[#616161] p-5">
      <h1 className="py-2 border-b">Withdrawal Balance: 70.00</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra 	table-md">
          {/* head */}
          <thead className="">
            <tr>
              <th>SL</th>
              <th>Transaction No</th>
              <th>Date</th>
              <th>Debit</th>
              <th>Credit</th>
              <th>Type Of Transaction</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>#1</th>
              <td>504848</td>
              <td> 06-01-2022</td>
              <td>400</td>
              <td>500</td>
              <td>Matching Commission</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommissionLedger;

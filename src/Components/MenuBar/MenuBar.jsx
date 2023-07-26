import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'
import {
  AiFillInfoCircle,
  AiOutlineCreditCard,
  AiOutlinePoweroff,
} from 'react-icons/ai'
import { BsCartPlusFill, BsCash } from 'react-icons/bs'
import { AiOutlineGateway } from 'react-icons/ai'

const MenuBar = () => {
  return (
    <div className="pt-10 border-r bg-white">
      <div className="flex justify-center">
        <div className="avatar ">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt=""
            />
          </div>
        </div>
        {/*  */}
      </div>

      <div className=" text-center">
        <p className="mt-5">Md Shahidul Islam</p>
        <p className="mt-4">Patuakhali, Bangladesh</p>
      </div>
      <div className="divider"></div>

      {/* menu items  */}
      <div className="">
        <NavLink
          activeStyle={{ color: 'red' }}
          to="/"
          className="flex items-center gap-3 font-semibold mb-4 hover:text-primary ease-in duration-200"
        >
          <MdDashboard className="text-xl " /> <span>Account Dashboard</span>
        </NavLink>

        <NavLink
          activeStyle={{ color: 'red' }}
          to="/AccountDetails"
          className="flex items-center gap-3 font-semibold mb-4 hover:text-primary ease-in duration-200"
        >
          <AiFillInfoCircle className="text-xl " /> <span>Account Details</span>
        </NavLink>

        <NavLink
          activeStyle={{ color: 'red' }}
          to="/PurchaseHistory"
          className="flex items-center gap-3 font-semibold mb-4 hover:text-primary ease-in duration-200"
        >
          <BsCartPlusFill className="text-xl " /> <span>Purchase History</span>
        </NavLink>

        <NavLink
          activeStyle={{ color: 'red' }}
          to="/commissionWithdraw"
          className="flex items-center gap-3 font-semibold mb-4 hover:text-primary ease-in duration-200"
        >
          <AiOutlineGateway className="text-xl " />{' '}
          <span>Commission Withdraw</span>
        </NavLink>

        <NavLink
          activeStyle={{ color: 'red' }}
          to="/CommissionLedger"
          className="flex items-center gap-3 font-semibold mb-4 hover:text-primary ease-in duration-200"
        >
          <AiOutlineGateway className="text-xl " />{' '}
          <span>Commission Ledger</span>
        </NavLink>

        <NavLink
          activeStyle={{ color: 'red' }}
          to="/Transactions"
          className="flex items-center gap-3 font-semibold mb-4 hover:text-primary ease-in duration-200"
        >
          <AiOutlineCreditCard className="text-xl " /> <span>Transactions</span>
        </NavLink>

        <NavLink
          activeStyle={{ color: 'red' }}
          to="/BalanceTransfer"
          className="flex items-center gap-3 font-semibold mb-4 hover:text-primary ease-in duration-200"
        >
          <BsCash className="text-xl " /> <span>Balance Transfer</span>
        </NavLink>

        <NavLink
          to="/singin"
          className="flex items-center gap-3 font-semibold mb-4 hover:text-primary ease-in duration-200"
        >
          <AiOutlinePoweroff className="text-xl " /> <span>Logout</span>
        </NavLink>
      </div>
    </div>
  )
}

export default MenuBar

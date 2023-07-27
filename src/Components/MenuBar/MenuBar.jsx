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
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-primary navTiems' : ' navTiems'
          }
        >
          <MdDashboard className="text-xl " /> <span>Account Dashboard</span>
        </NavLink>

        <NavLink
          to="/AccountDetails"
          className={({ isActive }) =>
            isActive ? 'text-primary navTiems' : ' navTiems'
          }
        >
          <AiFillInfoCircle className="text-xl " /> <span>Account Details</span>
        </NavLink>

        <NavLink
          to="/PurchaseHistory"
          className={({ isActive }) =>
            isActive ? 'text-primary navTiems' : ' navTiems'
          }
        >
          <BsCartPlusFill className="text-xl " /> <span>Purchase History</span>
        </NavLink>

        <NavLink
          to="/commissionWithdraw"
          className={({ isActive }) =>
            isActive ? 'text-primary navTiems' : ' navTiems'
          }
        >
          <AiOutlineGateway className="text-xl " />{' '}
          <span>Commission Withdraw</span>
        </NavLink>

        <NavLink
          to="/CommissionLedger"
          className={({ isActive }) =>
            isActive ? 'text-primary navTiems' : ' navTiems'
          }
        >
          <AiOutlineGateway className="text-xl " />{' '}
          <span>Commission Ledger</span>
        </NavLink>

        <NavLink
          to="/Transactions"
          className={({ isActive }) =>
            isActive ? 'text-primary navTiems' : ' navTiems'
          }
        >
          <AiOutlineCreditCard className="text-xl " /> <span>Transactions</span>
        </NavLink>

        <NavLink
          to="/BalanceTransfer"
          className={({ isActive }) =>
            isActive ? 'text-primary navTiems' : ' navTiems'
          }
        >
          <BsCash className="text-xl " /> <span>Balance Transfer</span>
        </NavLink>

        <NavLink
          to="/singin"
          className={({ isActive }) =>
            isActive ? 'text-primary navTiems' : ' navTiems'
          }
        >
          <AiOutlinePoweroff className="text-xl " /> <span>Logout</span>
        </NavLink>
      </div>
    </div>
  )
}

export default MenuBar

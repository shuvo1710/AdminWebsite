import React, { useEffect } from 'react'
import Select from 'react-select'
import './AccountDetails.css'

const AccountDetails = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  return (
    <div className="mt-[50px]">
      <div className=" grid md:grid-cols-2 gap-10 shadow-[0_3px_3px_rgb(0,0,0,0.2)] px-8 pt-5">
        <div className="">
          <h1 className="text-xl font-bold text-[#616161] text-center mb-5">
            Account Details
          </h1>

          {/*  */}
          <from className="">
            <div className=" ">
              <div className="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="name"
                  className="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="name"
                  className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  Name *
                </label>
              </div>

              <div className="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="nid"
                  className="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="nid"
                  className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all "
                >
                  NID*
                </label>
              </div>

              <div className="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="fatherName"
                  className="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="fatherName"
                  className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  Father's Name *
                </label>
              </div>

              <div className="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="motherName"
                  className="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="motherName"
                  className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  Mother's Name *
                </label>
              </div>

              <div className="relative mb-5 inputDiv">
                <input
                  required
                  type="text"
                  id="address"
                  className="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="address"
                  className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  Address
                </label>
              </div>

              <div className="relative mb-5">
                <label
                  for="email"
                  className=" text-sm left-0 text-gray-600 cursor-text top-0 peer-focus:text-primary transition-all"
                >
                  District *
                </label>
                <select
                  type="text"
                  id="district"
                  className="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                >
                  <option selected value="">
                    District *
                  </option>
                  <option value="">Hello</option>
                  <option value="">Hello</option>
                  <option value="">Hello</option>
                </select>

                {/* <Select className=" mt-2" options={options} /> */}
                {/* <label
                  for="district"
                  className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  District *
                </label> */}
              </div>

              <div className="relative mb-10">
                <label
                  for="email"
                  className=" text-sm left-0 text-gray-600 cursor-text top-0 peer-focus:text-primary transition-all"
                >
                  Thana/Upazila *
                </label>
                <select
                  type="text"
                  id="district"
                  className="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                >
                  <option selected value="">
                    Thana/Upoz *
                  </option>
                  <option value="">Hello</option>
                  <option value="">Hello</option>
                  <option value="">Hello</option>
                </select>
              </div>

              <div className="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="email"
                  className="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="email"
                  className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  Email *
                </label>
              </div>

              <div className="flex justify-center mb-10">
                <button className="btn btn-sm btn-primary text-white ">
                  Profile Save
                </button>
              </div>
            </div>
          </from>
        </div>

        {/*  */}

        <div className="">
          <h1 className="text-xl font-bold text-[#616161] text-center mb-5">
            Password change
          </h1>

          {/*  */}
          <from className="">
            <div className=" ">
              <div className="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="currentPass"
                  className="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="currentPass"
                  className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  Current Password *
                </label>
              </div>

              <div className="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="newPass1"
                  className="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="newPass1"
                  className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  New Password *
                </label>
              </div>

              <div className="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="newPass2"
                  className="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="newPass2"
                  className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  New Password *
                </label>
              </div>

              <div className="flex justify-center mb-10">
                <button className="btn btn-sm btn-primary text-white ">
                  Change
                </button>
              </div>
            </div>
          </from>

          {/* Change Pin  */}

          <form className="my-10">
            <h1 className="text-xl font-bold text-[#616161] text-center mb-5">
              Pin change
            </h1>

            <div className=" ">
              <div className="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="currentPin"
                  className="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="currentPin"
                  className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  Current PIN *
                </label>
              </div>

              <div className="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="newPIN"
                  className="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="newPIN"
                  className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  New PIN *
                </label>
              </div>

              <div className="flex justify-center mb-10">
                <button className="btn btn-sm btn-primary text-white ">
                  Change
                </button>
              </div>
            </div>
          </form>

          {/* Photo Upload  */}

          <form className="my-10">
            <h1 className="text-xl font-bold text-[#616161] text-center mb-5">
              Upload your photo
            </h1>

            <div className=" ">
              <input
                type="file"
                className="file-input  file-input-primary w-full mb-5 "
              />
              <div className="flex justify-center mb-10">
                <button className="btn btn-sm btn-primary text-white ">
                  Change
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AccountDetails

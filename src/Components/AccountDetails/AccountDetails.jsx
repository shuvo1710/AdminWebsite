import React from "react";

const AccountDetails = () => {
  return (
    <div className="my-[50px]">
      <div className=" grid md:grid-cols-2 gap-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-8 pt-5">
        <div className="">
          <h1 className="text-xl font-bold text-[#616161] text-center mb-5">
            Account Details
          </h1>

          {/*  */}
          <from className="">
            <div class=" ">
              <div class="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="name"
                  class="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="name"
                  class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  Name *
                </label>
              </div>

              <div class="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="nid"
                  class="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="nid"
                  class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all "
                >
                  NID*
                </label>
              </div>

              <div class="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="fatherName"
                  class="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="fatherName"
                  class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  Father's Name *
                </label>
              </div>

              <div class="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="motherName"
                  class="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="motherName"
                  class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  Mother's Name *
                </label>
              </div>

              <div class="relative mb-5 inputDiv">
                <input
                  required
                  type="text"
                  id="address"
                  class="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="address"
                  class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  Address
                </label>
              </div>

              <div class="relative mb-5">
                <label
                  for="email"
                  class=" text-sm left-0 text-gray-600 cursor-text top-0 peer-focus:text-primary transition-all"
                >
                  District *
                </label>
                <select
                  type="text"
                  id="district"
                  class="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                >
                  <option selected value="">
                    District *
                  </option>
                  <option value="">Hello</option>
                  <option value="">Hello</option>
                  <option value="">Hello</option>
                </select>
                {/* <label
                  for="district"
                  class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  District *
                </label> */}
              </div>

              <div class="relative mb-10">
                <label
                  for="email"
                  class=" text-sm left-0 text-gray-600 cursor-text top-0 peer-focus:text-primary transition-all"
                >
                  Thana/Upazila *
                </label>
                <select
                  type="text"
                  id="district"
                  class="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
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

              <div class="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="email"
                  class="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="email"
                  class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
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
            <div class=" ">
              <div class="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="currentPass"
                  class="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="currentPass"
                  class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  Current Password *
                </label>
              </div>

              <div class="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="newPass1"
                  class="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="newPass1"
                  class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  New Password *
                </label>
              </div>

              <div class="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="newPass2"
                  class="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="newPass2"
                  class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
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

            <div class=" ">
              <div class="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="currentPin"
                  class="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="currentPin"
                  class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
                >
                  Current PIN *
                </label>
              </div>

              <div class="relative mb-10 inputDiv">
                <input
                  required
                  type="text"
                  id="newPIN"
                  class="border-b py-1 focus:outline-none focus:border-primary focus:border-b-2 transition-colors peer w-full"
                  autocomplete="off"
                />
                <label
                  for="newPIN"
                  class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-primary transition-all"
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

            <div class=" ">
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
  );
};

export default AccountDetails;

import React from "react";

export default function AdminForm() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className=" text-2xl pb-3">Add Product Here</h2>
      <form action="" className="flex flex-col gap-4 w-[50%]">
        <input
          type="text"
          placeholder="name"
          className="px-4 py-2 bg-white rounded "
        />

        <input
          type="number"
          placeholder="price"
          className=" px-4 py-2 bg-white rounded"
        />

        <input
          type="text"
          placeholder="category"
          className=" px-4 py-2 bg-white rounded"
        />

        <input
          type="file"
          placeholder="image"
          className=" px-4 py-2 bg-white rounded"
        />

        <button
          type="submit"
          className="bg-green-600 w-full sm:w-[170px] px-4 py-2 rounded text-white cursor-pointer 
                         transition duration-300 hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

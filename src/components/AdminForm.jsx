import React from "react";
import { useState } from "react";


export default function AdminForm({fetchProducts}) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    inStock: true,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    let val = value;

    if (name === "inStock") {
      val = value === "true"; // Converts "true"/"false" strings to boolean
    }

    if (type === "file") {
      setForm((prev) => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: val }));
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    const { name, price, category, image } = form;
    if (!name || !price || !category || !image) {
      alert("Please fill all required fields.");
      return;
    }

    const formData = new FormData();
    for (let key in form) {
      formData.append(key, form[key]);
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
        method: "POST",
        headers: {
          "x-admin-key": import.meta.env.VITE_ADMIN_KEY,
        },
        body: formData,
      });

      const result = await res.json();

      if (res.ok) {
        alert("Product added successfully!");
        fetchProducts();
        // Optional: Reset form
        setForm({
          name: "",
          price: "",
          category: "",
          inStock: true,
          image: null,
        });
      } else {
        alert("Failed to add product: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <h2 className=" text-2xl pb-3">Add Product Here</h2>
      <form
        action=""
        className="flex flex-col gap-4 w-[50%]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 bg-white rounded "
          name="name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          className=" px-4 py-2 bg-white rounded"
          name="price"
          required
          value={form.price}
          onChange={handleChange}
        />
        <select
          name="category"
          onChange={handleChange}
          value={form.category}
          className="px-4 py-2 bg-white rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="Palm Oil">Palm Oil</option>
          <option value="Coconut Oil">Coconut Oil</option>
          <option value="Palm Kernel Oil">Palm Kernel Oil</option>
        </select>

        <select
          className="px-4 py-2 bg-white rounded"
          name="inStock"
          value={form.inStock}
          onChange={handleChange}
          required
        >
          <option value="">Select Stock Status</option>
          <option value="true">In Stock</option>
          <option value="false">Out of Stock</option>
        </select>

        <input
          type="file"
          className=" px-4 py-2 bg-white rounded"
          name="image"
          accept="image/*"
          required
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-green-600 w-full sm:w-[170px] px-4 py-2 rounded text-white cursor-pointer 
                         transition duration-300 hover:scale-105"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

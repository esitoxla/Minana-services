import React, { useState, useEffect } from "react";
import ActionCell from "./ActionCell";
import AdminForm from "./AdminForm";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    price: "",
    category: "",
    inStock: true,
  });

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      console.log("API Response:", data[0]);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //update product
  // Set form data when editing
  const openEditModal = (product) => {
    setEditForm({
      _id: product.id,
      name: product.name || "",
      price: product.price || "",
      category: product.category || "",
      inStock: product.inStock ?? true,
      image: null,
    });
    setIsEditModalOpen(true);
  };

  // Handle input change
  function handleEditChange(e) {
    const { name, value, type } = e.target;
    const val =
      name === "inStock"
        ? value === "true"
        : type === "file"
        ? e.target.files[0]
        : value;

    setEditForm((prev) => ({ ...prev, [name]: val }));
  }

  async function handleUpdateProduct(e) {
    e.preventDefault();
    if (!editForm._id) return;

    const formData = new FormData();
    if (editForm.name) formData.append("name", editForm.name);
    if (editForm.price) formData.append("price", editForm.price);
    if (editForm.category) formData.append("category", editForm.category);
    if (typeof editForm.inStock === "boolean")
      formData.append("inStock", editForm.inStock);
    if (editForm.image) formData.append("image", editForm.image);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/products/${editForm._id}`,
        {
          method: "PUT",
          headers: {
            "x-admin-key": import.meta.env.VITE_ADMIN_KEY,
          },
          body: formData,
        }
      );

      const result = await res.json();

      if (res.ok) {
        setProducts((prev) =>
          prev.map((p) => (p.id === result.id ? result : p))
        );
        alert("Product updated successfully.");
        setIsEditModalOpen(false);
      } else {
        alert("Update failed: " + result.message);
      }
    } catch (error) {
      console.error("Update error:", error.message);
      alert("An error occurred.");
    }
  }

  //delete function
  async function handleDelete(id) {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/products/${id}`,
        {
          method: "DELETE",
          headers: {
            "x-admin-key": import.meta.env.VITE_ADMIN_KEY,
          },
        }
      );

      if (res.ok) {
        setProducts(products.filter((product) => product.id !== id));
      }
    } catch (error) {
      alert("Failed to delete the product. Please try again.");
      console.error("Delete error:", error.message);
    }
  }

  return (
    <>
      <div className="mt-10">
        <h2 className="text-2xl text-center mb-4">Products</h2>
        <table className="min-w-full ">
          <thead>
            <tr className=" ">
              <th className="border p-2">Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">In Stock</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td className="border p-2">{product.name}</td>
                  <td className=" border p-2">GH₵ {product.price}</td>

                  <td className="border p-2">
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </td>
                  <td className="border p-2">
                    <ActionCell
                      products={products}
                      onDelete={() => handleDelete(product.id)}
                      onEdit={() => openEditModal(product)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border p-4 text-center" colSpan="5">
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {isEditModalOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow w-full max-w-md">
              <h2 className="text-xl mb-4 text-center">Edit Product</h2>
              <form
                className="flex flex-col gap-4"
                onSubmit={handleUpdateProduct}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 border rounded"
                  value={editForm.name}
                  onChange={handleEditChange}
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="p-2 border rounded"
                  value={editForm.price}
                  onChange={handleEditChange}
                />
                <select
                  name="category"
                  className="p-2 border rounded"
                  value={editForm.category}
                  onChange={handleEditChange}
                >
                  <option value="">Select Category</option>
                  <option value="Palm Oil">Palm Oil</option>
                  <option value="Coconut Oil">Coconut Oil</option>
                  <option value="Palm Kernel Oil">Palm Kernel Oil</option>
                </select>
                <select
                  name="inStock"
                  className="p-2 border rounded"
                  value={editForm.inStock}
                  onChange={handleEditChange}
                >
                  <option value="true">In Stock</option>
                  <option value="false">Out of Stock</option>
                </select>
                <input
                  type="file"
                  name="image"
                  className="p-2 border rounded"
                  accept="image/*"
                  onChange={handleEditChange}
                />

                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
                  >
                    Update Product
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="bg-gray-300 hover:bg-gray-400 border px-2 py-1 rounded cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <AdminForm fetchProducts={fetchProducts}/>
    </>
  );
}

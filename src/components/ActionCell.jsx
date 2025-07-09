import React from 'react'
import { useState } from 'react'
import { Pencil } from '../helpers/Pencil';
import { Trash } from '../helpers/trash';

export default function ActionCell({ onDelete, onEdit}) {

    const [dropdownOpen, setDropdownOpen] = useState();
    const [modalOpen, setModalOpen] = useState();


  return (
    <div>
      <div className="relative inline-block text-left">
        {/* Action Button */}
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
        >
          Action
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg z-10">
            <button
              onClick={() => {
                setDropdownOpen(false);
                onEdit();
              }}
              className=" w-full text-left px-4 py-2 hover:bg-gray-100 flex "
            >
                <Pencil className="text-2xl"/>
              Edit
            </button>
            <button
              onClick={() => {
                setDropdownOpen(false);
                setModalOpen(true);
              }}
              className="flex items-center justify-center w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
            >
                <Trash />
              Delete
            </button>
          </div>
        )}

        {/* Confirmation Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-white/10 backdrop-blur-xs flex items-center justify-center z-20">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
              <p className="mb-4">
                Are you sure you want to delete this product?
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-1 rounded bg-gray-300 hover:bg-gray-400 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    onDelete();
                    setModalOpen(false);
                  }}
                  className="px-4 py-1 rounded bg-red-600 text-white hover:bg-red-700 cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

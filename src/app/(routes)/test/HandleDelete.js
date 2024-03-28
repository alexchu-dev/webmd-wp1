import React from 'react';
import toast from "react-hot-toast";

const HandleDelete = ({ id, onDeleteSuccess }) => {
    const handleDelete = async () => {
        const res = await fetch('/api/test', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ '_id': id }),
        });

        if (res.ok) {
            // Displaying notification when data is deleted successfully
            toast.success('Data Deleted Successfully!', {
                position: 'top-center',
                duration: 1500,
            });
            onDeleteSuccess();
        } else {
            // Displaying notification when data is not found
            toast.error('Data Not Found!', {
                position: 'top-center',
                duration: 1500,
            });
        }
    };

    return (
        <button onClick={handleDelete} className="absolute top-0 right-0 mt-2 mr-2">
        <svg
          className="h-3 w-3 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    );
};

export default HandleDelete;

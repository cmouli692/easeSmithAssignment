import React, { useState } from "react";
import "./Pagination.css"

const productsList = [
  // Sample data array of 50 items (replace this with your actual data)
  { id: 1, name: "Plant 1", price: 10 },
  { id: 2, name: "Plant 2", price: 15 },
  { id: 3, name: "Plant 3", price: 12 },
  { id: 3, name: "Plant 3", price: 12 },
  { id: 3, name: "Plant 3", price: 12 },

  { id: 3, name: "Plant 3", price: 12 },
  { id: 3, name: "Plant 3", price: 12 },

  { id: 3, name: "Plant 3", price: 12 },
  { id: 3, name: "Plant 3", price: 12 },
  { id: 3, name: "Plant 3", price: 12 },
  { id: 3, name: "Plant 3", price: 12 },

  { id: 3, name: "Plant 3", price: 12 },
  { id: 3, name: "Plant 3", price: 12 },
  { id: 3, name: "Plant 3", price: 12 },
  { id: 3, name: "Plant 3", price: 12 },
  { id: 3, name: "Plant 3", price: 12 },
  { id: 3, name: "Plant 3", price: 12 },
  { id: 3, name: "Plant 3", price: 12 },
  { id: 3, name: "Plant 3", price: 12 },

  
  { id: 3, name: "Plant 3", price: 12 },
  { id: 3, name: "Plant 3", price: 12 },
  { id: 3, name: "Plant 3", price: 12 },
  { id: 3, name: "Plant 3", price: 12 },
  
  { id: 3, name: "Plant 3", price: 12 },
  

  { id: 3, name: "Plant 3", price: 12 },
  
  
  // ... Add up to 50 items or more
];

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const itemsPerPage = 2; // Number of items to show per page

  // Calculate total number of pages
  const totalPages = Math.ceil(productsList.length / itemsPerPage);

  // Get current items to display on the current page
  const currentItems = productsList.slice(
    (currentPage - 1) * itemsPerPage,  // ((2* 2 - 2 = (2)) , 2 * 2 )
    currentPage * itemsPerPage
  );

  // Handle Page Change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {currentItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div>
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
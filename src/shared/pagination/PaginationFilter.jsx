import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationFilter = ({ totalTrips, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalTrips / 12); 

  if (totalTrips === 0 || totalTrips <= 12) {
    return null;
  }

  return (
    <Pagination className="justify-content-center">
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />
      {[...Array(totalPages)].map((_, index) => (
        <Pagination.Item
          key={index}
          active={index + 1 === currentPage}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </Pagination>
  );
};

export default PaginationFilter;

import React, { useState } from 'react'
import "./Pagination.css"

const Pagination = (props) => {
    const {productsList} = props

    const [currentPage,setCurrentPage] = useState(1)
    const itemsPerPage = 10 ; 

    const totalPages = Math.ceil(productsList.length / itemsPerPage)
    const currentItems = productsList.slice()
  return (
    <div>
      pagination
    </div>
  )
}

export default Pagination

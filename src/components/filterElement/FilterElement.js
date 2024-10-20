import React from 'react'
import "./FilterElement.css"

const FilterElement = () => {
  return (
    <div className='filter-clear-container'>
                <div className='filter-element-container'>
                    <p className='filter-text'>Filter</p>
                    <p className='filter-text'>CLEAR ALL</p>
                </div>
                <div className='filter-element-container'>
                    <p className='filter-text'>Type of Plants</p>
                    <p className='filter-text'>+</p>
                </div>
                <div className='filter-element-container'>
                    <p className='filter-text'>Price</p>
                    <p className='filter-text'>+</p>
                </div>
                <div className='filter-element-container'>
                    <p className='filter-text'>Nursery</p>
                    <p className='filter-text'>+</p>
                </div>
                <div className='filter-element-container'>
                    <p className='filter-text'>Ideal Plants Location</p>
                    <p className='filter-text'>+</p>
                </div>
                <div className='filter-element-container'>
                    <p className='filter-text'>Indoor/Outdoor</p>
                    <p className='filter-text'>+</p>
                </div>
                <div className='filter-element-container'>
                    <p className='filter-text'>Maintenance</p>
                    <p className='filter-text'>+</p>
                </div>
                <div className='filter-element-container'>
                    <p className='filter-text'>Plant Size</p>
                    <p className='filter-text'>+</p>
                </div>

                <div className='filter-element-container'>
                    <p className='filter-text'>Water Schedule</p>
                    <p className='filter-text'>+</p>
                </div>
                <div className='filter-element-container'>
                    <p className='filter-text'>Color</p>
                    <p className='filter-text'>+</p>
                </div>
                <div className='filter-element-container'>
                    <p className='filter-text'>Seasonal</p>
                    <p className='filter-text'>+</p>
                </div>
                <div className='filter-element-last-container'>
                    <p className='filter-text'>Light Efficient</p>
                    <p className='filter-text'>+</p>
                </div>
    </div>
  )
}

export default FilterElement

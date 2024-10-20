import React from 'react'
import { IoIosSearch } from "react-icons/io";

import "./Body.css"
import ScrollElement from '../scroll/ScrollElement';
import FilterElement from '../filterElement/FilterElement';
import ProductAndSortbyElement from '../productAndSortbyElement/ProductAndSortbyElement';

const Body = () => {
  return (
    <div>
      <div className='search-container'>
        <div className='search-icon-search-input-tree-container'>
           
            <IoIosSearch />   
     
            <input type='search' className='search-input' placeholder='Search Plant'/>
            <img src='image 91 (1).png' className='tree-img'/>
        </div>
        
        
      </div>
      <div className='plants-posts-button-container'>
            <button className='plants-button'>Plants</button>
            <button>Posts</button>
        </div>
        <div className='lorem-text-container'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet lacus a augue fermentum tempus. Phasellus venenatis viverra magna, nec scelerisque justo blandit nec. Donec tincidunt accumsan felis id gravida. Nam vehicula sollicitudin nisi, at convallis purus ullamcorper quis. Fusce congue, dui eget tempor pretium, dui purus malesuada lorem, ut placerat nisi nisl eu ipsum. Praesent sit amet mi ac purus ultricies hendrerit sit amet a tortor. Nullam rhoncus sagittis dictum.</p>
        </div>
        <div>
            <div className='nursery-text-container'>
                <h1>Nursery</h1>
            </div>
            <ScrollElement/>
            
        </div>
        <div className='filter-menu-short-by-btn-and-products-container'>
            <FilterElement/>
            <ProductAndSortbyElement/>
            
            
            {/* <div className='count-short-by-btn-and-products-container'>
                <div className='count-short-by-btn-container'>
                    <h1>count</h1>
                    <button>short-by</button>
                </div>
                <div>
                    <h1>products</h1>
                </div>
                <div>
                    <button>View all</button>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Body

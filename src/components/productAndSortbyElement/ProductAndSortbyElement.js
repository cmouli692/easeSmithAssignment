import React, { useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import "./ProductAndSortbyElement.css"





const ProductAndSortbyElement = () => {

    const totalProductsList = [
        {id:1,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:2,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:3,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},    
        {id:4,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:5,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:6,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:7,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:8,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:9,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:10,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:11,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:12,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:13,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:14,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:15,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:16,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},

        {id:17,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:18,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:19,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:20,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:21,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:22,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:23,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},    
        {id:24,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:25,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:26,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:27,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:28,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:29,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:30,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:31,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:32,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:33,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:34,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:35,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:36,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},

        {id:37,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:38,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:39,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
        {id:40,alt: "plant image", name : "Monsterra", desc : "Indoor Plant,Low maintenance",img : "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",noOfItems : 0 ,buyOnRent : false},
    ]

    const [currentPage,setCurrentPage] = useState(1) // current page
    const [productsList,setProductsList] = useState(totalProductsList)

    const itemsPerPage = 10 ; 

    const totalPages = Math.ceil(productsList.length/ itemsPerPage);

    const currentItems = productsList.slice((currentPage - 1) * itemsPerPage , currentPage * itemsPerPage)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const onClickMinusBtn = (id) =>{
        console.log("hi")

        const updateProductList = productsList.map((eachProduct) => {
            if(id ===eachProduct.id){
                
                return {...eachProduct, noOfItems : eachProduct.noOfItems > 0 ?  eachProduct.noOfItems - 1 : 0}
            }

            return eachProduct
        })

        setProductsList(updateProductList) // check from here product and sortby element
        
    }

    const onClickPlusBtn  = (id) => {
        const updateProductList = productsList.map((eachProduct) => {
            if(id === eachProduct.id){
                return { ...eachProduct , noOfItems : eachProduct.noOfItems + 1 }
            }
            return eachProduct
        })

        setProductsList(updateProductList)

        
    }

  return (
    <div className='count-short-by-btn-and-products-container'>
                <div className='count-short-by-btn-container'>
                    <p>{productsList.length} products</p>
                    <select>
                        <option>Srot by</option>
                    </select>
                </div>
                <div className='products-container'>
                    {/* {productsList.map */
                        currentItems.map((eachProduct) => {
                            const {id,name,alt,img,desc,noOfItems} = eachProduct
                            return(<div key={id}>
                                <div className='product-container'>
                                    <div className='heart-icon-container'>
                                        <IoMdHeartEmpty />
                                    </div>
                                    <div className='product-image-container'>
                                        <img className='product-image' src={img} alt={alt}/>
                                    </div>  
                                    <button className='view-product-btn'>VIEW PRODUCT</button>
                                </div>
                            <div>
                                <h1>{name}</h1>
                                <p>{desc}</p>
                                <div className='star-img-rating-text-container'>
                                    <img className='stars-img' src='https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__'/>
                                    <p> 4.9</p>
                                </div>
                                
                                <div className='add-to-cart-and-buy-rent-btn'>
                                    <div className='add-to-cart-btns-container'>
                                     <button className='add-to-button' onClick={()=>onClickMinusBtn(id)}>
                                        -
                                    </button>
                                    <div className='add-to-cart-text-container'>
                                        <p className='add-to-cart-text'>{noOfItems === 0 ? "Add to cart" : noOfItems}</p>
                                    </div>
                                    
                                    <button className='add-to-button' onClick={() => onClickPlusBtn(id)}>
                                        +
                                    </button></div>
                                    
                                    <button className='buy-on-rent-btn'>
                                        Buy on Rent
                                    </button>
                                </div>
                            </div> 
                            {/* <Pagination productsList={productsList}/> */}
                            </div>

                            )
                        })
                    }
                       
                    
                </div>
                <div className='pagination-container'>
              
                {/* pagination*/}
                <button onClick={() => handlePageChange(currentPage-1)} disabled={currentPage === 1 }>Previous</button>

                {/* page numbers  */}
                {Array.from({length : totalPages} ,(_, index) =>(
                    <button key={index} onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? "active" :""}>
                    
                        {index+1}
                    </button>
                ))}

                {/* next button */}
                <button onClick={() => handlePageChange(currentPage + 1 )}
                    disabled={currentPage === totalPages}
                    >
                    Next
                </button>


                </div>

                
    </div>
  )
}

export default ProductAndSortbyElement

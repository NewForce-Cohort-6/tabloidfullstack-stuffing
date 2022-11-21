import React, { useState, useEffect } from "react";
import {Category} from "./Category";
import { getAllCategories } from "../../Managers/CategoryManager";
import {Table} from "reactstrap";
import { useNavigate } from "react-router-dom";

export const CategoryList = () => {
    const navigate = useNavigate
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        getAllCategories().then ( all => setCategories(all))
    };
    useEffect(()=>{
        getCategories();
    }, []);

    return (
        <div className="m-5">
            <button className="btn btn-primary mt-3 ml-5" onClick={() => navigate("/CatForm")}>Add New Tag</button>
            
            <Table>
                <thead>
                    
                    <tr>
                        <th>
                            Category
                        </th>
                    </tr>
                    
                </thead>
                <tbody>
                    {categories.map((cat)=>(
                        <Category key={cat.id} category = {cat}/>
                    ))}
                    </tbody>
            </Table>
        </div>
    );
};

// //        <div className="container">
// <div className="row justify-content-center">
// <div className="cards-column">
//     <Table>
//     <thead>
//         <tr>
//             <th>
//                 Category
//             </th>
//         </tr>
//     </thead>
//     <tbody>
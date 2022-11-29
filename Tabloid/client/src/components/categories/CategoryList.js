import React, { useState, useEffect } from "react";
import {Category} from "./Category";
import { getAllCategories } from "../../Managers/CategoryManager";
import {Table} from "reactstrap";
import { useNavigate } from "react-router-dom";

export const CategoryList = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        getAllCategories().then ( all => setCategories(all))
    };
    useEffect(()=>{
        getCategories();
    }, []);

    return (
        <div className="m-5">
            <button className="btn btn-primary mt-3 mb-2" onClick={() => navigate("/CatForm")}>Add New Category</button>
            
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
                        <>
                        <Category key={cat.id} category = {cat}/>
                        <button className="btn btn-danger ml-3 mb-3" onClick={() => navigate(`/CatDelete/${cat.id}`)}>Delete</button>                                <button className="btn btn-primary ml-3 mb-3" onClick={() => navigate(`/CatEdit/${cat.id}`)}>Edit</button>
                        </>
                    ))}
                    </tbody>
            </Table>
        </div>
    );
};


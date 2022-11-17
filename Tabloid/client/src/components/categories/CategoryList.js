import React, { useState, useEffect } from "react";
import {Category} from "./Category";
import { getAllCategories } from "../../Managers/CategoryManager";
import {Table} from "reactstrap";

export const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        getAllCategories().then ( all => setCategories(all))
    };
    useEffect(()=>{
        getCategories();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
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
            </div>
        </div>
    );
};


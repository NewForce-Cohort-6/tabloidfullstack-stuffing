import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../Managers/CategoryManager";
import { Form, Label, Button } from "reactstrap";

export default function CatForm() {
// const CatForm = () => {
    const [newCategory, setNewCategory] = useState({
        name:""
    });

    const navigate = useNavigate();

    const saveNewCat = (e) => {
    e.preventDefault()
        const newCatToSendToApi = {
            name: newCategory
        }

        addCategory(newCatToSendToApi).then((Cat) => {
            navigate("/categories");
        });
        
    }
    return (
        <form className="m-5">
        <div className="col-md-3">
            <label htmlFor="category">Create A Category</label>
            <input type="text" onChange={(event)=>{
                setNewCategory(event.target.value);
            }} className= "form-control" id="category"/>
            <button type="submit" className="btn btn-primary mt-2" onClick={saveNewCat}>Save</button>
        </div>
        </form>

    
        );
    }
    
    // export default CatForm;
    //     const saveCategory = () => {
        //         const newC = {
            //             name: newCategory.name,
            //         }
            //         addCategory(newC).then((p) => {
    //          navigate("/categories");
    // });
    // <>
    {/* <form className="m-5">
        <div className="col-md-3">
            <label htmlFor="category">Add New Category</label>
            <input type="text" onChange={(event) => {setNewCategory(event.target.value)}} className="form-control" id="category" />
        <button type="submit" className="btn btn-primary mt-2" onClick={saveNewCat}>Save</button>
        </div>
    </form>
    </> */}
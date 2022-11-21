import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../Managers/CategoryManager";
import { Form, Label, Button } from "reactstrap";

export default function CatForm() {
// const CatForm = () => {
    const [newCategory, setNewCategory] = useState("");

    const navigate = useNavigate();

    const saveNewCat = (event) => {
        event.preventDefault()
        const newCatToSendToApi = {
            name: newCategory
        }
        addCategory(newCatToSendToApi).then((Cat) => {
            navigate("/Category");
        });
    }
    return (
        <>
        <form className="m-5">
            <div className="col-md-3">
                <label htmlFor="tag">Add New Category</label>
                <input type="text" onChange={(event) => setNewCategory(event.target.value)} className="form-control" id="tag" />
            <button type="submit" className="btn btn-primary mt-2" onClick={saveNewCat}>Save</button>
            </div>
        </form>
    </>
        

    );
}

// export default CatForm;
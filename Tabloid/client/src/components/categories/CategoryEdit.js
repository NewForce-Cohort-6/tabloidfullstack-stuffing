import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCat, getCatById } from "../../Managers/CategoryManager";
// import { Form, Label, Button } from "reactstrap";

const CatEdit = () => {
    const [thisCat, setThisCat] = useState({});

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(
        () => {
            getCatById(id)
                .then((c) => {setThisCat(c)})
        },
        []
    )
    
    const saveCatEdit = (e) => {
        e.preventDefault();
        const updatedCat = {
            name: thisCat.name,
            id: thisCat.id
        }
        editCat(updatedCat)
            .then(() => {
            navigate("/categories");
        });
    }


    return (
        <>
            <form className="m-5">
                <div className="col-md-3">
                    <label htmlFor="tag">Edit Cat <b>"{thisCat.name}?"</b></label>
                    <input type="text" value={thisCat.name} onChange={(e) => {
                        const copy = { ...thisCat }
                        copy.name = e.target.value
                        setThisCat(copy)
                    }} className="form-control" id="cat" />
                <button type="submit" className="btn btn-primary mt-2 mr-5" onClick={saveCatEdit}>Save</button>
                <a href="/categories">No, take me back </a>
                </div>
            </form>
        </>
    );
}

export default CatEdit;
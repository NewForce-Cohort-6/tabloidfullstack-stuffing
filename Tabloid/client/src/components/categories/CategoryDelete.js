import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { canIDelete, deleteCat, getCatById } from "../../Managers/CategoryManager";

const CatDelete = () => {
    const [thisCat, setThisCat] = useState({});
    const [isDeletable, setIsDeletable] = useState(false)

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(
        () => {
            getCatById(id)
                .then((c) => {setThisCat(c)})
                .then(() => canIDelete(id))
                .then(bool => setIsDeletable(bool))
        },
        []
    )

    const handleDelete = () => {
        deleteCat(thisCat.id)
            .then(() => {
                navigate("/categories")
            })
    }
    
    return (
        <>
        {
            !isDeletable
            ?
            <h1> Sorry this Category Cannot Be Deleted</h1>
            :
        <div className="m-5">
            <p>Are you sure you want to delete <b>"{thisCat.name}?"</b></p>
            <button className="btn btn-danger mr-5" onClick={handleDelete}>Delete</button>
            <a href="/categories">No, take me back to Cat Management</a>
        </div>
        }
        
        </>
    )

}

export default CatDelete;
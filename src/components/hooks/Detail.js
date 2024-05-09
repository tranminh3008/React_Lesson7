import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const url = "https://663389a1f7d50bbd9b49bc91.mockapi.io/students/" + id;
    function getData() {
        axios
            .get(url)
            .then((res) => {
                console.log(res);
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            {data && (
                <>
                    <p>age: {data.age}</p>
                </>
            )}
            <h1>id: {id}</h1>
        </div>
    );
}

export default Detail;

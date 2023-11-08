import React, { useState } from "react";

function ViewForm() {
    const [passedData] = useState(JSON.parse(window.localStorage.getItem("passedData")))
    const [dataSubmit, setDataSubmit] = useState(null)
    const handleChange = (e) => {
        const { name, value } = e.target
        setDataSubmit({ ...dataSubmit, [name]: value })
    }
    const submitChange = (e) => {
    }
    return (
        <div className="App">
            {passedData.map((data, index) => (
                <div>
                    {data.typeSelected === "Text" &&
                        <div>
                            {data.labelSelected}
                            <input id={"Text" + index} type={data.typeSelected} name={"Text" + index} onChange={handleChange} />
                        </div>
                    }
                    {data.typeSelected === "Number" &&
                        <div>
                            {data.labelSelected}
                            <input id={"number" + index} name={"number" + index} type={data.typeSelected} onChange={handleChange} />
                        </div>
                    }
                    {data.typeSelected === "Date" &&
                        <div>
                            {data.labelSelected}
                            <input id={"date" + index} name={"date" + index} type={data.typeSelected} onChange={handleChange} />
                        </div>
                    }
                    {data.typeSelected === "TextArea" &&
                        <div>
                            {data.labelSelected}
                            <textarea id={"textarea" + index} name={"textarea" + index} onChange={handleChange}
                            />
                        </div>
                    }
                    {data.typeSelected === "Select" &&
                        <div>
                            <select id={"select" + index} style={{
                                "width": "200px",
                                "padding": "10px",
                                "border": " 1px solid #ccc",
                                "border-radius": "4px;",
                                "background-color": "#fff",
                                "color": "#333",
                            }} >
                                {data && data.selectedarray.map((item) => (
                                    <option onClick={() => handleChange()} value={item}>{item}</option>))}
                            </select>
                        </div>
                    }
                </div>
            ))}
            <button onClick={() => submitChange()}>submit</button>
        </div>
    );
}

export default ViewForm;

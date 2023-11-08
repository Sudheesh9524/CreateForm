import React, { useState } from "react";

function CreateForm() {
    const [selectionList, setSelectionList] = useState(["Text", "Number", "Date", "TextArea", "Select"])
    const [checkTypeList, setCheckTypeList] = useState([])
    const [fieldsName, setFieldsName] = useState("")
    const [labelText, setLabelText] = useState("")
    const [selectedType, setSelectedType] = useState("")
    const [selectList, setSelectList] = useState("")
    window.localStorage.setItem("passedData", "")

    const popUp = () => {
        document.getElementById("popUpData").style.display = "block"
    }
    const checkType = (dataPassed) => {
        document.getElementById("labelPopUp").style.display = "block"
        setSelectedType(dataPassed)

    }
    const add = () => {
        let array = [...checkTypeList]
        let selectLists = selectList.split(',')
        var obj = {
            typeSelected: selectedType,
            labelSelected: labelText,
            fieldNameSelected: fieldsName,
            selectedarray: selectedType === "Select" ? selectLists : [],
        }
        array.push(obj)
        setCheckTypeList(array)
        document.getElementById("labelPopUp").style.display = "none"
        setFieldsName("")
        setLabelText("")
        setSelectedType("")
        setSelectList("")
    }
    const createFormPassed = () => {
        var passedData = JSON.stringify(checkTypeList)
        window.localStorage.setItem("passedData", passedData)
        window.location.href = "/view"
    }
    return (
        <div className="App">
            <div>
                <h1>Create Form</h1>
            </div>
            <div>
                <button type="button" onClick={() => popUp()}><h6>Add Field</h6></button>
            </div>
            <div id="popUpData" style={{ display: "none" }}>
                {selectionList.map((data, index) =>
                    <div>
                        <span onClick={(e) => checkType(data)}>{data}</span>
                    </div>)}
                <div id='labelPopUp' style={{ display: "none" }}>
                    <input
                        type="text"
                        id='fieldsName'
                        placeholder="Please enter field name"
                        autoComplete='off'
                        required=""
                        value={fieldsName} onChange={(e) => setFieldsName(e.target.value)}
                    />
                    <input
                        type="text"
                        id='labelText'
                        placeholder="Please enter label text"
                        autoComplete='off'
                        required=""
                        value={labelText} onChange={(e) => setLabelText(e.target.value)}
                    />
                    {selectedType && selectedType === "Select" &&
                        <input
                            type="text"
                            id='selectArray'
                            placeholder="Please enter list for the select"
                            autoComplete='off'
                            required=""
                            value={selectList} onChange={(e) => setSelectList(e.target.value)}
                        />}
                    <button onClick={() => add()}>add</button>
                </div>

            </div>

            <div>
                <button onClick={() => createFormPassed()}>Create Form</button>
            </div>
        </div>
    );
}

export default CreateForm;

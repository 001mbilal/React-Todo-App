import React from 'react';
import { useState } from 'react';

function App() {
    const [list, setList] = useState([])
    const [text, setText] = useState("")
    const [editMode, setEditMode] = useState(false);
    const [editIndex, setEditIndex] = useState()


    const addItem = () => {
        if (!text) {
            alert("Null")
            return
        }
        const tempList = [...list]
        tempList.push(text)
        setList(tempList)

        resetState()
    }

    const deleteItem = (index) => {
        const tempList = [...list]
        tempList.splice(index, 1)
        setList(tempList)

        resetState()
    }

    const editItem = (index) => {
        setText(list[index])
        setEditMode(true)
        setEditIndex(index)
    }

    const UpdateItem = () => {
        const tempList = [...list]
        tempList[editIndex] = text
        setList(tempList)

        setEditMode(false)
        resetState()
    }

    const resetState = () => {
        setText('')
        setEditMode(false)
    }

    return ( <
        div className = 'main_div' >
        <
        div className = 'center_div' >
        <
        header >
        <
        h1 > TODO LIST < /h1> <
        input type = "text"
        placeholder = 'Enter Items :'
        value = { text }
        onChange = { e => setText(e.target.value) }
        />

        {
            editMode ?
                <
                button onClick = { UpdateItem } >= < /button> :
                <
                button onClick = { addItem } > + < /button>
        } <
        h3 >
        <
        ol > {
            list.map((item, index) => {
                return <li > { item } < hr / >
                    <
                    button className = 'del_btn'
                onClick = {
                        () => deleteItem(index) } > DEL < /button>  <
                    button className = 'edit_btn'
                onClick = {
                        () => editItem(index) } > EDIT < /button>  <
                    /li>
            })
        } <
        /ol> <
        /h3>

        <
        br / >
        <
        /header> <
        /div> <
        /div>
    );
}

export default App;
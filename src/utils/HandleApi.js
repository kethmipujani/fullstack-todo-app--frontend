
import axios from 'axios'

const BASE_URL = 'http://localhost:5002';


const getAllToDo = (setToDo) => {
    axios
    .get(BASE_URL)
    .then(({data}) => {
        console.log('data --->',data);
        setToDo(data);
    })
}


const addToDo = (text, setText, setToDo) => {
    axios
    .post(`${BASE_URL}/save`,{text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err)=> console.log(err))
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
    .post(`${BASE_URL}/update`,{_id: toDoId, text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err)=> console.log(err))
}

const deleteToDo = (_id, setToDo) => {

    axios
    .delete(`${BASE_URL}/delete`,{data: {_id }} )
    .then((data) => {
        console.log(data)
        getAllToDo(setToDo)
    })
    .catch((err)=> console.log(err))
}

export {getAllToDo,addToDo,updateToDo,deleteToDo}
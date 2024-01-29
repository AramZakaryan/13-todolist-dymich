import React, {useEffect, useState} from 'react'
import axios from "axios";
import { todolistsAPI} from "../api/todolists-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolists().then(response => {
            setState(response.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.createTodolis("NewNewNew Todolist")
            .then(response => {
                    setState(response.data)
                }
            )

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.deleteTodolist("5fddaf95-806e-4e7e-922e-3695fa1b4168")
            .then(response => setState(response.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.updateTodolist("c120798c-3062-4b8a-a1c9-0de81f13d59b", "Offff Todolist")
            .then(response => setState(response.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTasks("c120798c-3062-4b8a-a1c9-0de81f13d59b")
            .then(response => {
            setState(response.data.items)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.createTask("c120798c-3062-4b8a-a1c9-0de81f13d59b", "New Task")
            .then(response => {
            setState(response.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.deleteTask("c120798c-3062-4b8a-a1c9-0de81f13d59b",
            "f831e8b1-c174-4859-8828-356e14ffe3fa")
            .then(response => {
            setState(response.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
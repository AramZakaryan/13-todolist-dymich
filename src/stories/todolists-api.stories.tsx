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
                    setState(response)
                }
            )

    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.deleteTodolist("2581286b-a29f-4847-bf6e-a393cdec03b0")
            .then(response => setState(response))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        todolistsAPI.updateTodolist("c120798c-3062-4b8a-a1c9-0de81f13d59b", "HuHuraaa Todolist")
            .then(response => setState(response))
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
            "1bfaae6a-b9d5-4e94-9fbd-e5a8a288c9d3")
            .then(response => {
            setState(response)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
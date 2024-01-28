import axios from "axios";

export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}

// type CreateTodolisResponseType = {
//     data: {
//         item: TodolistType
//     }
//     messages: string[]
//     fieldsErrors: string[]
//     resultCode: number
// }
//
// type DeleteTodolistResponseType = {
//     data: {}
//     fieldsErrors: string[]
//     messages: string[]
//     resultCode: number
// }
//
// type UpdateTodolistResponseType = {
//     data: {}
//     fieldsErrors: string[]
//     messages: string[]
//     resultCode: number
// }

type TodolistsResponseType<D> = {
    data: D
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}

// type TasksResponseTypes = {
//     error: any /////////////////////// any
//     items: TaskType[]
//     totalCount: number
// }


const config = {
    withCredentials: true,
    headers: {
        "API-KEY": "3485684c-f79f-42a9-a6c9-e22cde9c6d79"
    }
}

export const todolistsAPI = {

    getTodolists() {
        return axios.get<TodolistType[]>("https://social-network.samuraijs.com/api/1.1/todo-lists",
            config)
    },
    createTodolis(title: string) {
        return axios.post<TodolistsResponseType<{
            item: TodolistType
        }>>("https://social-network.samuraijs.com/api/1.1/todo-lists",
            {title},
            config)
    },
    deleteTodolist(todolistId: string) {
        return axios.delete<TodolistsResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            config)
    },
    updateTodolist(todolistId: string, newTitle: string) {
        return axios.put<TodolistsResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            {title: newTitle},
            config)
    },

    getTasks(todolistId: string) {
        return axios.get(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks`,
            config)
    },
    createTask(todolistId: string, taskTitle: string) {
        return axios.post(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            {title:taskTitle},
            config)
    },

}

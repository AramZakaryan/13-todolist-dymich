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

type TodolistsUniversalResponseType<D> = {
    data: D
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}


type GetTaskType = {
    id: string
    title: string
    description: null | string
    todoListId: string
    order: number
    status: number
    priority: number
    startDate: null | string
    deadline: null | string
    addedDate: string
}


type GetTasksResponseTypes = {
    items: GetTaskType []
    totalCount: number
    error: null | string
}

type TasksUniversalResponseType<D> = {
    data: D
    messages: string []
    fieldsErrors: string[]
    resultCode: number
}



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
        return axios.post<TodolistsUniversalResponseType<{
            item: TodolistType
        }>>("https://social-network.samuraijs.com/api/1.1/todo-lists",
            {title},
            config)
    },
    deleteTodolist(todolistId: string) {
        return axios.delete<TodolistsUniversalResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            config)
    },
    updateTodolist(todolistId: string, newTitle: string) {
        return axios.put<TodolistsUniversalResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            {title: newTitle},
            config)
    },

    getTasks(todolistId: string) {
        return axios.get<GetTasksResponseTypes>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks`,
            config)
    },
    createTask(todolistId: string, taskTitle: string) {
        return axios.post<TasksUniversalResponseType<GetTaskType>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks`,
            {title: taskTitle},
            config)
    },
    deleteTask(todolistId: string, taskId: string) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks/${taskId}`,
            config)
    },
    updateTask(todolistId: string, taskId: string) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks/${taskId}`,
            config)
    },

}



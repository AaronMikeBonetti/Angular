import { ITodo } from "./todo"

export interface ITodosData {
  "todos": ITodo[]
  "total": number
  "skip": number
  "limit": number
}

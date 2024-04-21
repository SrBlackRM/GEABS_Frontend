import { Image } from "./image"

export interface User{
    avatar: Image,
    name: string,
    lastName: string,
    age: number,
    email: string
}
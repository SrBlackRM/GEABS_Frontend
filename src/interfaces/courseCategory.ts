import { CourseModel } from "../models/CourseModel";

export interface CourseCategory {
    category: string,
    courses: Array<CourseModel>,
}
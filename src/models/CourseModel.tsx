export interface CourseModel {
    id: number | string,
    name: string,
    description: string,
    imgSrc: string,
    available?: boolean,
    page?: string,
}
// styles
import Banner from "../components/banner/banner";
import CourseContainerByCategory from "../components/courseContainer/CourseContainer";
import { CourseCategory } from "../interfaces/courseCategory";
import "./styles/homepage.scss"


export default function HomePage(){

    const courseFireFighter: CourseCategory = {
        category: "Bombeiros",
        courses: [
            {name: "Resgate em Altura", imgSrc: "https://www.institutosc.com.br/files/como-realizarumresgateemaltura.jpg", description: "Curso de resgate em altura"}
            ,{name: "Resgate em Espaço confinado", imgSrc: "https://www.revistaadnormas.com.br/uploads/2020/09/24.jpg", description:"Resgate em espaço confinado, curso completo"}
            ,{name: "Resgate em Espaço confinado", imgSrc: "https://www.revistaadnormas.com.br/uploads/2020/09/24.jpg", description:"Resgate em espaço confinado, curso completo"}
            ,{name: "Resgate em Espaço confinado", imgSrc: "https://www.revistaadnormas.com.br/uploads/2020/09/24.jpg", description:"Resgate em espaço confinado, curso completo"}
        ],
    }

    const courseVehicle: CourseCategory = {
        category: "Curso direção de Veículo de Resgate",
        courses: [
            {name: "Caminhão", imgSrc: "https://www.revistacaminhoneiro.com.br/uploads/img/noticias/3618/thumb-1000-0/29f2aa793662bf1416438df95a37a951.jpg", description: "Curso de resgate em altura"}
        ],
    }

    const policia: CourseCategory = {
        category: "Policia",
        courses: [
            {name: "Resgate em Altura", imgSrc: "https://www.institutosc.com.br/files/como-realizarumresgateemaltura.jpg", description: "Curso de resgate em altura"}
            ,{name: "Resgate em Espaço confinado", imgSrc: "https://www.revistaadnormas.com.br/uploads/2020/09/24.jpg", description:"Resgate em espaço confinado, curso completo"}
            ,{name: "Resgate em Espaço confinado", imgSrc: "https://www.revistaadnormas.com.br/uploads/2020/09/24.jpg", description:"Resgate em espaço confinado, curso completo"}
            ,{name: "Resgate em Espaço confinado", imgSrc: "https://www.revistaadnormas.com.br/uploads/2020/09/24.jpg", description:"Resgate em espaço confinado, curso completo"}
        ],
    }

    return(
        <section>
            <Banner />
            <CourseContainerByCategory category={courseFireFighter.category} courses={courseFireFighter.courses} />
            <CourseContainerByCategory category={courseVehicle.category} courses={courseVehicle.courses} />
            <CourseContainerByCategory category={policia.category} courses={policia.courses} /> 
            
        </section>
    );
}
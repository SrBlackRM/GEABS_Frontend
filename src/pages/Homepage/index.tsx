// styles
import Banner from "../../components/banner/banner";
import CourseContainerByCategory from "../../components/courseContainer/CourseContainer";
import { CourseCategory } from "../../interfaces/courseCategory";


export default function HomePage(){

    const courseFireFighter: CourseCategory = {
        category: "Bombeiros",
        courses: [
            {name: "Resgate em Altura", imgSrc: "https://www.institutosc.com.br/files/como-realizarumresgateemaltura.jpg", description: "Curso de resgate em altura", id: 1}
            ,{name: "Resgate em Espaço confinado", imgSrc: "https://www.revistaadnormas.com.br/uploads/2020/09/24.jpg", description:"Resgate em espaço confinado, curso completo", id: 2}
            ,{name: "Resgate em Altura", imgSrc: "https://www.institutosc.com.br/files/como-realizarumresgateemaltura.jpg", description: "Curso de resgate em altura", id: 3}
            ,{name: "Resgate em Espaço confinado", imgSrc: "https://www.revistaadnormas.com.br/uploads/2020/09/24.jpg", description:"Resgate em espaço confinado, curso completo", id: 4}
        ],
    }

    const courseVehicle: CourseCategory = {
        category: "Curso direção de Veículo de Resgate",
        courses: [
            {name: "Caminhão", imgSrc: "https://www.revistacaminhoneiro.com.br/uploads/img/noticias/3618/thumb-1000-0/29f2aa793662bf1416438df95a37a951.jpg", description: "Curso de resgate em altura", id:1}
        ],
    }

    const policia: CourseCategory = {
        category: "Policia",
        courses: [
            {name: "Resgate em Altura", imgSrc: "https://www.institutosc.com.br/files/como-realizarumresgateemaltura.jpg", description: "Curso de resgate em altura", id: 1}
            ,{name: "Resgate em Espaço confinado", imgSrc: "https://www.revistaadnormas.com.br/uploads/2020/09/24.jpg", description:"Resgate em espaço confinado, curso completo", id: 2}
            ,{name: "Resgate em Espaço confinado", imgSrc: "https://www.revistaadnormas.com.br/uploads/2020/09/24.jpg", description:"Resgate em espaço confinado, curso completo", id: 4}
            ,{name: "Resgate em Altura", imgSrc: "https://www.institutosc.com.br/files/como-realizarumresgateemaltura.jpg", description: "Curso de resgate em altura", id: 3}
            ,{name: "Resgate em Espaço confinado", imgSrc: "https://www.revistaadnormas.com.br/uploads/2020/09/24.jpg", description:"Resgate em espaço confinado, curso completo", id: 4}
            ,{name: "Resgate em Altura", imgSrc: "https://www.institutosc.com.br/files/como-realizarumresgateemaltura.jpg", description: "Curso de resgate em altura", id: 3}
            ,{name: "Caminhão", imgSrc: "https://www.revistacaminhoneiro.com.br/uploads/img/noticias/3618/thumb-1000-0/29f2aa793662bf1416438df95a37a951.jpg", description: "Curso de resgate em altura", id: 5}
            ,{name: "Resgate em Altura", imgSrc: "https://www.institutosc.com.br/files/como-realizarumresgateemaltura.jpg", description: "Curso de resgate em altura", id: 3}
            ,{name: "Resgate em Espaço confinado", imgSrc: "https://www.revistaadnormas.com.br/uploads/2020/09/24.jpg", description:"Resgate em espaço confinado, curso completo", id: 4}
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
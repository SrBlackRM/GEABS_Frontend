import "../styles/Template.scss"
import { Navbar } from "../components/navbar/navbar";
import { useEffect } from "react";
import { Footer } from "../components/footer/Footer";

interface TemplateProps{
    children: JSX.Element,
    title: string
}

export default function StandTempl({ children, title }: TemplateProps) : JSX.Element {
    // muda o titulo
    useEffect(() => {
        document.title = title
    }, []);

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
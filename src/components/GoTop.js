import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Componente para posicionar la pagina arriba
export default function GoTop() {

    const routePath = useLocation();
    
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    
    useEffect(() => {
        onTop()
    }, [routePath]);
    return null;
}
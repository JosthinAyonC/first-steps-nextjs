'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

// Para que funcione los estilos al importar el archivo debe tener la extension .module.css
import style from './ActiveLink.module.css';

interface Props {
    path: string;
    label: string;
}

export const ActiveLink = ({ path, label }: Props) => {

    // hook para obtener la ruta actual
    const pathName = usePathname();

    return (
        <Link
            className={`${style.link}
                ${path === pathName ? style['active-link'] : ''}`}
            href={path}
        >
            {label}
        </Link>
    )
}

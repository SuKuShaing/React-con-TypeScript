"use client";

import { FC, FunctionComponent, JSX, useEffect, useRef, useState } from "react";

/*
export const RandomFox1 = () => {                       // implícito
	return <img />;
};

export const RandomFox2 = (): JSX.Element => {          // explícito y tipamos lo que retorna <-- este es lo más recomendable
	return <img />;
};

export const RandomFox3: FunctionComponent = () => {    // explícito y tipamos la constante
	return <img />;
};

export const RandomFox4: FC = () => {                   // explícito y tipamos la constante con una abreviatura
	return <img />;
};
*/

type Props = { image: string; alt: string };

export const RandomFox = ({ image, alt }: Props): JSX.Element => {
	const node = useRef<HTMLImageElement>(null); // HTMLImageElement, se le pasa el tipo de donde ser usará
	const [src, setSrc] = useState<string>("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");
	// "data:image/svg+xml;base64,PHN2ZyB3aWR0aD..." es un placeholder (una imagen transparente) para que se vea el componente mientras se carga la imagen, más abajo se le da color a la imagen
	
	useEffect(()=>{
		// nuevo observador
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {	// se itera por cada nodo que tenga entries
				// onIntersection -> console.log
				if (entry.isIntersecting) {
					console.log("Ya se ve el elemento");
					setSrc(image);
				}
			});
		});

		// observe node
		if (node.current) {
			observer.observe(node.current);	// aquí se observa el nodo con el observer que ya tiene cargado el código a ejecutar
		}

		// desconectar el observador
		return () => observer.disconnect(); // sí se elimina del DOM, se desconecta el observer para ahorrar recursos
	}, [image]);


	return (
		<img
			ref={node}
			// ref={node} es una referencia directa al elemento DOM del <img>
			src={src}
			width={512}
			height="auto"
			alt={alt}
			className="rounded-xl m-4 bg-gray-300"
		/>
	);
};

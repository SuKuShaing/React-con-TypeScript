"use client";
/**
 * Desde la versión 13+ Next.js por defecto usa server side rendering,
 * es decir, el servidor renderiza la página y luego el cliente la renderiza,
 * dado que useState es un hook que solo se puede usar en el cliente,
 * debemos usar "use client" para que el servidor no renderice la página,
 * sino que el cliente la renderice.
 */

import { LazyImage } from "@/components/RandomFox";
import { RandomFoxLazy } from "@/components/RandomFoxLazy";
import { MouseEventHandler, useState } from "react";
import { random as randomLodash } from "lodash";

// const random = (): number => {
// 	return Math.floor(Math.random() * 124) + 1;
// };
const random = () => randomLodash(1, 124);


const urlFox = `https://randomfox.ca/images/${random()}.jpg`;

// Genera un id aleatorio para la imagen
const generateId = (): string => Math.random().toString(36).substring(2, 9);
/**
 * Math.random() → 0.123456789
 * .toString(36) → "0.4fzyo3mry"	convierte el número decimal a texto usando base 36
 * .substring(2, 9) → "4fzyo3m"		Extrae el texto de la posición 2 a la 9
 */

/**
 * Un array se puede escribir así Array<string> o string[], las dos son igualmente validas
 * con objetos sería Array<{...}> o {...}[], las dos son validas
 */


// type ImageItem = { id: string; url: string };
// esto se movió a app.d.ts

export default function Home() {
	const [images, setImages] = useState<Array<IFoxImageItem>>([]);

	const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
		const newImageItem: IFoxImageItem = {
			id: generateId(),
			url: `https://randomfox.ca/images/${random()}.jpg`,
		};

		setImages([...images, newImageItem]);
	};

	return (
		<>
			<main className="flex flex-col items-center">
				<h1 className="text-4xl font-bold">Zorritos Platzi</h1>
				<button className="bg-green-700 text-white py-2 px-4 rounded-xl mt-4 hover:bg-green-800 active:bg-green-900" onClick={addNewFox}>Añadir zorro</button>
				{images.map(({ id, url }) => (
					<div key={id} className="p-2">
						<LazyImage
							src={url}
							width={512}
							height="auto"
							alt="Un lindo zorrito"
							title="Un lindo zorrito title"
							onClick={() => console.log(`Click en la imagen ${id}`)}
						/>
						{/* <RandomFoxLazy image={url} alt="Un lindo zorrito" /> */}
					</div>
				))}
			</main>
			<footer></footer>
		</>
	);
}

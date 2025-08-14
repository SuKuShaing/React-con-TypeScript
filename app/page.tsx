"use client";
/**
 * Desde la versión 13+ Next.js por defecto usa server side rendering,
 * es decir, el servidor renderiza la página y luego el cliente la renderiza,
 * dado que useState es un hook que solo se puede usar en el cliente,
 * debemos usar "use client" para que el servidor no renderice la página,
 * sino que el cliente la renderice.
 */

import { RandomFox } from "@/components/RandomFox";
import { MouseEventHandler, useState } from "react";

const random = (): number => {
	return Math.floor(Math.random() * 124) + 1;
};
const urlFox = `https://randomfox.ca/images/${random()}.jpg`;

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

type ImageItem = { id: string; url: string };

export default function Home() {
	const [images, setImages] = useState<Array<ImageItem>>([]);

	const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
		const newImageItem: ImageItem = {
			id: generateId(),
			url: `https://randomfox.ca/images/${random()}.jpg`,
		};

		setImages([
			...images,
			newImageItem,
		])
	};

	return (
		<>
			<main className="flex flex-col items-center">
				<h1 className="text-4xl font-bold">Zorritos Platzi</h1>
				<button onClick={addNewFox}>Añadir zorro</button>
				{images.map(({ id, url }) => (
					<div key={id} className="p-2">
						<RandomFox image={url} alt="Un lindo zorrito" />
					</div>
				))}
			</main>
			<footer></footer>
		</>
	);
}

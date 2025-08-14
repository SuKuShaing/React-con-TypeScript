"use client";
/**
 * Desde la versión 13+ Next.js por defecto usa server side rendering,
 * es decir, el servidor renderiza la página y luego el cliente la renderiza,
 * dado que useState es un hook que solo se puede usar en el cliente,
 * debemos usar "use client" para que el servidor no renderice la página,
 * sino que el cliente la renderice.
 */

import { RandomFox } from "@/components/RandomFox";
import { useState } from "react";

const random = (): number => {
	return Math.floor(Math.random() * 124) + 1;
};
const urlFox = `https://randomfox.ca/images/${random()}.jpg`;

export default function Home() {
	const [images, setImages] = useState<string[]>([
		`https://randomfox.ca/images/${random()}.jpg`,
		`https://randomfox.ca/images/${random()}.jpg`,
		`https://randomfox.ca/images/${random()}.jpg`,
		`https://randomfox.ca/images/${random()}.jpg`,
		`https://randomfox.ca/images/${random()}.jpg`,
		`https://randomfox.ca/images/${random()}.jpg`,
		`https://randomfox.ca/images/${random()}.jpg`,
	]);

	return (
		<>
			<main className="flex flex-col items-center">
				<h1 className="text-4xl font-bold">Zorritos Platzi</h1>
				{images.map((image, index) => (
					<div key={index} className="p-2">
						<RandomFox image={image} alt="Un lindo zorrito" />
					</div>
				))}
			</main>
			<footer></footer>
		</>
	);
}

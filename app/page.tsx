import { RandomFox } from "@/components/RandomFox";
import Image from "next/image";

export default function Home() {

	const random = (): number => {
		return Math.floor(Math.random() * 124) + 1
	};

	const urlFox = `https://randomfox.ca/images/${random()}.jpg`;

	return (
		// <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
		// 	<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
		// 		<h1>Hello, Platzi</h1>
		// 	</main>
		// 	<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
		// </div>
		<>
			<main className="flex flex-col items-center">
				<h1 className="text-4xl font-bold">Zorritos Platzi</h1>
				<RandomFox image={urlFox} alt="Un lindo zorrito" />
			</main>
			<footer></footer>
		</>
	);
}

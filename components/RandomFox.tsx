import { FC, FunctionComponent, JSX } from "react";

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




type Props = { image: string; alt: string };

export const RandomFox = ({ image, alt }: Props): JSX.Element => {
	return (
		<img
			src={image}
			width={512}
			height="auto"
			alt={alt}
			className="rounded-xl m-4"
		/>
	);
};

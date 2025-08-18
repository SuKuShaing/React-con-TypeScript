"use client";

import { FC, FunctionComponent, JSX, useEffect, useRef, useState } from "react";

/**
 * Este código es lo mismo que RandomFox.tsx, pero con el atributo loading="lazy" y sin tanto código
 */

type Props = { image: string; alt: string };

export const RandomFoxLazy = ({ image, alt }: Props): JSX.Element => {
	return (
		<img
			src={image}
			width={512}
			height="auto"
			alt={alt}
			className="rounded-xl m-4 bg-gray-300"
			loading="lazy"
		/>
	);
};

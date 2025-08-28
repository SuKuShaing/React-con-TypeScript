type Options = {
    callback?: () => void;
    props: Record<string | number | boolean | undefined>;
}

interface Window {
    // Esto extiende al objeto window y le añade el método plausible
	plausible: (event: "add_fox" | "remove_fox", options?: Options) => void;
}
// Déclaration TypeScript pour le web component model-viewer de Google
declare namespace JSX {
    interface IntrinsicElements {
        'model-viewer': React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & {
                src?: string;
                alt?: string;
                'auto-rotate'?: boolean;
                'camera-controls'?: boolean;
                poster?: string;
                style?: React.CSSProperties;
                className?: string;
            },
            HTMLElement
        >;
    }
}

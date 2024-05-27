import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M446.34 433.21l-62.35-137.6c4.44-11.43 8.32-14.17 22.34-28.19a44.715 44.715 0 0 0 11.57-43.18c-8.29-30.95-8.3-26.65 0-57.62a44.721 44.721 0 0 0-11.57-43.18c-22.68-22.7-20.52-18.94-28.82-49.92a44.68 44.68 0 0 0-31.61-31.61c-30.96-8.29-27.22-6.13-49.9-28.81a44.714 44.714 0 0 0-43.19-11.58c-30.87 8.27-26.69 8.29-57.62 0A44.72 44.72 0 0 0 152 13.1c-22.66 22.66-18.93 20.51-49.9 28.81a44.68 44.68 0 0 0-31.61 31.61c-8.29 30.96-6.13 27.22-28.81 49.9-11.29 11.29-15.71 27.76-11.57 43.18 8.29 30.95 8.3 26.65 0 57.62a44.715 44.715 0 0 0 11.57 43.18c15.1 15.11 18.02 17.06 22.34 28.19L1.66 433.21c-5.96 13.15 4.85 27.44 20.45 27.44.29 0 .59-.01.88-.02l72.86-2.51 50.13 47.65C150.45 510 156.26 512 162 512c8.53 0 16.92-4.39 20.55-12.4L224 408.13l41.45 91.47c3.63 8.01 12.02 12.4 20.55 12.4 5.75 0 11.56-2 16.01-6.23l50.13-47.65 72.86 2.51c.3.01.59.02.88.02 15.6-.01 26.42-14.29 20.46-27.44zM153.73 446.9l-39.4-37.44-49.99 1.72 29.72-65.59c2.59 1.28 5.18 2.57 8.04 3.34 25.14 6.74 26.79 5.7 43.06 21.97 8.63 8.63 20.07 13.1 31.63 13.1 1.95 0 3.87-.55 5.81-.8l-28.87 63.7zm23.55-111.76c-22.02-22.08-33.74-24.8-60.92-32.09-11.34-42.3-17.04-45.88-39.4-68.24 11.51-42.93 7.89-49.38 0-78.79 30.96-30.96 31.22-37.69 39.41-68.24 29.09-7.78 37.07-8.22 68.25-39.4 42.62 11.42 49.19 7.94 78.79 0 21.29 21.29 25.65 27.98 68.24 39.4 11.34 42.3 17.04 45.88 39.4 68.25-11.33 42.3-8.19 48.26 0 78.81-21.29 21.29-27.98 25.66-39.4 68.25-26.27 7.04-38.28 9.44-60.93 32.09-31.14-18.18-67.02-15.45-93.44-.04zm176.51 75.01l-20.12-.69-39.4 37.44-28.87-63.7c1.94.26 3.86.8 5.81.8 11.55 0 23-4.47 31.63-13.1 16.41-16.41 17.81-15.2 43.06-21.97 2.85-.76 5.44-2.06 8.04-3.34l29.72 65.58-29.87-1.02zM320 192c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zm-96 48c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"/>
        </svg>
    )
}

export default Icon

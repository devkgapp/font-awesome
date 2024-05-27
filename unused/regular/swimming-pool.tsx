import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M624 432h-16c-26.04 0-45.8-8.42-56.09-17.9-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C461.8 423.58 442.04 432 416 432s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C269.8 423.58 250.04 432 224 432s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C77.8 423.58 58.04 432 32 432H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h16c38.62 0 72.72-12.19 96-31.84 23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84h16c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-408-32.63V288h208v111.37c14.22-1.43 23.4-6.04 26.39-8.79 6.79-6.26 14.09-10.98 21.61-14.67V120c0-22.06 17.94-40 40-40s40 17.94 40 40v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24c0-48.53-39.47-88-88-88s-88 39.47-88 88v120H216V120c0-22.06 17.94-40 40-40s40 17.94 40 40v24c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-24c0-48.53-39.47-88-88-88s-88 39.47-88 88v255.9c7.52 3.69 14.82 8.41 21.61 14.67 2.98 2.76 12.17 7.38 26.39 8.8z"/>
        </svg>
    )
}

export default Icon

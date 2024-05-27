import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M80 336h336c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16zm544-48H496c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zM208 464H80c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm416 0H288c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h336c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-48-56v-16c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h544c8.8 0 16-7.2 16-16zM194.7 203.5l-17.6-91.2 91 17.6L320 53l51.9 76.9 91-17.6-17.6 91.1 54 36.6h73.4c-3-7.2-7.8-13.6-14.4-18.1l-59.8-40.5 13.7-71c2.6-13.2-1.6-26.8-11.1-36.4-9.6-9.5-23.2-13.7-36.2-11.1L394 76.6l-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7c-13.3-2.6-26.8 1.6-36.3 11.1-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5c-6.6 4.5-11.4 10.9-14.4 18.1h73.4l53.8-36.4zm22.9 36.5h49c6.9-23 28.1-40 53.4-40s46.5 17 53.4 40h49c-7.8-49.7-50.5-88-102.4-88s-94.6 38.3-102.4 88z"/>
        </svg>
    )
}

export default Icon

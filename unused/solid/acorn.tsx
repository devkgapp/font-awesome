import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M175.11 487.55L224 512l48.89-24.45C360.6 443.7 416 354.06 416 256H32c0 98.06 55.4 187.7 143.11 231.55zM352 64H251.5c3.4-9.4 8.47-18.18 15.16-26.04 5.56-6.52 5.31-15.91-.62-21.86L254.69 4.78c-3.12-3.16-7.72-5.14-11.97-4.72-4.38.14-8.5 2.08-11.31 5.3-14.75 16.8-24.55 37.06-29.39 58.65H96c-53.02 0-96 42.98-96 96v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32C448 106.98 405.02 64 352 64z"/>
        </svg>
    )
}

export default Icon
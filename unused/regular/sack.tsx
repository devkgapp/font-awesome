import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M326 115.91l55.4-81.18A24 24 0 0 0 360 0H152a24 24 0 0 0-21.47 34.73L186 115.92C-9.82 235.66.08 392.05.08 412c0 55.23 49.11 100 109.69 100h292.49c60.57 0 109.68-44.77 109.68-100 0-19.59 8.8-177-185.94-296.09zM314.28 48l-38.22 56h-40.12l-38.22-56zm149.66 364c0 28.67-27.67 52-61.68 52H109.77c-34 0-61.68-23.33-61.68-52-.82-81 32.63-175.45 170.91-260h74.08c137.58 84.18 171.53 178.93 170.86 260z"/>
        </svg>
    )
}

export default Icon

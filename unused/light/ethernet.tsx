import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M496 192h-48v-48c0-8.8-7.2-16-16-16h-48V80c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v48H80c-8.8 0-16 7.2-16 16v48H16c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16zm-16 224h-64V288h-32v128h-64V288h-32v128h-64V288h-32v128h-64V288H96v128H32V224h64v-64h64V96h192v64h64v64h64v192z"/>
        </svg>
    )
}

export default Icon

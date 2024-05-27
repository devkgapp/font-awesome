import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M488 31H24C10.7 31 0 43 0 58v74c0 15 10.7 27 24 27h464c13.3 0 24-12 24-27V58c0-15-10.7-27-24-27zm-184 80H48V79h256v32zm160 0H352V79h112v32zm24 240H24c-13.3 0-24 12-24 27v74c0 15 10.7 27 24 27h464c13.3 0 24-12 24-27v-74c0-15-10.7-27-24-27zm-248 80H48v-32h192v32zm224 0H288v-32h176v32zm24-240H24c-13.3 0-24 12-24 27v74c0 15 10.7 27 24 27h464c13.3 0 24-12 24-27v-74c0-15-10.7-27-24-27zm-376 80H48v-32h64v32zm352 0H160v-32h304v32z"/>
        </svg>
    )
}

export default Icon

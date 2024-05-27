import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 288 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M200 464h-32V349.4c72.7-12.4 126.3-79.5 119.4-156.7l-16-178.1C270.7 6.3 263.9 0 255.7 0H32.3c-8.2 0-15 6.3-15.7 14.6L.6 192.7C-6.3 269.9 47.3 337 120 349.4V464H88.1c-37.2 0-50 48-32 48h175.8c18.1 0 5.2-48-31.9-48zM72.6 272c-18.5-20.6-27.4-47.3-24.9-75L61.1 48h61.7l26.6 38L80 130l98.7 94-40.1-82L208 98l-24.8-50H227l13.3 149c2.5 27.8-6.4 54.4-24.9 75s-43.9 32-71.4 32-52.9-11.3-71.4-32z"/>
        </svg>
    )
}

export default Icon

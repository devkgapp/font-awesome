import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M0 436V76c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v360c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm96-218.9v77.7c0 8.8 7.2 16 16 16h144v93.9c0 7.1 8.6 10.7 13.6 5.7l141.6-143.1c6.3-6.3 6.3-16.4 0-22.7l-141.6-143c-5-5-13.6-1.5-13.6 5.7v93.9H112c-8.8-.1-16 7.1-16 15.9m-32 0c0-26.5 21.5-48 48-48h112v-61.9c0-35.6 43.1-53.4 68.2-28.3L433.9 222c18.8 18.8 18.8 49.2 0 68L292.2 433.1c-25.2 25.2-68.2 7.2-68.2-28.3v-61.9H112c-26.5 0-48-21.5-48-48v-77.8z"/>
        </svg>
    )
}

export default Icon
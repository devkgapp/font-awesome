import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M311.16 218.53L37.47 81.69c-7.9-3.95-17.52-.75-21.47 7.16L1.69 117.48c-3.95 7.9-.75 17.51 7.16 21.46L242.96 256 8.85 373.06c-7.9 3.95-11.11 13.56-7.16 21.46L16 423.15c3.95 7.9 13.56 11.11 21.47 7.16l273.68-136.84c5.42-2.71 8.84-8.25 8.84-14.31v-46.31c.01-6.07-3.41-11.61-8.83-14.32z"/>
        </svg>
    )
}

export default Icon

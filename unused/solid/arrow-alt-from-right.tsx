import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M448 88v336c0 13.3-10.7 24-24 24h-24c-13.3 0-24-10.7-24-24V88c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24zM328 192H192v-87.7c0-17.8-21.5-26.7-34.1-14.1L5.7 242.3c-7.5 7.5-7.5 19.8 0 27.3l152.2 152.2c12.6 12.6 34.1 3.7 34.1-14.1V320h136c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24z"/>
        </svg>
    )
}

export default Icon
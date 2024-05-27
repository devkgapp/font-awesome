import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M154.2 390.6c6.1-10.2 9.8-21.9 9.8-34.6 0-37.5-30.5-68-68-68s-68 30.5-68 68c0 12.7 3.7 24.4 9.8 34.6C15.1 405.1 0 430.4 0 459.2v14.4C0 494.8 17.2 512 38.4 512h115.2c21.2 0 38.4-17.2 38.4-38.4v-14.4c0-28.8-15.1-54.1-37.8-68.6zM96 336c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zm48 128H48v-4.8c0-18.5 15.1-33.6 33.6-33.6h28.8c18.5 0 33.6 15.1 33.6 33.6v4.8zm10.2-361.4c6.1-10.2 9.8-21.9 9.8-34.6 0-37.5-30.5-68-68-68S28 30.5 28 68c0 12.7 3.7 24.4 9.8 34.6C15.1 117.1 0 142.4 0 171.2v14.4C0 206.8 17.2 224 38.4 224h115.2c21.2 0 38.4-17.2 38.4-38.4v-14.4c0-28.8-15.1-54.1-37.8-68.6zM96 48c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zm48 128H48v-4.8c0-18.5 15.1-33.6 33.6-33.6h28.8c18.5 0 33.6 15.1 33.6 33.6v4.8zM616 32H248c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24h368c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24zm-24 112h-80V80h80v64zm24 176H248c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24h368c13.3 0 24-10.7 24-24V344c0-13.3-10.7-24-24-24zm-24 112H352v-64h240v64z"/>
        </svg>
    )
}

export default Icon
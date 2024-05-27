import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M576 196.6V128c0-53-43-96-96-96H160c-53 0-96 43-96 96v68.6C29.4 207.3 3.1 236.9.3 273-2 302 9.9 329.5 32 347.6V440c0 22.1 17.9 40 40 40h88c4 0 30.2-.9 31.9-32h256.2c1.4 30.8 28 32 31.9 32h88c22.1 0 40-17.9 40-40v-92.4c22-18.1 34-45.5 31.7-74.6-2.8-36.1-29.1-65.7-63.7-76.4zM144 432H80V321.3l-11.9-7C54.6 306.5 47 292 48.2 276.7 49.7 256.5 69.4 240 92 240h12c22.1 0 40 17.9 40 40v152zm304-128v96H192v-96h256zm3.7-48H188.2c-9.8-34.3-39.7-59.8-76.2-63.2V128c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v64.8c-36.6 3.4-66.5 28.9-76.3 63.2zm120.2 58.4l-11.9 7V432h-64V280c0-22.1 17.9-40 40-40h12c22.6 0 42.3 16.5 43.9 36.8 1.1 15.3-6.5 29.7-20 37.6z"/>
        </svg>
    )
}

export default Icon
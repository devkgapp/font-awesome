import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M528 352H352V240c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16zM304 464H144v-64h160v64zm0-128H144v-64h160v64zm192 128H352v-64h144v64zm101.9-353.9L346.3 5.3c-17-7-35.7-7.1-52.6 0L42.1 110.1C16.5 120.7 0 145.5 0 173.2V496c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V173.2c0-8.3 4.9-15.7 12.5-18.8L312.2 49.6c5.1-2.1 10.6-2.1 15.7 0l251.6 104.8c7.6 3.2 12.5 10.6 12.5 18.8V496c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V173.2c0-27.7-16.5-52.5-42.1-63.1z"/>
        </svg>
    )
}

export default Icon

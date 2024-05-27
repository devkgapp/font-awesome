import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 544 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M529 296.8l-111.5-193C386.8 50.4 318.6 32.2 265.3 63c-21.2 12.3-36.6 30.5-45.8 51.3C206.4 67 163.5 32 112 32 50.1 32 0 82.1 0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V214c.2.4.3.8.5 1.2l111.5 193c30.8 53.3 98.9 71.6 152.3 40.8s71.5-98.9 40.7-152.2zM176 256H48V144c0-84.7 128-84.7 128 0v112zm89.9-64.7c-42.1-73 68.2-136.7 110.3-63.7l43.8 75.8-110.3 63.7-43.8-75.8z"/>
        </svg>
    )
}

export default Icon

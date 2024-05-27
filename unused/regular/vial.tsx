import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 480 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M477.7 186.1L309.9 18.3c-1.6-1.6-3.6-2.3-5.7-2.3-2 0-4.1.8-5.7 2.3l-22.3 22.3c-3.1 3.1-3.1 8.2 0 11.3L287.5 63 30.1 320.4c-40.1 40.1-40.1 105.4 0 145.5 40.1 40 105.3 40.1 145.5 0L433 208.5l11.1 11.1c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l22.3-22.3c3-3 3-8.1-.1-11.2zM141.6 432c-21.3 21.3-56.1 21.5-77.6 0-21.4-21.4-21.4-56.2 0-77.6l50.4-50.4h155.2l-128 128zm176-176H162.4L321 97.4l77.6 77.6-81 81z"/>
        </svg>
    )
}

export default Icon

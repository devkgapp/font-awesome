import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M622.3 271.1l-115.2-45c-3.5-1.4-7.3-2.1-11.1-2.1s-7.5.7-11.1 2.1l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 3.5 1.4 7.3 2.1 11.1 2.1s7.5-.7 11.1-2.1C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM480 472c-48.2-26.8-94.6-87.6-96-172.1l96-37.5V472zm16.6 8.1c-.1 0-.2-.1-.2-.1h.5c-.2 0-.3.1-.3.1zm15.4-7.6V262.4l96 37.5c-1.5 94.8-57.1 150.2-96 172.6zM48 480c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 2.6 0 5 .6 7.5.8-.7-8.1-1.1-16.3-1.1-24.8 0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-10.3-8.2-20.2-17.6-29.7-28H48zm176-224c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"/>
        </svg>
    )
}

export default Icon

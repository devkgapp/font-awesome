import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 336c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zM224 72c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm287.3 75.5l-6.3-14.7c-1.7-4.1-6.4-5.9-10.5-4.2l-46.5 20V104c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v58.3l-53.4 22.9c-4.6-8.6-9.8-16.9-16.4-24.2 10.4-16.7 15.8-35.4 15.8-55C362 47.5 314.4 0 256 0S150 47.5 150 106c0 19.5 5.4 38.3 15.8 55-6.6 7.4-11.8 15.6-16.4 24.2L96 162.3V104c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v44.6l-46.5-19.9c-4.1-1.7-8.8.1-10.5 4.2L.7 147.6c-1.7 4.1.1 8.8 4.2 10.5l133.3 57.1c-1.9 8.4-3.2 17-3.2 25.8 0 7.2.8 14.5 2.4 22.4-25.8 29-39.9 66-39.9 105.1 0 54.2 27.6 104 73.8 133.4 10.5 6.6 23.6 10.1 37.9 10.1h93c15.8 0 31-4.8 44-13.8 51.8-35.9 76.9-96.8 65.6-159.1-5.1-28.1-17.9-54.1-37.2-75.8 1.6-7.9 2.4-15.1 2.4-22.3 0-8.8-1.3-17.4-3.2-25.8l133.3-57.1c4.1-1.8 6-6.5 4.2-10.6zm-131 197.3c9 49.8-11 98.5-52.4 127.1-7.6 5.3-16.6 8.1-25.8 8.1h-93c-5.7 0-14-.9-20.8-5.2-36.9-23.4-58.9-63.2-58.9-106.3 0-13.3-.5-51.6 43.3-95.7-5.8-21.5-5.8-25.5-5.8-31.8 0-25.5 10.7-49 30.2-66.3l11.5-10.2-9.7-11.9c-11.2-13.6-17-29.7-17-46.6 0-40.8 33.2-74 74-74s74 33.2 74 74c0 16.9-5.9 33-17 46.6l-9.7 11.9 11.5 10.2C334.2 192 345 215.5 345 241c0 6.6-.3 11.1-5.8 31.7 37.1 37.1 39.9 65.2 41.1 72.1zM256 272c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm32-200c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-32 136c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0-96c-8.8 0-16 7.2-16 16s16 32 16 32 16-23.2 16-32-7.2-16-16-16z"/>
        </svg>
    )
}

export default Icon

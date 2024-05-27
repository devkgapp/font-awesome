import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-33.6c5.4-15.1 8.8-31.1 8.8-48 0-6.6-.7-13.1-1.6-19.4C397.1 149 416 139 416 128c0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8C299.1 4.3 289.7 0 280.1 0c-4.8 0-9.7 1.1-14.3 3.4C236 18.3 233.5 20.5 224 20.5s-12.3-2.4-41.9-17.2c-4.6-2.3-9.4-3.4-14.3-3.4-9.6 0-18.9 4.3-25.2 12.2-13.5 17-31.4 50-40.6 82.8-42.7 8-70 19.8-70 33.1 0 11 18.9 21 49.6 28.6-1 6.4-1.6 12.8-1.6 19.4 0 16.9 3.5 32.9 8.8 48H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM173 52.5c16.2 8.1 29 16 51 16 21.8 0 34.8-7.9 51-16 19 30.4 25.7 59.2 27.7 66.2-21.8 2.4-48.1 3.9-78.7 3.9s-56.8-1.6-78.7-3.9c2-7.1 8.7-35.8 27.7-66.2zM183.5 464H48v-41.6c0-30.8 16.2-58.6 43.5-74.3l36.8-21.3-23.5-54.8h12.6c17 18.9 38.8 32.9 63.6 40.7l27 47.3zm-55.6-287.9c.1-.2.1-.3.1-.4.1.1 5.5 3.2 6.3 5.8 3.9 11.9 7 24.6 16.5 33.4 8 7.4 47 25.1 64-25 2.8-8.4 15.4-8.4 18.3 0 16 47.4 53.9 34.4 64 25 9.5-8.8 12.7-21.5 16.5-33.4.8-2.5 6.2-5.6 6.3-5.7v.3c0 52.9-43.1 96-96 96s-96-43.1-96-96zM264.5 464L240 360l27-47.3c24.8-7.8 46.6-21.9 63.6-40.7h15.7l-21.5 56.3 33.8 20.8c25.9 16 41.3 43.4 41.3 73.2V464z"/>
        </svg>
    )
}

export default Icon

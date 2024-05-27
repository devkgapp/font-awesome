import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M640 236.8c0-50.8-38.5-92.9-87.8-98.6C532 103.4 494.4 80 452 80c-46 0-85.9 26.4-104.5 66-31.7 13.8-54.4 43.6-58.6 79-22.3 12.7-40.7 31.8-52.1 55.3C191.4 297.6 160 341.1 160 392c0 66.2 53.8 120 120 120h240c66.2 0 120-53.8 120-120 0-32-12.8-60.8-33.3-82.3 20.1-18.1 33.3-43.7 33.3-72.9zM520 464H280c-39.8 0-72-32.2-72-72 0-37.6 28.9-68 65.5-71.3C280.7 283.9 313 256 352 256c23.9 0 45.1 10.7 59.8 27.3 10.3-7.1 22.8-11.3 36.2-11.3 30.2 0 55.3 20.9 62 49 3.3-.5 6.5-1 10-1 39.8 0 72 32.2 72 72s-32.2 72-72 72zm45.6-182.7c-7.8-3.2-15.9-6-24.5-7.5-20.3-30.5-54.7-49.8-93.1-49.8-9.6 0-19.2 1.2-28.3 3.6-20.2-12.7-43.6-19.6-67.7-19.6-2.2 0-4.2.4-6.4.5 8.8-12.9 22.8-21.9 39.4-22.6 4.9-32.7 32.9-57.8 67-57.8 35.8 0 64.8 27.8 67.5 62.9 6.5-3.1 13.6-5.3 21.3-5.3 28.3 0 51.2 22.9 51.2 51.2 0 19.1-10.7 35.7-26.4 44.4zM115 297.4l6-31.1-26.2-17.8-37-25.1 37-25.1 26.2-17.8-6-31.1-8.5-43.9 43.7 8.5 31.2 6 17.8-26.3L224 57v1l24.9 36.9 17.8 26.3 31.2-6 35.1-6.8c13.1-18 29.9-32.5 49.2-42.8-6.6-6.5-15.4-10.2-24.6-10.2-2.2 0-4.5.2-6.8.6l-62 12-35.4-52.4C246.7 5.8 235.8 0 224 0c-11.4 0-22.7 4.9-29.3 14.7l-35.4 52.4-62-12c-2.3-.4-4.5-.7-6.8-.7-9.3 0-18.3 3.7-25 10.4-8.3 8.4-11.9 20.2-9.7 31.8l12 62.1-52.3 35.5C5.8 200.8 0 211.8 0 223.5c0 11.8 5.8 22.7 15.6 29.3l52.3 35.4-12 62.1c-2.2 11.6 1.4 23.5 9.7 31.8 6.7 6.7 15.6 10.4 25 10.4 2.2 0 4.5-.2 6.8-.6l31.1-6c.7-17.9 4.4-35.1 10.8-51l-32.7 6.3 8.4-43.8zM224 184c15.5 0 28.7 9.1 35.3 22.1.3-.2.6-.4.8-.6 4.2-17.1 11.6-33.1 22-47.1-15.5-13.7-35.7-22.4-58.1-22.4-48.5 0-88 39.5-88 88 0 26.7 12.2 50.3 31 66.5 11.1-12.3 24.4-22.7 39.5-31C193.3 253 184 239.7 184 224c0-22.1 17.9-40 40-40z"/>
        </svg>
    )
}

export default Icon

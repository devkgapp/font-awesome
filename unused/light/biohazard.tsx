import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M288.1 96c17.7 0 34.8 2.7 50.9 7.6 6.5-8.5 11.1-18.4 13.1-29.4-20.2-6.5-41.7-10.1-64-10.1-22.4 0-44 3.7-64.2 10.2 1.9 11 6.6 21 13.1 29.4 16.2-5 33.3-7.7 51.1-7.7zm-.1 144.1c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM146.1 423.6c9.7-5.6 17.2-13.6 22.6-22.7-28.5-26.4-48.2-62.2-54.4-102.4-.4 0-.8-.2-1.2-.2-10.4 0-20.7 2.9-30 7.9 7.7 46 30.4 86.9 63 117.4zm428.6-147c-13.8-40.3-41.2-74.1-77.2-95.3-12.2-7.2-25.6-12.8-40.1-16.7 3.5-13.9 5.2-27.4 5.2-40.8 0-42.2-15.1-83.2-42.4-115.5-7.3-8.6-19.7-10.9-29.7-5.2-9.7 5.6-14.1 17.4-10.6 27.9 3.7 11.3 5.5 21.5 5.5 31.1 0 54.7-43.6 99.3-97.3 99.3s-97.3-44.5-97.3-99.3c0-9.6 1.8-19.8 5.4-31 3.5-10.7-.9-22.5-10.7-28-9.8-5.6-22.2-3.5-29.6 5.2-27.4 32.3-42.5 73.3-42.5 115.5 0 13.4 1.7 26.9 5.2 40.8-14.5 4-27.9 9.6-40.1 16.7-36 21.1-63.4 55-77.2 95.3-3.7 10.6.5 22.2 10.2 28.1 9.7 5.8 22.2 3.8 29.7-4.8 7.7-8.8 15.4-15.5 23.6-20.3 22.3-13.1 48.3-16.6 73.2-9.9 25.3 6.8 46.4 23.2 59.5 46.2 26.9 47.5 10.9 108.4-35.7 135.8-8.2 4.8-17.7 8.3-29 10.7-11 2.3-18.8 12.1-18.7 23.4.1 11.2 8.1 20.9 19.1 23.1 11 2.1 22.1 3.2 33.1 3.2 30.4 0 60.4-8 86.9-23.6 12.5-7.3 24.1-16.5 34.7-27.3 10.7 10.9 22.3 20 34.7 27.3 36 21.2 78.6 28.5 119.9 20.4 11.1-2.1 18.9-11.6 19.1-23.1.1-11.3-7.8-21.1-18.7-23.4-11.4-2.4-20.8-5.9-29-10.7-46.6-27.4-62.6-88.3-35.7-135.8 13.1-23 34.2-39.4 59.5-46.2 24.9-6.7 50.9-3.2 73.2 9.9 8.2 4.8 15.9 11.4 23.6 20.3 7.5 8.6 20 10.5 29.8 4.7 9.9-5.9 14-17.4 10.4-28zm-145.1-37.8c-33.7 9-61.7 30.8-79 61.3-35.6 62.6-14.3 143 47.2 179.1.2.1.3.2.4.2-20.8-1.7-41.1-8-59.3-18.7-14.1-8.3-27-19.7-38.4-33.8L288 411.5 275.5 427c-11.4 14.1-24.3 25.5-38.4 33.8-18.2 10.7-38.5 17-59.3 18.7.1-.1.3-.2.4-.2 61.6-36.2 82.8-116.5 47.3-179.1-17.3-30.5-45.4-52.3-79.1-61.3-11-3-22.2-4.4-33.2-4.4-22.3 0-44.3 5.9-64.1 17.4C61 234.4 76.5 219.7 94.7 209c13.9-8.1 29.2-13.6 46.9-16.7l18.5-3.2-6.1-17.8c-5.7-16.7-8.6-32.2-8.6-47.5 0-21.1 4.6-41.9 13.3-60.9.4 72 58.2 130.5 129.3 130.5 71 0 128.9-58.5 129.3-130.5 8.7 19 13.3 39.8 13.3 60.9 0 15.2-2.8 30.7-8.5 47.5L416 189l18.5 3.2c17.7 3.1 33 8.5 46.9 16.7 18.2 10.7 33.7 25.4 45.6 42.9-29.7-17.2-64.3-21.9-97.4-13zm32.3 59.8c-6.2 40.2-25.9 76-54.5 102.5 5.5 9.1 12.9 17.1 22.5 22.8 32.7-30.5 55.4-71.4 63.1-117.4-9.4-5.1-19.7-8-30.2-8-.3 0-.6.1-.9.1z"/>
        </svg>
    )
}

export default Icon
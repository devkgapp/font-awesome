import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M392 112c-8.6 0-16.7 1.9-24 5.4V88c0-30.9-25.1-56-56-56-9.7 0-18.8 2.5-26.7 6.8C278 16.3 256.9 0 232 0s-46 16.3-53.3 38.8c-7.9-4.3-17-6.8-26.7-6.8-30.9 0-56 25.1-56 56v152.8c-11.5-11.8-42.1-27.7-72.1-6.7-25.3 17.7-31.5 52.7-13.8 78l113.7 171.3c11.9 17.9 31.8 28.6 53.3 28.6h180.6c30.4 0 56.8-21.6 62.8-51.4l20.6-103.2c4.5-22.7 6.8-45.9 6.8-69V168c.1-30.9-25-56-55.9-56zm24 176.3c0 21.1-2.1 42.1-6.2 62.8l-20.6 103.2c-3 15-16.1 25.7-31.4 25.7H177.2c-10.7 0-20.7-5.4-26.7-14.3L36.3 293.8c-7.6-10.9-5-25.8 5.9-33.4 15.8-11.1 30 1 33.4 5.9l37.8 54.4c4.5 6.4 14.6 3.3 14.6-4.6V88c0-13.3 10.7-24 24-24s24 10.7 24 24v160c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V56c0-13.3 10.7-24 24-24s24 10.7 24 24v192c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V88c0-13.3 10.7-24 24-24s24 10.7 24 24v160c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-80c0-13.3 10.7-24 24-24s24 10.7 24 24v120.3zM333.3 299c-6.1-4.9-16.6-11-30.3-11-13.1 0-29.2 5.6-47 23.1-17.8-17.5-33.9-23.1-47-23.1-13.7 0-24.3 6.1-30.3 11-23.6 19.1-24.8 53.5-3.7 74.2l72.6 71.3c4.7 4.6 12.3 4.6 17 0l72.6-71.3c20.9-20.7 19.7-55.1-3.9-74.2zm-18.7 51.4L256 408l-58.6-57.6c-12-11.8-2.1-30.4 11.6-30.4 6.7 0 15.5 5 24.6 13.9L256 356l22.4-22.1c9.1-9 17.9-13.9 24.6-13.9 13.7 0 23.6 18.6 11.6 30.4z"/>
        </svg>
    )
}

export default Icon

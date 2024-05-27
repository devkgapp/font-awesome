import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M439.22 128.31C409.26 74.65 326.97 88.8 316.7 90.36 296.45 37.14 265.31 0 224 0s-72.44 37.13-92.69 90.34c-10.29-1.56-92.57-15.67-122.53 37.97C-10.17 162.29 2.39 208.82 38.5 256 2.39 303.18-10.17 349.71 8.78 383.69c30.5 54.62 114.75 38.99 122.47 37.82C151.5 474.8 182.65 512 224 512s72.5-37.21 92.75-90.49c7.75 1.17 91.97 16.79 122.47-37.82 18.95-33.97 6.39-80.51-29.73-127.69 36.12-47.18 48.68-93.71 29.73-127.69zm-388.46 232c-7.39-13.23-.43-38.3 20.47-67.82 11.16 10.91 23.5 21.65 36.91 32.14 2.16 17.27 5.21 34.11 8.99 50.26-20.39 2.42-56.34 3.45-66.37-14.58zm57.38-172.95c-13.41 10.49-25.75 21.24-36.91 32.14-20.9-29.52-27.86-54.59-20.47-67.82 3.68-6.62 17.52-20.47 66.39-14.66a487.708 487.708 0 0 0-9.01 50.34zM224 48c14.28 0 31.68 19.27 45.82 53.53-14.97 4.58-30.22 10.01-45.8 16.77-15.59-6.77-30.85-12.21-45.83-16.79C192.33 67.26 209.73 48 224 48zm0 416c-14.26 0-31.63-19.22-45.76-53.39 14.92-4.57 30.23-10.27 45.76-17.01 15.53 6.74 30.83 12.44 45.76 17.01C255.63 444.78 238.26 464 224 464zm70.36-165.26c-29.95 21.38-51.76 32.89-70.36 42.01-18.57-9.11-40.39-20.61-70.36-42.01-1.37-17.08-3.07-47.12 0-85.48 30.02-21.44 51.7-32.85 70.36-42 18.72 9.18 40.39 20.6 70.36 42 1.37 17.08 3.07 47.12 0 85.48zm102.88 61.57c-10.02 18.01-45.92 17-66.37 14.58 3.78-16.15 6.83-32.99 8.99-50.26 13.41-10.49 25.75-21.24 36.91-32.14 20.9 29.52 27.85 54.59 20.47 67.82zm-20.48-140.8c-11.16-10.91-23.5-21.65-36.91-32.14a486.552 486.552 0 0 0-9.01-50.33c48.87-5.81 62.71 8.04 66.39 14.66 7.39 13.22.44 38.29-20.47 67.81zM224 224c-17.69 0-32.04 14.33-32.04 32s14.34 32 32.04 32 32.04-14.33 32.04-32-14.35-32-32.04-32z"/>
        </svg>
    )
}

export default Icon

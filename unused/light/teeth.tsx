import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M544 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h448c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96zm64 416c0 35.29-28.71 64-64 64H96c-35.29 0-64-28.71-64-64V288h34.5c-1.37 4.25-2.5 8.62-2.5 13.33v53.33c0 39.7 32.3 72 72 72 22.7 0 42.73-10.77 55.94-27.23C206.53 419.08 229.71 432 256 432c26.26 0 49.4-12.89 64-32.49 14.6 19.6 37.74 32.49 64 32.49 26.29 0 49.47-12.92 64.06-32.57 13.21 16.46 33.24 27.23 55.94 27.23 39.7 0 72-32.3 72-72v-53.33c0-4.71-1.13-9.09-2.5-13.33H608v128zM109.33 288h53.33c7.36 0 13.33 5.97 13.33 13.33v53.34c0 22.09-17.91 40-40 40s-40-17.91-40-40v-53.33c.01-7.37 5.98-13.34 13.34-13.34zM96 242.67v-53.33c0-22.09 17.91-40 40-40s40 17.91 40 40v53.33c0 7.36-5.97 13.33-13.33 13.33h-53.33c-7.37 0-13.34-5.97-13.34-13.33zM221.71 288h68.57c7.57 0 13.71 6.14 13.71 13.71V352c0 26.51-21.49 48-48 48s-48-21.49-48-48v-50.29c.01-7.57 6.15-13.71 13.72-13.71zM208 242.29v-75.42c0-26.51 21.49-48 48-48s48 21.49 48 48v75.43c0 7.57-6.14 13.71-13.71 13.71h-68.57c-7.58-.01-13.72-6.15-13.72-13.72zM349.71 288h68.57c7.57 0 13.71 6.14 13.71 13.71V352c0 26.51-21.49 48-48 48s-48-21.49-48-48v-50.29c.01-7.57 6.15-13.71 13.72-13.71zM336 242.29v-75.43c0-26.51 21.49-48 48-48s48 21.49 48 48v75.42c0 7.57-6.14 13.71-13.71 13.71h-68.57c-7.58.01-13.72-6.13-13.72-13.7zm208 .38c0 7.36-5.97 13.33-13.33 13.33h-53.33c-7.36 0-13.33-5.97-13.33-13.33v-53.33c0-22.09 17.91-40 40-40s40 17.91 40 40v53.33zM477.33 288h53.33c7.36 0 13.33 5.97 13.33 13.33v53.33c0 22.09-17.91 40-40 40s-40-17.91-40-40v-53.33c.01-7.36 5.98-13.33 13.34-13.33zM608 256h-34.5c1.37-4.25 2.5-8.62 2.5-13.33v-53.33c0-39.7-32.3-72-72-72-17.9 0-34.1 6.81-46.71 17.66-12.35-28.28-40.52-48.14-73.29-48.14-26.26 0-49.4 12.89-64 32.49-14.6-19.6-37.74-32.49-64-32.49-32.78 0-60.95 19.86-73.29 48.14-12.61-10.85-28.8-17.66-46.71-17.66-39.7 0-72 32.3-72 72v53.33c0 4.71 1.13 9.09 2.5 13.33H32V96c0-35.29 28.71-64 64-64h448c35.29 0 64 28.71 64 64v160z"/>
        </svg>
    )
}

export default Icon

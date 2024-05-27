import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M499.23 232.01l-20.46.62c-4.6-44.33-22.16-84.78-48.78-117.59l14.96-14.07c5.13-4.72 5.3-12.76.37-17.69l-16.6-16.6c-4.93-4.93-12.97-4.76-17.69.37l-14.07 14.96c-32.81-26.62-73.26-44.18-117.59-48.78l.62-20.46C280.28 5.8 274.71 0 267.74 0h-23.48c-6.97 0-12.54 5.8-12.25 12.77l.62 20.46c-44.33 4.6-84.77 22.16-117.59 48.78l-14.07-14.96c-4.72-5.13-12.76-5.3-17.69-.37l-16.6 16.6c-4.93 4.93-4.76 12.97.37 17.69l14.96 14.07c-26.62 32.81-44.18 73.26-48.78 117.59l-20.46-.62C5.8 231.72 0 237.29 0 244.26v23.48c0 6.97 5.8 12.54 12.77 12.25l20.46-.62c4.6 44.33 22.16 84.77 48.78 117.59l-14.96 14.07c-5.13 4.72-5.3 12.76-.37 17.69l16.6 16.6c4.93 4.93 12.97 4.76 17.69-.37l14.07-14.96c32.81 26.62 73.26 44.18 117.59 48.78l-.62 20.46c-.29 6.96 5.28 12.77 12.25 12.77h23.48c6.97 0 12.54-5.81 12.25-12.77l-.62-20.46c44.33-4.6 84.77-22.16 117.59-48.78l14.07 14.96c4.72 5.13 12.76 5.3 17.69.37l16.6-16.6c4.93-4.93 4.76-12.97-.37-17.69l-14.96-14.07c26.62-32.81 44.18-73.26 48.78-117.59l20.46.62c6.97.29 12.77-5.28 12.77-12.25v-23.48c0-6.97-5.8-12.54-12.77-12.25zm-68.74 2.1l-80.48 2.46c-2.49-12.06-7.33-23.25-13.89-33.2l58.67-55.2c18.98 24.37 31.68 53.79 35.7 85.94zM256 304c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm107.84-186.79l-55.2 58.67c-9.95-6.56-21.14-11.4-33.2-13.89l2.46-80.48c32.14 4.01 61.56 16.72 85.94 35.7zm-129.73-35.7l2.46 80.48c-12.06 2.49-23.25 7.33-33.2 13.89l-55.2-58.67c24.37-18.98 53.79-31.69 85.94-35.7zm-116.9 66.65l58.67 55.2c-6.56 9.95-11.4 21.14-13.89 33.2l-80.48-2.46c4.02-32.14 16.72-61.56 35.7-85.94zm-35.7 129.73l80.48-2.46c2.49 12.06 7.33 23.25 13.89 33.2l-58.67 55.2c-18.98-24.37-31.69-53.79-35.7-85.94zm66.65 116.9l55.2-58.67c9.95 6.56 21.14 11.4 33.2 13.89l-2.46 80.48c-32.14-4.01-61.56-16.72-85.94-35.7zm129.73 35.7l-2.46-80.48c12.06-2.49 23.25-7.33 33.2-13.89l55.2 58.67c-24.37 18.98-53.79 31.69-85.94 35.7zm116.9-66.65l-58.67-55.2c6.56-9.95 11.4-21.14 13.89-33.2l80.48 2.46c-4.01 32.14-16.72 61.56-35.7 85.94z"/>
        </svg>
    )
}

export default Icon

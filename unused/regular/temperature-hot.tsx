import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M448 322.9V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v210.9c-18.6 6.6-32 24.2-32 45.1 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1zm-189.3 15.6l-9.8 14.6L224 390l-24.9-36.9-17.8-26.3-31.2 6-43.6 8.5 8.5-43.9 6-31.1-26.2-17.8-37-25.1 37-25.1 26.2-17.8-6-31.1-8.5-43.9 43.7 8.5 31.2 6 17.8-26.3L224 57l24.9 36.9 17.7 26.3 21.4-4.1V112c0-16.3 3.3-31.8 8.4-46.4l-7.7 1.5-35.4-52.4C246.7 4.9 235.4 0 224 0s-22.7 4.9-29.3 14.7l-35.4 52.4-62-12c-2.3-.4-4.5-.7-6.8-.7-9.3 0-18.3 3.7-25 10.4-8.3 8.4-11.9 20.2-9.7 31.8l12 62.1-52.3 35.5C5.8 200.8 0 211.8 0 223.5c0 11.8 5.8 22.7 15.6 29.3l52.3 35.4-12 62.1c-2.2 11.6 1.4 23.5 9.7 31.8 6.7 6.7 15.6 10.4 25 10.4 2.2 0 4.5-.2 6.8-.6l62-12 35.4 52.4a35.318 35.318 0 0 0 58.6 0l9.9-14.7c-4.7-15.8-7.3-32.4-7.3-49.7 0-9.9 1-19.7 2.7-29.4zm285.3-60V112C544 50.1 493.9 0 432 0S320 50.1 320 112v166.5c-19.7 24.6-32 55.5-32 89.5 0 79.5 64.5 144 144 144s144-64.5 144-144c0-34-12.3-64.9-32-89.5zM432 464c-52.9 0-96-43.1-96-96 0-27 11.7-47.3 21.5-59.5l10.5-13.1V112c0-35.3 28.7-64 64-64s64 28.7 64 64v183.3l10.5 13.1C516.3 320.7 528 341 528 368c0 52.9-43.1 96-96 96zM288 164c-16.1-17.1-38.7-28-64-28-48.5 0-88 39.5-88 88s39.5 88 88 88c17.5 0 33.6-5.3 47.3-14.1 4.6-10.4 9.9-20.5 16.7-30.1V164zm-64 100c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"/>
        </svg>
    )
}

export default Icon

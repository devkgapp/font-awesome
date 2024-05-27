import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M639.2 466.7l-7.2-14.3c-2-4-6.8-5.6-10.7-3.6l-57.7 26.1c-3.9 2-8.1 3.2-12.4 4L496 405.3l72.9-48.6c4.5-3 7.1-8 7.1-13.3V265c0-5.6-2.9-10.8-7.8-13.7l-138.1-82.9-47.8-95.6c-4-7.9-13.5-11.1-21.5-7.2-7.9 4-11.1 13.6-7.2 21.5l46.8 93.6-16.9 22.6c-2.4-24.2-22.7-43.3-47.5-43.3h-38.8l-41.1-33.8c-.1-.1-.3-.2-.4-.3 27.7-7 48.4-32 48.4-61.8 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 15.6 5.8 29.7 15.1 40.8-10.1 1.2-43.6 7-61.9 43.4L104 198.6c-11.3 22.7-11.4 48.7-.1 71.3 3.4 6.8 7.8 12.7 12.7 18.1H112c-12.1 0-23.2 6.8-28.6 17.7l-32 64c-2.7 5.4-3.7 11.1-3.3 16.6C20.5 393.4 0 418.2 0 448c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64 0-11.7-3.4-22.5-8.9-32H464l48 64h-88c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h118.2c12.4 0 24.6-2.9 35.7-8.4l57.7-26.1c3.9-2 5.5-6.8 3.6-10.8zM240 32c17.7 0 32 14.4 32 32s-14.3 32-32 32-32-14.4-32-32 14.3-32 32-32zM132.7 212.9l25.2-50.4c7-13.9 19.8-23.4 35.2-25.9 4.7-.8 24.7-3.5 41.7 13.4l46.6 38.3c2.8 2.3 6.5 3.6 10.2 3.6H336c8.8 0 16 7.2 16 16s-7.2 16-16 16h-44.5c-11.1 0-21.9-3.9-30.5-10.9l-43-35.3-37 74 76.5 14.3c26.6 5 35.4 38.7 14.6 56l-69.9 58.3c-7.1 5.9-17.1 4.5-22.5-2-5.7-6.8-4.8-16.9 2-22.5l69.9-58.2-84.9-15.9c-14.9-2.8-27.4-12.2-34.2-25.8-6.7-13.8-6.6-29.4.2-43zm212 42.2l-15.1 20.1c-3.9 5.2-9.5 8.4-15.5 10.4-.1-.3-.8-14.5-13.6-29.6H336c3 0 5.8-.4 8.7-.9zm-115.8-27h-.2v-.1l.2.1zM112 320h62.6l-13.3 11.1c-15.8 13.2-20.8 34.5-14.3 52.9H80l32-64zm144 160H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32zm-8.2-96l44.9-37.4c9-7.5 15.3-17.1 19-27.5 17.1-2.1 33.1-10.7 43.5-24.7l69.1-92.1L544 274.1v60.8L470.3 384H247.8z"/>
        </svg>
    )
}

export default Icon

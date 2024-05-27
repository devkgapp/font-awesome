import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M432 64H144A144 144 0 0 0 0 208v208a32 32 0 0 0 32 32h512a32 32 0 0 0 32-32V208A144 144 0 0 0 432 64zM256 416H32V208a112 112 0 0 1 224 0zm288 0H288V208c0-45.52-21.54-85.61-54.51-112H432a112.12 112.12 0 0 1 112 112zm-48-224H328a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h88v80a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zm-16 96h-32v-64h32zm-296-96h-80a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"/>
        </svg>
    )
}

export default Icon
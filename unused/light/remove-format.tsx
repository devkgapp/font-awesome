import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M192 64h176l-44.56 133.68 25.35 20L400 64h176v56a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V48a16 16 0 0 0-16-16H176a16 16 0 0 0-16 16v21l32 25.19zm152 384h-72l44.55-133.64-25.35-20L240 448h-72a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm293 37.31L23 1.8A7.86 7.86 0 0 0 11.79 3l-10 12.5A7.92 7.92 0 0 0 3 26.71l614 483.52a7.91 7.91 0 0 0 11.18-1.23l10-12.5a7.83 7.83 0 0 0-1.18-11.18z"/>
        </svg>
    )
}

export default Icon

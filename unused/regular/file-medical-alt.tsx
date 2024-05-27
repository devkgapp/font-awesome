import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M433.9 98l-84-84c-9-9-21.1-14-33.8-14h-204C85.6.1 64 21.6 64 48.1V272H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h113.2l32.5 65.1c5.9 11.8 22.7 11.8 28.6 0l49.7-99.4 17.2 34.3H344c13.2 0 24-10.8 24-24s-10.8-24-24-24h-57.2l-32.5-65.1c-5.9-11.8-22.7-11.8-28.6 0L176 306.3 158.9 272H112V48.1h160v104c0 13.3 10.7 24 24 24h104V464H112.1v-96H64v96c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V132c0-12.8-5.1-25-14.1-34zM320 128.1V52l76.1 76.1H320z"/>
        </svg>
    )
}

export default Icon
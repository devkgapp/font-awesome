import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M572.48 279.8l-28.28-28.28a12 12 0 0 0-17 0l-175.18 175-79.28-80.66a12 12 0 0 0-17 0l-28.28 28.28a12 12 0 0 0 0 17l116 117.42a12 12 0 0 0 17 0l212-211.71a12 12 0 0 0 .02-17.05zM145.3 11a16 16 0 0 0-15.18-11H90.4a16 16 0 0 0-15.19 11L.83 235A16 16 0 0 0 16 256h16.87a16 16 0 0 0 15.19-11l12.3-37h103.28l12.3 37a16 16 0 0 0 15.18 11H208a16 16 0 0 0 15.18-21zm-69 149L112 58.84 145.59 160zM280 256h92a76 76 0 0 0 46.16-136.33A76 76 0 0 0 356 0h-76a24 24 0 0 0-24 24v208a24 24 0 0 0 24 24zm24-208h52a28 28 0 0 1 0 56h-52zm0 104h68a28 28 0 0 1 0 56h-68z"/>
        </svg>
    )
}

export default Icon
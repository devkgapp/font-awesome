import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M480 0H32A32 32 0 0 0 0 32v448a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zm0 480H32V32h448zm-32-32V256H256v192zM288 288h128v128H288zM256 64H64v192h192zm-32 160H96V96h128z"/>
        </svg>
    )
}

export default Icon

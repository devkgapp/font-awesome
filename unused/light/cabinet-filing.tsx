import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M464 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zm16 464c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V272h448v192zm0-224H32V48c0-8.82 7.18-16 16-16h416c8.82 0 16 7.18 16 16v192zM336 96H176c-8.84 0-16 7.16-16 16v40c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-24h128v24c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-40c0-8.84-7.16-16-16-16zM168 416h16c4.42 0 8-3.58 8-8v-24h128v24c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-40c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v40c0 4.42 3.58 8 8 8z"/>
        </svg>
    )
}

export default Icon

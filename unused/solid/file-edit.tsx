import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-59.6 109.6l-95 95-5.4 48.2c-.7 6.4 4.7 11.9 11.2 11.2l48.2-5.4 95-95c2-2 2-5.2 0-7.2l-46.8-46.8c-2-2-5.2-2-7.2 0zm109.7-30.3l-25.4-25.4c-7.9-7.9-20.7-7.9-28.6 0l-26 26c-2 2-2 5.2 0 7.2l46.8 46.8c2 2 5.2 2 7.2 0l26-26c7.9-7.9 7.9-20.7 0-28.6z"/>
        </svg>
    )
}

export default Icon

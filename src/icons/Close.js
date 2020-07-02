import React from "react";

const icon = ({onHandleCloseMenu}) => (
    // <svg xmlns="http://www.w3.org/2000/svg"
    //     id="Capa_1"
    //     enableBackground="new 0 0 512 512"
    //     viewBox="0 0 512 512"
    //     width="512px" height="512px">
    //         <linearGradient id="gradient" y2='100%'>
    //             <stop stop-color="rgb(101, 115, 255)" offset="0%" />
    //             <stop stop-color="rgb(111, 114, 247)" offset="9%" />
    //             <stop stop-color="rgb(120, 114, 239)" offset="18%" />
    //             <stop stop-color="rgb(130, 113, 231)" offset="27%" />
    //             <stop stop-color="rgb(139, 112, 223)" offset="36%" />
    //             <stop stop-color="rgb(149, 111, 215)" offset="45%" />
    //             <stop stop-color="rgb(158, 111, 208)" offset="54%" />
    //             <stop stop-color="rgb(168, 110, 200)" offset="63%" />
    //             <stop stop-color="rgb(177, 109, 192)" offset="72%" />
    //             <stop stop-color="rgb(187, 108, 184)" offset="81%" />
    //             <stop stop-color="rgb(196, 108, 176)" offset="90%" />
    //             <stop stop-color="rgb(206, 107, 168)" offset="100%" />
    //         </linearGradient><g><g>
    //         <g>
    //             <g>
	// 	            <path d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
	// 		            c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
	// 		            c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
	// 		            s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
	// 		            C512,93.417,453.532,30,376,30z" fill="url(#gradient)"/>
	//             </g>
    //         </g>
    //     </g></g>
    // </svg>

    <svg id="Capa_1" 
    className='header__close'
    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 512.001 512.001" enableBackground='new 0 0 512.001 512.001'
     onClick={onHandleCloseMenu}>
	<g>
		<path fill='white' d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
			L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
			c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
			l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
			L284.286,256.002z"/>
	</g>
    </svg>

);

export default icon;
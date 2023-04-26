import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGitAlt, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas purus at tincidunt vehicula. Nullam mauris risus, molestie in arcu sagittis, pretium accumsan tortor. Nunc a iaculis nulla. Donec cursus nunc et ante suscipit porta. Integer non nibh a augue imperdiet commodo. Duis non lorem eu sem condimentum interdum feugiat eget magna. Cras sem diam, pretium congue erat varius, tincidunt dictum sapien. In eget erat vitae eros accumsan sodales eget eu risus. Fusce ut eleifend mauris. Nam maximus nisi tellus, sed consectetur ipsum tempus vel.</p>
                <p>Integer felis nulla, pretium a nulla nec, aliquam viverra magna. Proin laoreet, velit quis viverra venenatis, enim lacus ultrices odio, vitae hendrerit nisi sapien ut velit. Nulla nibh metus, convallis vel laoreet a, posuere sit amet ipsum. Phasellus fermentum, tortor et sollicitudin dapibus, mauris orci consectetur velit, sit amet bibendum erat mauris non sapien. Nullam non sodales sem, at lacinia dolor. Fusce non quam sapien. Cras ac eleifend enim.</p>
                <p>Praesent convallis nisi sed ligula pretium, nec fringilla metus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer pretium justo eget urna semper, facilisis pulvinar arcu tincidunt. Curabitur pulvinar lobortis magna volutpat posuere. Vivamus nibh urna, porta sit amet dolor et, luctus accumsan turpis. Nulla tellus dui, pretium nec elit et, sollicitudin semper lectus. Nam porttitor nisi nec magna posuere, eu viverra diam venenatis.</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M3.352 10.17a.903.903 0 0 0-.903.903v4.07H1.127v-2.814H0v-1.318h1.128a2.225 2.225 0 0 1 2.224-2.17h1.321v1.322zm7.326 1.84a.25.25 0 0 0-.238.174l-.532 1.834a1.564 1.564 0 0 1-3.001 0l-.532-1.835a.252.252 0 0 0-.477 0l-.532 1.835a1.572 1.572 0 0 1-1.512 1.123h-.368v-1.32h.373a.247.247 0 0 0 .235-.172l.532-1.835a1.57 1.57 0 0 1 3.009 0l.536 1.837a.246.246 0 0 0 .471 0l.532-1.834a1.57 1.57 0 0 1 3.009 0l.532 1.834a.247.247 0 0 0 .235.174h.374v1.319h-.369a1.571 1.571 0 0 1-1.512-1.123l-.532-1.835a.252.252 0 0 0-.233-.176zm2.69.906a2.225 2.225 0 1 1 2.225 2.225 2.225 2.225 0 0 1-2.225-2.225zm3.128 0a.903.903 0 1 0-.903.903.903.903 0 0 0 .903-.903zm4.674.46a.962.962 0 0 0 .067-.123.67.67 0 0 1 1.266.308.654.654 0 0 1-.055.262l-.019.04a2.268 2.268 0 0 1-2.034 1.276 2.225 2.225 0 0 1 0-4.45h.098a2.25 2.25 0 0 1 1.014.29V8.841h1.322v3.01a.742.742 0 0 1-.712.721 1.59 1.59 0 0 1-1.07-.373.902.902 0 0 0-.549-.191H20.4a.903.903 0 1 0 .776 1.366zM4.228 11.624a.704.704 0 0 1-.704.704.704.704 0 0 1-.704-.704.704.704 0 0 1 .704-.704.704.704 0 0 1 .704.704zm18.398 2.835a.687.687 0 1 0 .687-.674.678.678 0 0 0-.687.674zm.123 0a.56.56 0 1 1 .561.583.558.558 0 0 1-.565-.583zm.282.383h.124V14.5h.137l.216.34h.137l-.226-.35a.203.203 0 0 0 .209-.216c0-.152-.09-.227-.275-.227h-.307zm.124-.688h.158c.084 0 .175.017.175.121 0 .105-.1.138-.21.138h-.129z"/></svg>
                    </div>
                    <div className="face2">
                    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M50.455 102.855c0 25.177 39.647 105.629 77.265 105.629h.001c37.619 0 77.397-76.894 77.397-108.531 0-20.003-18.606-52.373-77.62-52.373-59.013 0-77.043 35.758-77.043 55.275zm50.039 5.634C86.402 93.277 77.656 77.857 77.656 77.857s14.41-7.175 23.824-9.091c.802-.163 1.62-.338 2.458-.516 8.997-1.916 20.189-4.298 36.328 1.496 33.579 12.056 47.896 34.606 47.896 34.606s-21.609-17.401-45.404-20.895c-13.707-2.013-39.203 6.152-39.203 6.152s8.862 9.38 16.075 23.114c1.137 2.165 2.245 4.147 3.306 6.045 5.668 10.137 9.974 17.838 9.974 37.93 0 14.659-11.08 36.443-11.08 36.443s6.223-28.383 1.204-50.825c-3.627-16.223-6.425-18.719-13.02-24.603-2.528-2.255-5.615-5.008-9.52-9.224z"/>
                    </svg>
                    </div>
                    <div className="face3">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="767.000000pt" height="496.000000pt" viewBox="0 0 767.000000 496.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,496.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M3764 4950 c-106 -22 -203 -101 -251 -205 -23 -50 -27 -74 -27 -140
                        0 -108 34 -184 115 -259 73 -68 135 -91 239 -90 118 2 206 46 278 139 47 62
                        65 119 66 210 0 67 -4 90 -28 141 -67 148 -238 237 -392 204z"/>
                        <path d="M2980 4416 c-110 -30 -185 -92 -234 -196 -26 -55 -30 -76 -30 -140 1
                        -114 29 -177 122 -269 100 -99 122 -147 122 -266 0 -119 -22 -167 -122 -266
                        -93 -92 -121 -155 -122 -269 0 -64 4 -85 30 -140 143 -300 568 -265 660 54 36
                        127 -3 247 -116 358 -102 100 -115 129 -115 258 0 130 18 173 112 263 113 109
                        155 236 119 363 -36 125 -129 218 -251 249 -70 18 -114 18 -175 1z"/>
                        <path d="M4510 4414 c-119 -31 -215 -130 -246 -254 -33 -130 3 -241 115 -351
                        98 -97 116 -138 116 -269 0 -129 -14 -160 -115 -259 -78 -76 -116 -145 -126
                        -231 -14 -119 49 -255 149 -324 52 -36 145 -66 202 -66 57 0 150 30 202 66 98
                        67 163 206 149 317 -13 97 -44 156 -122 234 -101 100 -117 134 -122 255 -4 86
                        -2 102 21 150 15 35 51 81 99 129 80 80 111 138 124 236 20 157 -99 326 -261
                        368 -72 18 -113 18 -185 -1z"/>
                        <path d="M3740 3884 c-157 -42 -276 -212 -256 -367 13 -97 44 -156 122 -234
                        101 -100 117 -134 122 -255 4 -87 2 -102 -21 -151 -16 -36 -50 -80 -95 -124
                        -78 -77 -105 -122 -123 -210 -31 -152 51 -305 201 -377 152 -71 340 -21 435
                        118 103 151 77 333 -68 473 -94 90 -112 133 -112 263 0 129 14 160 115 259
                        113 110 149 221 116 351 -32 126 -128 223 -251 255 -72 18 -113 18 -185 -1z"/>
                        <path d="M2337 3766 c-59 -22 -107 -64 -133 -120 -60 -128 1 -274 133 -322
                        149 -53 306 60 306 221 0 161 -157 274 -306 221z"/>
                        <path d="M5181 3767 c-92 -35 -154 -125 -154 -222 0 -175 184 -287 341 -206
                        48 25 76 55 101 111 37 82 19 193 -42 258 -53 58 -174 86 -246 59z"/>
                        <path d="M55 1493 c-46 -12 -45 2 -45 -538 0 -493 1 -516 21 -581 53 -172 201
                        -304 390 -349 35 -8 110 -15 167 -15 185 0 325 47 428 145 l58 54 58 -55 c103
                        -98 237 -144 428 -144 234 0 425 102 518 277 58 111 62 146 62 679 0 578 12
                        529 -134 529 -78 0 -98 -3 -113 -18 -17 -16 -18 -55 -23 -530 l-5 -512 -25
                        -49 c-13 -26 -38 -60 -55 -74 -128 -108 -398 -101 -507 15 -15 15 -37 51 -50
                        78 -23 50 -23 54 -28 560 l-5 509 -25 13 c-51 26 -202 12 -222 -20 -4 -7 -8
                        -231 -8 -498 0 -397 -3 -494 -15 -535 -39 -131 -147 -197 -320 -197 -111 0
                        -181 22 -243 78 -89 80 -86 61 -92 617 l-5 486 -25 27 c-43 47 -114 65 -185
                        48z"/>
                        <path d="M6875 1196 c-292 -68 -455 -255 -472 -541 -10 -181 47 -335 165 -446
                        127 -120 264 -171 462 -172 179 0 311 41 433 138 58 46 129 133 121 147 -3 5
                        -63 8 -134 8 -123 0 -130 -1 -185 -30 -94 -49 -156 -63 -261 -58 -75 4 -104
                        11 -157 36 -78 36 -140 96 -173 165 -44 95 -86 87 434 87 436 0 458 1 489 20
                        63 38 78 114 47 234 -28 106 -62 166 -143 246 -81 81 -158 126 -266 155 -82
                        23 -283 29 -360 11z m280 -201 c125 -33 223 -124 259 -242 l7 -23 -385 0
                        c-435 0 -405 -7 -361 81 81 158 281 235 480 184z"/>
                        <path d="M2523 1190 c-12 -5 -25 -19 -28 -32 -3 -13 -5 -205 -3 -428 l3 -405
                        28 -58 c54 -110 168 -197 304 -232 73 -19 223 -19 296 0 77 20 150 58 201 105
                        l43 39 37 -38 c44 -45 120 -84 202 -106 75 -19 224 -19 299 0 133 35 249 124
                        302 232 l28 58 3 415 c2 352 1 418 -12 435 -13 18 -26 20 -110 20 -64 0 -99
                        -4 -108 -13 -10 -10 -14 -101 -18 -400 -5 -372 -6 -389 -27 -427 -44 -83 -109
                        -118 -218 -118 -132 -1 -219 61 -244 173 -6 26 -11 193 -11 396 0 286 -3 354
                        -14 370 -13 16 -27 19 -111 19 -84 0 -98 -3 -111 -19 -11 -16 -14 -84 -14
                        -370 0 -203 -5 -370 -11 -396 -25 -112 -112 -174 -244 -173 -109 0 -174 35
                        -218 118 -21 38 -22 56 -27 397 -5 341 -6 358 -26 385 -39 54 -128 78 -191 53z"/>
                        <path d="M4630 1194 c-40 -16 -40 -18 -40 -596 l0 -558 130 0 130 0 0 558 c0
                        466 -2 561 -14 578 -12 16 -28 19 -103 21 -48 1 -95 0 -103 -3z"/>
                        <path d="M5460 1190 c-129 -17 -215 -56 -277 -123 -97 -105 -89 -275 17 -371
                        76 -68 187 -112 473 -185 226 -58 287 -94 287 -168 0 -46 -36 -83 -90 -94 -25
                        -4 -184 -8 -353 -9 -268 0 -313 -2 -337 -16 -40 -24 -62 -69 -64 -128 l-1 -51
                        388 -3 c414 -2 467 2 558 49 59 30 124 101 143 156 25 74 21 169 -10 231 -58
                        117 -171 173 -523 263 -179 45 -239 67 -270 98 -23 23 -28 70 -11 101 23 42
                        42 45 372 50 l317 5 31 30 c35 33 53 84 48 135 l-3 35 -320 1 c-176 1 -345 -2
                        -375 -6z"/>
                        </g>
                    </svg>

                    </div>
                    <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>

        <Loader type='line-scale-pulse-out'></Loader>
        </>
    )
}

export default About
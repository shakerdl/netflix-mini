import axios from 'axios';
import React, { useEffect, useRef } from 'react';


const VideoPlayer = ({ url }) => {
    debugger
    const iframeRef = useRef(null);
    // TODO: Add a useEffect hook to fetch the embed HTML from the server and set the iframe's srcdoc attribute to the HTML content
    useEffect(() => {
        const fetchEmbedHTML = async () => {
            try {
                debugger
                const response = await axios.post("movies/embed", { url });
                const htmlContent = response.data;
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlContent, 'text/html');
                const videoElement = doc.querySelector('video');
                videoElement.setAttribute('autoplay', 'true');
                const videoHTML = videoElement.outerHTML;
                if (iframeRef.current) {
                    iframeRef.current.srcdoc = videoHTML;
                }
            } catch (error) {
                console.error('Error fetching or parsing embed HTML:', error);
            }
        };

        fetchEmbedHTML();
    }, [url]);


    return (

        <iframe ref={iframeRef} title="IMDb Video" width="560" height="315" frameBorder="0" allowFullScreen />
    );
};

export default VideoPlayer;

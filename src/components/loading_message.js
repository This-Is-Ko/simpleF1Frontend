import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const loadingMessages = ["Starting formation lap...", "DRS enabled...", "Calculating fastest lap..."];

function LoadingMessage() {
    const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);

    useEffect(() => {
        let timeout;
        if (loadingMessageIndex < loadingMessages.length - 1) {
            timeout = setTimeout(() => setLoadingMessageIndex(loadingMessageIndex + 1), 2000);
        }
        return () => {
            clearTimeout(timeout);
          };
        }, [loadingMessageIndex]);

    return (
        <Typography variant="subtitle1" sx={{paddingTop:"10px", color:"black"}}>{loadingMessages[loadingMessageIndex]}</Typography>
    )
}

export default LoadingMessage;
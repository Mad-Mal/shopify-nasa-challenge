import { LikeButton } from '@lyket/react';
import React from 'react';

function LikeBtn() {
    
    return (
        <div>
            <LikeButton
                id='like-button'
                namespace='like-button'
                type='like-button'
                component={LikeButton.templates.Twitter}
                />
        </div>
    )
}

export default LikeBtn
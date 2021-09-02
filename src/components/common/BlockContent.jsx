import React from 'react'
import BlockContent from "@sanity/block-content-to-react";

const BlockContentComponent = ({ body, projectId, dataset }) => {
    return (
        <BlockContent
            blocks={body}
            projectId={projectId}
            dataset={dataset}
        />
    )
}

export default BlockContentComponent;

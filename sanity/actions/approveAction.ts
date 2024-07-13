import { useDocumentOperation } from 'sanity';
import React from 'react';

export function CustomPublishAction(props:any) {
  const { publish } = useDocumentOperation(props.id, props.type);

  return {
    label: 'Publish',
    onHandle: () => {
      const { draft } = props;
      const approved = draft?.approved;

      if (approved) {
        // If approved, proceed with publish
        publish.execute();
        props.onComplete();
      } else {
        // Otherwise, show a message and do not publish
        alert('Document must be approved before it can be published.');
        props.onComplete();
      }
    },
  };
}

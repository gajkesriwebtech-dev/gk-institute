"use client";

import React from 'react';

interface SchemaProps {
    data: any;
}

export const Schema: React.FC<SchemaProps> = ({ data }) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
};

export default Schema;

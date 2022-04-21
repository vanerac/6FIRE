import React from 'react';
import ListElement from './list-element';

export default function List({
    headers,
    items,
    onClick,
}: {
    headers: string[];
    items: any[];
    onClick: ($item: any) => void;
}) {
    return (
        <table className="grid-table-5MZdRv">
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{items.map((item) => ListElement({ keys: headers, value: item, onClick }))}</tbody>
        </table>
    );
}

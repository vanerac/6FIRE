import React from 'react';

export default function ListElement({
    keys,
    value,
    onClick,
}: {
    keys: string[];
    value: any;
    onClick?: ($item: any) => void;
}) {
    return (
        <tr>
            {keys.map((key: string) => (
                <td key={key}>{value[key]}</td>
            ))}
            <td>
                <button onClick={onClick}>Edit</button>
            </td>
        </tr>
    );
}

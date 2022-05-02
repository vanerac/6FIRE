import React from 'react';

// function formatData(data: any) {
//     // TODO: format data
//     return data;
// }

export default function DataTable({
    headers,
    data,
    editCallback,
    deleteCallback,
}: {
    headers: { key: string; display: string }[];
    data: { [key: string]: string; id: string }[];
    editCallback: ($id: string) => void;
    deleteCallback: ($id: string) => void;
}) {
    // order data in same order as headers

    return (
        <div>
            <div className="table-wrapper">
                {/* table content */}
                <div className="table-content mt-0">
                    <table>
                        <thead>
                            <tr>
                                {headers.map((header, index) => (
                                    <th key={index}>{header.display}</th>
                                ))}
                                {/*<td className="text-center">Member</td>*/}
                                <td className="text-center">Action</td>
                            </tr>
                        </thead>

                        {data.map((d, i) => {
                            return (
                                <tr key={i}>
                                    {headers.map((row, l) => {
                                        const toDisplay = d[row.key];
                                        if (toDisplay.length > 20) {
                                            // cut at next line of 15 chars

                                            return <td key={l}>{toDisplay.substring(0, 15)}...</td>;
                                        }
                                        return (
                                            <td className="text-center" key={l}>
                                                {toDisplay}
                                            </td>
                                        );
                                    })}
                                    <td className="text-center">
                                        <i onClick={() => editCallback(d.id)} className="fa fa-edit color-dard-blue" />
                                    </td>
                                    <td className="text-center">
                                        <i
                                            onClick={() => deleteCallback(d.id)}
                                            className="fa fa-delete color-dard-blue"
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                        {/* single row */}
                        {/*<tr>*/}
                        {/*    <td>1002</td>*/}
                        {/*    <td>zihadhossain88@hotmail.com</td>*/}
                        {/*    <td>Zihad</td>*/}
                        {/*    <td>Hosan</td>*/}
                        {/*    <td>Intermediaire (99,00 &euro;)</td>*/}
                        {/*    <td className="text-center">*/}
                        {/*        <i className="far fa-check-square color-light-green"></i>*/}
                        {/*    </td>*/}
                        {/*    <td className="text-center">*/}
                        {/*        <i className="fa fa-edit color-dard-blue"></i>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                        {/*/!* single row *!/*/}
                        {/*<tr>*/}
                        {/*    <td>1003</td>*/}
                        {/*    <td>alex@6fire.com</td>*/}
                        {/*    <td>Alex</td>*/}
                        {/*    <td>Elodie</td>*/}
                        {/*    <td>Intermediaire (99,00 &euro;)</td>*/}
                        {/*    <td className="text-center">*/}
                        {/*        <i className="far fa-check-square color-light-green"></i>*/}
                        {/*    </td>*/}
                        {/*    <td className="text-center">*/}
                        {/*        <i className="fa fa-edit color-dard-blue"></i>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                        {/*/!* single row *!/*/}
                        {/*<tr>*/}
                        {/*    <td>1004</td>*/}
                        {/*    <td>mas@6fire.com</td>*/}
                        {/*    <td>Corentin</td>*/}
                        {/*    <td>Mas</td>*/}
                        {/*    <td>Intermediaire (99,00 &euro;)</td>*/}
                        {/*    <td className="text-center">*/}
                        {/*        <i className="far fa-check-square color-light-green"></i>*/}
                        {/*    </td>*/}
                        {/*    <td className="text-center">*/}
                        {/*        <i className="fa fa-edit color-dard-blue"></i>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                        {/*/!* single row *!/*/}
                        {/*<tr>*/}
                        {/*    <td>1004</td>*/}
                        {/*    <td>elo@6fire.com</td>*/}
                        {/*    <td>Elo</td>*/}
                        {/*    <td>Elodie</td>*/}
                        {/*    <td>Intermediaire (99,00 &euro;)</td>*/}
                        {/*    <td className="text-center">*/}
                        {/*        <i className="far fa-check-square color-light-green"></i>*/}
                        {/*    </td>*/}
                        {/*    <td className="text-center">*/}
                        {/*        <i className="fa fa-edit color-dard-blue"></i>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                        {/*/!* single row *!/*/}
                        {/*<tr>*/}
                        {/*    <td>1006</td>*/}
                        {/*    <td>flo@6fire.com</td>*/}
                        {/*    <td>Flo</td>*/}
                        {/*    <td>Elodie</td>*/}
                        {/*    <td>Intermediaire (99,00 &euro;)</td>*/}
                        {/*    <td className="text-center">*/}
                        {/*        <i className="far fa-check-square color-light-green"></i>*/}
                        {/*    </td>*/}
                        {/*    <td className="text-center">*/}
                        {/*        <i className="fa fa-edit color-dard-blue"></i>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                    </table>
                </div>
            </div>
        </div>
    );
}

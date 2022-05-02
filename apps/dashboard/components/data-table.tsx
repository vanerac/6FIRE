import React from 'react';

export default function DataTable() {
    return (
        <div>
            <div className="table-wrapper">
                {/* table content */}
                <div className="table-content mt-0">
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Email</td>
                                <td>Prenom</td>
                                <td>Nom</td>
                                <td>Abonnement</td>
                                <td className="text-center">Member</td>
                                <td className="text-center">Action</td>
                            </tr>
                        </thead>

                        {/* single row */}
                        <tr>
                            <td>1002</td>
                            <td>zihadhossain88@hotmail.com</td>
                            <td>Zihad</td>
                            <td>Hosan</td>
                            <td>Intermediaire (99,00 &euro;)</td>
                            <td className="text-center">
                                <i className="far fa-check-square color-light-green"></i>
                            </td>
                            <td className="text-center">
                                <i className="fa fa-edit color-dard-blue"></i>
                            </td>
                        </tr>
                        {/* single row */}
                        <tr>
                            <td>1003</td>
                            <td>alex@6fire.com</td>
                            <td>Alex</td>
                            <td>Elodie</td>
                            <td>Intermediaire (99,00 &euro;)</td>
                            <td className="text-center">
                                <i className="far fa-check-square color-light-green"></i>
                            </td>
                            <td className="text-center">
                                <i className="fa fa-edit color-dard-blue"></i>
                            </td>
                        </tr>
                        {/* single row */}
                        <tr>
                            <td>1004</td>
                            <td>mas@6fire.com</td>
                            <td>Corentin</td>
                            <td>Mas</td>
                            <td>Intermediaire (99,00 &euro;)</td>
                            <td className="text-center">
                                <i className="far fa-check-square color-light-green"></i>
                            </td>
                            <td className="text-center">
                                <i className="fa fa-edit color-dard-blue"></i>
                            </td>
                        </tr>
                        {/* single row */}
                        <tr>
                            <td>1004</td>
                            <td>elo@6fire.com</td>
                            <td>Elo</td>
                            <td>Elodie</td>
                            <td>Intermediaire (99,00 &euro;)</td>
                            <td className="text-center">
                                <i className="far fa-check-square color-light-green"></i>
                            </td>
                            <td className="text-center">
                                <i className="fa fa-edit color-dard-blue"></i>
                            </td>
                        </tr>
                        {/* single row */}
                        <tr>
                            <td>1006</td>
                            <td>flo@6fire.com</td>
                            <td>Flo</td>
                            <td>Elodie</td>
                            <td>Intermediaire (99,00 &euro;)</td>
                            <td className="text-center">
                                <i className="far fa-check-square color-light-green"></i>
                            </td>
                            <td className="text-center">
                                <i className="fa fa-edit color-dard-blue"></i>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import Topbar from '../components/topbar';

// import { ApiClient } from '@shared/services';

// const apiClient = new ApiClient();

// get userId from params
export default function DetailsUtilisateurs($args: any) {
    // const { userId } = args.match.params;
    //
    // const [$user, setUser] = useState<User | null>(null);
    //
    // useEffect(() => {
    //     apiClient.user.getUser(userId).then(setUser);
    // }, []);

    return (
        <>
            <input type="hidden" id="anPageName" name="page" value="details-utilisateurs" />
            <div className="container-center-horizontal">
                <div className="details-utilisateurs screen">
                    <div className="analytics-HZRbSP poppins-semibold-semi-bold-mirage-24px">Profil user</div>
                    <Topbar />
                    <div className="action-HZRbSP">
                        <div className="rectangle-631-qgxb7t"></div>
                        <div className="buttons-btn-text-icon-qgxb7t">
                            <div className="type-JwwLwM"></div>
                            <div className="groupe-393-JwwLwM">
                                <div className="text-esr1x0 poppins-normal-white-14px">
                                    Sauvegarder les modifications
                                </div>
                            </div>
                        </div>
                        <div className="buttons-btn-text-icon-EpTjNE">
                            <div className="type-4P7SAH"></div>
                            <div className="groupe-393-4P7SAH">
                                <div className="text-AkvPe5 poppins-normal-white-14px">Modifier mot de passe</div>
                            </div>
                        </div>
                        <div className="buttons-btn-text-icon-62WwAe">
                            <div className="type-Ge4p3C"></div>
                            <div className="groupe-393-Ge4p3C">
                                <div className="text-z4SQUp poppins-normal-white-14px">Rendre membre l’user</div>
                            </div>
                        </div>
                        <div className="buttons-btn-text-icon-R2WAf3">
                            <div className="type-gH6Mvm"></div>
                            <div className="groupe-393-gH6Mvm">
                                <div className="text-dgBY1O poppins-normal-white-14px">Annuler l’abonnement</div>
                            </div>
                        </div>
                        <div className="buttons-btn-text-icon-57kHw3">
                            <div className="type-lwM8zb"></div>
                            <div className="groupe-393-lwM8zb">
                                <div className="text-IaFonc poppins-normal-white-14px">Supprimer</div>
                            </div>
                        </div>
                    </div>
                    <div className="donnes-users-HZRbSP">
                        <div className="rectangle-632-MylE6f"></div>
                        <div className="titre-MylE6f">
                            <div className="rectangle-633-M23Whs"></div>
                            <div className="analytics-M23Whs poppins-semibold-semi-bold-white-14px">
                                Données utilisateurs
                            </div>
                        </div>
                        <div className="email-MylE6f">
                            <img className="ligne-6-1bdPkv" src="img/ligne-6-1@1x.png" />
                            <div className="elodieelodiegmailcom-1bdPkv poppins-normal-vulcan-12px">
                                elodie.elodie@gmail.com
                            </div>
                            <div className="email-1bdPkv lato-normal-comet-10px">Email</div>
                        </div>
                        <div className="prnom-MylE6f">
                            <img className="ligne-6-6zMJUA" src="img/ligne-6-1@1x.png" />
                            <div className="elodie-6zMJUA poppins-normal-vulcan-12px">Elodie</div>
                            <div className="prnom-6zMJUA lato-normal-comet-10px">Prénom</div>
                        </div>
                        <div className="nom-MylE6f">
                            <img className="ligne-6-jdR8cG" src="img/ligne-6-1@1x.png" />
                            <div className="elodie-jdR8cG poppins-normal-vulcan-12px">Elodie</div>
                            <div className="nom-jdR8cG lato-normal-comet-10px">Nom</div>
                        </div>
                        <div className="id-fixe-MylE6f">
                            <img className="ligne-6-8RgeZL" src="img/ligne-6-10@1x.png" />
                            <div className="x1002-8RgeZL poppins-normal-tundora-12px">1002</div>
                            <div className="id-user-8RgeZL lato-normal-comet-10px">ID User</div>
                        </div>
                        <div className="numro-de-tlphone-MylE6f">
                            <img className="ligne-6-oxqCMP" src="img/ligne-6-4@1x.png" />
                            <div className="x33-france-oxqCMP poppins-normal-vulcan-12px">+ 33 (France)</div>
                            <div className="numro-de-tlphone-oxqCMP lato-normal-comet-10px">Numéro de téléphone</div>
                            <img
                                className="icon-ionic-ios-arrow-down-oxqCMP"
                                src="img/icon-ionic-ios-arrow-down-4@1x.png"
                            />
                            <img className="ligne-36-oxqCMP" src="img/ligne-36@1x.png" />
                            <div className="x77777777-oxqCMP poppins-normal-vulcan-12px">77777777</div>
                        </div>
                    </div>
                    <div className="donnes-connexion-fixe-HZRbSP">
                        <div className="rectangle-632-4DMHAN"></div>
                        <div className="titre-4DMHAN">
                            <div className="rectangle-633-3uVHyH"></div>
                            <div className="analytics-3uVHyH poppins-semibold-semi-bold-white-14px">
                                Données de connexion
                            </div>
                        </div>
                        <div className="id-fixe-4DMHAN">
                            <img className="ligne-6-r0j8WQ" src="img/ligne-6-10@1x.png" />
                            <div className="x29032022-r0j8WQ poppins-normal-tundora-12px">29/03/2022</div>
                            <div className="date-dinscription-r0j8WQ lato-normal-comet-10px">Date d’inscription</div>
                        </div>
                        <div className="email-confirm-4DMHAN">
                            <div className="email-confirm-RwSxKu poppins-normal-tundora-12px">Email confirmé</div>
                            <div className="membre-RwSxKu">
                                <img
                                    className="font-awsome-check-square-iimddl"
                                    src="img/fontawsome--check-square--10@1x.png"
                                />
                            </div>
                        </div>
                        <div className="email-confirm-lVjlAC">
                            <div className="membre-QKNEgx poppins-normal-tundora-12px">Membre</div>
                            <div className="membre-jXWcex">
                                <img
                                    className="font-awsome-check-square-a0eVIx"
                                    src="img/fontawsome--check-square--10@1x.png"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="donnes-connexion-fixe-qOAbhN">
                        <div className="rectangle-632-R7fpYY"></div>
                        <div className="titre-R7fpYY">
                            <div className="rectangle-633-54nQW9"></div>
                            <div className="analytics-54nQW9 poppins-semibold-semi-bold-white-14px">Notes</div>
                        </div>
                        <div className="email-R7fpYY">
                            <img className="ligne-6-WrwfMW" src="img/ligne-6-6@1x.png" />
                            <div className="notes-WrwfMW">Notes…</div>
                        </div>
                    </div>
                    <div className="donnes-connexion-fixe-W99T5A">
                        <div className="rectangle-632-WdAgxc"></div>
                        <div className="titre-WdAgxc">
                            <div className="rectangle-633-MesPuU"></div>
                            <div className="analytics-MesPuU poppins-semibold-semi-bold-white-14px">Abonnement</div>
                        </div>
                        <div className="historique-WdAgxc">
                            <div className="id-fixe-PMAqDf">
                                <img className="ligne-6-KMIySw" src="img/ligne-6-10@1x.png" />
                                <div className="x4999-KMIySw poppins-normal-tundora-12px">49.99 €</div>
                                <div className="prix-KMIySw lato-normal-comet-10px">Prix</div>
                            </div>
                            <div className="id-fixe-Now7yM">
                                <img className="ligne-6-wCLqt4" src="img/ligne-6-10@1x.png" />
                                <div className="intermdiaire-mensuel-wCLqt4 poppins-normal-tundora-12px">
                                    Intermédiaire (mensuel)
                                </div>
                                <div className="type-dabonnement-wCLqt4 lato-normal-comet-10px">Type d’abonnement</div>
                            </div>
                            <div className="id-fixe-HuT1cj">
                                <img className="ligne-6-fTwvxs" src="img/ligne-6-10@1x.png" />
                                <div className="x22032022-fTwvxs poppins-normal-tundora-12px">22/03/2022</div>
                                <div className="dbut-fTwvxs lato-normal-comet-10px">Début</div>
                                <img className="calendar-event-fTwvxs" src="img/calendar-event-2@1x.png" />
                            </div>
                            <div className="id-fixe-gmjb42">
                                <img className="ligne-6-rVOWJS" src="img/ligne-6-10@1x.png" />
                                <div className="x22042022-rVOWJS poppins-normal-tundora-12px">22/04/2022</div>
                                <div className="fin-rVOWJS lato-normal-comet-10px">Fin</div>
                                <img className="calendar-event-rVOWJS" src="img/calendar-event-2@1x.png" />
                            </div>
                            <div className="id-fixe-l88SYa">
                                <img className="ligne-6-lAXEoB" src="img/ligne-6-10@1x.png" />
                                <div className="nom-de-la-solution-de-paiement-lAXEoB poppins-normal-tundora-12px">
                                    Nom de la solution de paiement
                                </div>
                                <div className="type-de-transaction-lAXEoB lato-normal-comet-10px">
                                    Type de transaction
                                </div>
                            </div>
                            <div className="id-fixe-YcL251">
                                <img className="ligne-6-gNcE3g" src="img/ligne-6-10@1x.png" />
                                <div className="numro-de-la-transaction-gNcE3g poppins-normal-tundora-12px">
                                    Numéro de la transaction
                                </div>
                                <div className="transaction-id-gNcE3g lato-normal-comet-10px">Transaction ID</div>
                            </div>
                            <div className="renouvellement-PMAqDf">
                                <div className="renouvellement-iayTZL poppins-normal-tundora-12px">Renouvellement</div>
                                <img
                                    className="font-awsome-check-square-iayTZL"
                                    src="img/fontawsome--check-square--4@1x.png"
                                />
                            </div>
                            <div className="renouvellement-Now7yM">
                                <div className="actif-9tUoRx poppins-normal-tundora-12px">Actif</div>
                                <img
                                    className="font-awsome-check-square-9tUoRx"
                                    src="img/fontawsome--check-square--4@1x.png"
                                />
                            </div>
                            <div className="buttons-btn-text-icon-PMAqDf">
                                <div className="type-KzcjsI"></div>
                                <div className="groupe-393-KzcjsI">
                                    <div className="text-Pm866H poppins-normal-white-12px">Modifier la transaction</div>
                                </div>
                            </div>
                            <div className="id-fixe-T7zx1j">
                                <img className="ligne-6-e6NVNq" src="img/ligne-6-13@1x.png" />
                                <div className="x22032022-e6NVNq poppins-normal-tundora-12px">22/03/2022</div>
                                <div className="date-de-rsiliation-e6NVNq lato-normal-comet-10px">
                                    Date de résiliation
                                </div>
                            </div>
                            <img className="ligne-37-PMAqDf" src="img/ligne-37-1@1x.png" />
                        </div>
                        <div className="historique-xnlxCb">
                            <div className="id-fixe-jnbaxI">
                                <img className="ligne-6-1QbHQ4" src="img/ligne-6-10@1x.png" />
                                <div className="x4999-1QbHQ4 poppins-normal-tundora-12px">49.99 €</div>
                                <div className="prix-1QbHQ4 lato-normal-comet-10px">Prix</div>
                            </div>
                            <div className="id-fixe-KAIIRo">
                                <img className="ligne-6-4VYfsQ" src="img/ligne-6-10@1x.png" />
                                <div className="intermdiaire-mensuel-4VYfsQ poppins-normal-tundora-12px">
                                    Intermédiaire (mensuel)
                                </div>
                                <div className="type-dabonnement-4VYfsQ lato-normal-comet-10px">Type d’abonnement</div>
                            </div>
                            <div className="id-fixe-kFM9ox">
                                <img className="ligne-6-CaGNoG" src="img/ligne-6-10@1x.png" />
                                <div className="x22032022-CaGNoG poppins-normal-tundora-12px">22/03/2022</div>
                                <div className="dbut-CaGNoG lato-normal-comet-10px">Début</div>
                                <img className="calendar-event-CaGNoG" src="img/calendar-event-2@1x.png" />
                            </div>
                            <div className="id-fixe-kcYEVz">
                                <img className="ligne-6-xxHQe4" src="img/ligne-6-10@1x.png" />
                                <div className="x22042022-xxHQe4 poppins-normal-tundora-12px">22/04/2022</div>
                                <div className="fin-xxHQe4 lato-normal-comet-10px">Fin</div>
                                <img className="calendar-event-xxHQe4" src="img/calendar-event-2@1x.png" />
                            </div>
                            <div className="id-fixe-xWRxXV">
                                <img className="ligne-6-7DBk46" src="img/ligne-6-10@1x.png" />
                                <div className="nom-de-la-solution-de-paiement-7DBk46 poppins-normal-tundora-12px">
                                    Nom de la solution de paiement
                                </div>
                                <div className="type-de-transaction-7DBk46 lato-normal-comet-10px">
                                    Type de transaction
                                </div>
                            </div>
                            <div className="id-fixe-yQbOUT">
                                <img className="ligne-6-rmODzB" src="img/ligne-6-10@1x.png" />
                                <div className="numro-de-la-transaction-rmODzB poppins-normal-tundora-12px">
                                    Numéro de la transaction
                                </div>
                                <div className="transaction-id-rmODzB lato-normal-comet-10px">Transaction ID</div>
                            </div>
                            <div className="renouvellement-jnbaxI">
                                <div className="renouvellement-BduO9c poppins-normal-tundora-12px">Renouvellement</div>
                                <img
                                    className="font-awsome-check-square-BduO9c"
                                    src="img/fontawsome--check-square--4@1x.png"
                                />
                            </div>
                            <div className="renouvellement-KAIIRo">
                                <div className="actif-IQlszl poppins-normal-tundora-12px">Actif</div>
                                <img
                                    className="font-awsome-check-square-IQlszl"
                                    src="img/fontawsome--check-square--4@1x.png"
                                />
                            </div>
                            <div className="buttons-btn-text-icon-jnbaxI">
                                <div className="type-hKlhZy"></div>
                                <div className="groupe-393-hKlhZy">
                                    <div className="text-PFLi1X poppins-normal-white-12px">Modifier la transaction</div>
                                </div>
                            </div>
                            <div className="id-fixe-W1lIXB">
                                <img className="ligne-6-OcJgah" src="img/ligne-6-13@1x.png" />
                                <div className="x22032022-OcJgah poppins-normal-tundora-12px">22/03/2022</div>
                                <div className="date-de-rsiliation-OcJgah lato-normal-comet-10px">
                                    Date de résiliation
                                </div>
                            </div>
                            <img className="ligne-37-jnbaxI" src="img/ligne-37-1@1x.png" />
                        </div>
                    </div>
                    <div className="sidebar-HZRbSP">
                        <div className="shape-qZjUO2"></div>
                        <a href="parametres.html">
                            <div className="settings-qZjUO2">
                                <div className="name-k1kjd6 poppins-medium-mirage-14px">Settings</div>
                                <div className="icons-navigation-icon-12-states-k1kjd6">
                                    <img className="ic_setting-vQnJcf" src="img/ic-setting-11@1x.png" />
                                </div>
                            </div>
                        </a>
                        <a href="broker.html">
                            <div className="broker-qZjUO2">
                                <div className="name-TXW2oi poppins-medium-mirage-14px">Broker</div>
                                <img
                                    className="font-awsome-handshake-TXW2oi"
                                    src="img/fontawsome--handshake--10@1x.png"
                                />
                            </div>
                        </a>
                        <a href="crypto-wallet.html">
                            <div className="crypto-wallet-qZjUO2">
                                <div className="name-SQdl3n poppins-medium-mirage-14px">Crypto Wallet</div>
                                <img className="font-awsome-bitcoin-SQdl3n" src="img/fontawsome--bitcoin--11@1x.png" />
                            </div>
                        </a>
                        <a href="trading-crypto.html">
                            <div className="trading-crypto-qZjUO2">
                                <div className="name-972YVc poppins-medium-mirage-14px">Trading &amp; Crypto</div>
                                <img className="font-awsome-pen-972YVc" src="img/fontawsome--pen--10@1x.png" />
                            </div>
                        </a>
                        <a href="themes-articles.html">
                            <div className="thmes-articles-qZjUO2">
                                <div className="name-75RhUi poppins-medium-mirage-14px">Thèmes articles</div>
                                <div className="icons-navigation-icon-12-states-75RhUi">
                                    <img
                                        className="font-awsome-bookmark-8NHomx"
                                        src="img/fontawsome--bookmark--10@1x.png"
                                    />
                                </div>
                            </div>
                        </a>
                        <div className="customers-qZjUO2">
                            <img className="frame-PVg8qY" src="img/frame-12@1x.png" />
                            <div className="name-PVg8qY poppins-medium-blue-ribbon-14px">Utilisateurs</div>
                            <div className="line-PVg8qY"></div>
                            <div className="icons-navigation-icon-12-states-PVg8qY">
                                <img className="ic_users-pBPrbz" src="img/ic-users-7@1x.png" />
                            </div>
                        </div>
                        <a href="home.html">
                            <div className="home-qZjUO2">
                                <div className="name-ZfrFRx poppins-medium-mirage-14px">Home</div>
                                <div className="icons-navigation-icon-12-states-ZfrFRx">
                                    <img className="ic_home-LQetxB" src="img/ic-home-10@1x.png" />
                                </div>
                            </div>
                        </a>
                        <a href="articles-historique-articles.html">
                            <div className="articles-qZjUO2">
                                <div className="name-APRQSm poppins-medium-mirage-14px">Articles</div>
                                <div className="icons-navigation-icon-12-states-APRQSm">
                                    <img className="ic_invoice-yeHwFx" src="img/ic-invoice-10@1x.png" />
                                </div>
                                <img
                                    className="icon-ionic-ios-arrow-down-APRQSm"
                                    src="img/icon-ionic-ios-arrow-down-10@1x.png"
                                />
                            </div>
                        </a>
                        <a href="bot-trading.html">
                            <div className="bot-trading-qZjUO2">
                                <div className="name-MeuUx6 poppins-medium-mirage-14px">Bot Trading</div>
                                <img className="font-awsome-robot-MeuUx6" src="img/fontawsome--robot--10@1x.png" />
                            </div>
                        </a>
                        <a href="pays.html">
                            <div className="pays-qZjUO2">
                                <div className="name-Dm2IvR poppins-medium-mirage-14px">Pays</div>
                                <img
                                    className="font-awsome-globe-europe-Dm2IvR"
                                    src="img/fontawsome--globe-europe--10@1x.png"
                                />
                            </div>
                        </a>
                        <a href="abonnement-gestion-abonnements.html">
                            <div className="abonnement-qZjUO2">
                                <div className="name-eECemZ poppins-medium-mirage-14px">Abonnement</div>
                                <img
                                    className="icon-material-payment-eECemZ"
                                    src="img/icon-material-payment-10@1x.png"
                                />
                                <img
                                    className="icon-ionic-ios-arrow-down-eECemZ"
                                    src="img/icon-ionic-ios-arrow-down-10@1x.png"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

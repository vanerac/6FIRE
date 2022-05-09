import React from 'react';

interface IAbonnement {
    isMain: boolean;
    subscriptionId: number;
    name: string;
    subName?: string;
    isBestSeller?: boolean;
    price: string;
    // eslint-disable-next-line no-unused-vars
    onStartSubscription: (_subId: string, paymentProvider: 'stripe' | 'payline' | undefined) => void;
    description?: string;
    limited?: string;
    subscriptionType: string;
    level: number;
    paymentProvider?: 'stripe' | 'payline';
}

const parser = (desc: string) => {
    const lines = desc.split('\n');
    const descriptions: { key: string; value: string }[] = [];
    lines.map((line) => {
        const [icon, ...args] = line.split(' ');

        const descriptiveLine = args.join(' ');
        descriptions.push({ key: icon, value: descriptiveLine });
    });

    return descriptions;
};

const Abonnement = ({
    isMain,
    name,
    subscriptionId,
    subName = '',
    isBestSeller = false,
    price,
    onStartSubscription,
    description = '',
    limited = '',
    subscriptionType,
    level = 1,
    paymentProvider,
}: IAbonnement) => {
    const [descriptionParsed] = React.useState<{ key: string; value: string }[]>(parser(description));
    // const levelLabel = { 1: 'novice', 2: 'intermédiaire', 3: 'pro' };
    console.log(level);
    return (
        <div className={`single_table ${isBestSeller && 'active_seller'} ${isMain && 'active'}`}>
            <div className="price_head">
                <div className="title">
                    <h3>
                        {name} <span>{subName && `(${subName})`}</span>
                    </h3>
                    {isBestSeller && <button className="best-seller">BEST SELLER</button>}
                </div>
                <div className="price">
                    {price}€ <span>/mois</span>
                </div>

                <button
                    onClick={() => {
                        onStartSubscription(subscriptionId.toString(), paymentProvider);
                    }}
                    type="submit"
                    className="primary-button">
                    <span>Commencer</span>
                    <div className="right-arrow">
                        <img src="/img/icon/right-arrow.png" alt="" />
                    </div>
                </button>
                {description && subscriptionType !== 'ONETIME' ? (
                    <div className="description_wrap">
                        {limited.length !== 0 && (
                            <div className="body-title">
                                <span>{limited}</span>
                                <h5>PLACE(S) DISPONIBLE(S) UNIQUEMENT</h5>
                            </div>
                        )}
                        <ul>
                            {descriptionParsed.map((desc) => {
                                return (
                                    <li key={desc.value}>
                                        {desc.key === '+' ? (
                                            <img src="/img/icon/plus.png" alt="" />
                                        ) : (
                                            <img src="/img/icon/check.png" alt="" />
                                        )}{' '}
                                        {desc.value}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : (
                    <p>{/* &Eacute;conomisez {} euros en prenant la licence {} d&apos;un an */}</p>
                )}
            </div>

            <div className="price_footer">
                <p>Offre sans engagement, annulable à tout moment</p>
            </div>
        </div>
    );
};

export default Abonnement;

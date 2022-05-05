// import Link from 'next/link';
// import router from 'next/router';
// import checkAuth from './components/checkAuth';
import $ from 'jquery';
import LoginPopup from './login';

/* scroll off */
/* if (typeof window !== 'undefined') {
    $('.scroll_off').on('click', function () {
        if (!$('body').hasClass('overflo-y-hidden')) {
            $('body').addClass('overflo-y-hidden');
        } else {
            $('body').removeClass('overflo-y-hidden');
        }
    });
} */

/* Hamburger toggle script */
const handleForm = () => {
    $('.login_popup_wrapper').toggleClass('open');
};
/* Mobile menu toggle script */
const $mobileToggle = () => {
    $('.nav-item-wrap').toggleClass('open');
};

const IndexHeader = ($props: any) => {
    return (
        <div className="secondary-Nav-wrapper">
            <LoginPopup />

            <input id="menu__toggle" type="checkbox" />
            <label
                onClick={() => {
                    handleForm();
                }}
                className="menu__btn scroll_off invisible-mobile"
                htmlFor="menu__toggle">
                <span></span>
            </label>

            <div className="secondary-nav-top">
                <a href="./connexion">Club Privé</a>
            </div>
        </div>
    );
};
export default IndexHeader;

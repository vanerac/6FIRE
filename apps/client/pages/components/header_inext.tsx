// import Link from 'next/link';
// import router from 'next/router';
// import checkAuth from './components/checkAuth';
import $ from 'jquery';
import LoginPopup from './login';

/* scroll off */
if (typeof window !== 'undefined') {
    $('.scroll_off').on('click', function () {
        if (!$('body').hasClass('overflo-y-hidden')) {
            $('body').addClass('overflo-y-hidden');
        } else {
            $('body').removeClass('overflo-y-hidden');
        }
    });
}

/* Hamburger toggle script */
const handleForm = () => {
    $('.login_popup_wrapper').toggleClass('open');
};
/* Mobile mnue toggle script */
const $mobileToggle = () => {
    $('.nav-item-wrap').toggleClass('open');
};

/* mobile main button toggel */
if (typeof window !== 'undefined') {
    $('.mobile-hamburger').click(function () {
        $(this).css({ 'z-index': '-1', 'ponter-event': 'none' });
    });
}
if (typeof window !== 'undefined') {
    $('.nav-close-btn').click(function () {
        $('.mobile-hamburger').css({ 'z-index': '3', 'ponter-event': 'visible' });
    });
}

const IndexHeader = ($props: any) => {
    return (
        <div className="secondary-Nav-wrapper">
            <LoginPopup />

            <input id="menu__toggle" type="checkbox" />
            <label
                onClick={() => {
                    console.log('click');
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

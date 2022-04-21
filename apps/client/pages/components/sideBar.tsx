import React from 'react';
import styled from 'styled-components';

const SidebarStyled = styled.div`
    position: fixed;
    z-index: 555;
    top: 0;
    right: 0;
    width: 80%;
    background-color: #333;
    padding: 1rem;
    color: #fff;
    max-width: 550px;
    height: 100%;
    transform: translateX(${(props: { show: any }) => (props.show ? '0' : '100%')});
    transition: all 0.3s ease-in-out;
`;

const SidebarWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

const CloseIcon = styled.div`
    position: absolute;
    cursor: pointer;
    padding: 10px 35px 16px 0px;

    & span,
    & span:before,
    & span:after {
        cursor: pointer;
        border-radius: 1px;
        height: 3px;
        width: 30px;
        background: white;
        position: absolute;
        display: block;
        content: '';
    }

    & span {
        background-color: transparent;
    }

    & span:before {
        top: 0;
        transform: rotate(45deg);
    }

    & span:after {
        top: 0;
        transform: rotate(-45deg);
    }
`;

const Sidebar = (props: any) => {
    return (
        <>
            <SidebarStyled show={props.sideBarState}>
                <SidebarWrapper>
                    <CloseIcon
                        onClick={() => {
                            props.setIsOpenSideBar(false);
                            console.log('Close icon clicked, close sidebar');
                        }}>
                        <span></span>
                    </CloseIcon>
                </SidebarWrapper>
            </SidebarStyled>
        </>
    );
};

export default Sidebar;

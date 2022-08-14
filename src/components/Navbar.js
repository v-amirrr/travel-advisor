import React from 'react';

import { Autocomplete } from '@react-google-maps/api';

import { BiSearch } from 'react-icons/bi';

import styled from 'styled-components';

import { motion } from 'framer-motion';

const navbarVariants = {
    hidden: { opacity: 0, y: -20, scaleY: 0 },
    visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.5, type: 'tween', when: "beforeChildren" } },
    exit: { opacity: 0, y: -20, scaleY: 0, transition: { duration: 0.5, type: 'tween', when: "afterChildren" } }
};

const navbarChildVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'tween' } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.5, type: 'tween' } }
};

const Navbar = () => {
    return (
        <>
            <Header initial='hidden' animate='visible' exit='exit' variants={navbarVariants}>
                <HeaderTitle variants={navbarChildVariants}>
                    <img src='/img/travel-icon.png' />
                    <h1>Travel Advisor</h1>
                </HeaderTitle>

                <HeaderSearch variants={navbarChildVariants}>
                    <input autoFocus placeholder='Search...' />
                    <span>
                        <BiSearch />
                    </span>
                </HeaderSearch>
            </Header>
        </>
    );
};

const Header = styled(motion.nav)`
    position: absolute;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background: #232526;
    background: -webkit-linear-gradient(to right, #414345, #232526);
    background: linear-gradient(to right, #414345, #232526);

`;

const HeaderTitle = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-family: 'DynaPuff', cursive;
    margin-left: 1rem;
    

    h1 {
        white-space: nowrap;
        margin: 0 .4rem;
        font-size: 1.2rem;
        word-spacing: 5px;
    }

    img {
        width: 2rem;
        margin: 0 .4rem;
    }
    
    `;

const HeaderSearch = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-right: 1rem;
    position: relative;

    input {
        outline: none;
        border: none;
        padding: .4rem;
        border-radius: 6px;
        font-size: .8rem;
        font-family: 'Poppins', sans-serif;
        background-color: #111;
        border: solid 2px #ffffff00;
        transition: border .4s;

        &:focus, &:not(:placeholder-shown) {
            border: solid 3px #ffffff33;
        }
    }
    
        span {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            position: absolute;
            right: .5rem;
            font-family: 'Poppins', sans-serif;
            margin-left: .2rem;
            color: #ccc;
            z-index: 2;
            cursor: pointer;
            font-size: 1.2rem;
        }
`;

export default Navbar;
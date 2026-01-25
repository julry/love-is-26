import { FTClient } from 'ft-client';
import {createContext, useContext, useEffect, useRef, useState} from 'react'
import {screens} from "../constants/screens";
import { SCREEN_NAMES } from '../constants/screens';
import {getUrlParam} from '../utils/getUrlParam';

const INITIAL_STATE = {
    screen: SCREEN_NAMES.LOBBY,
}

const ProgressContext = createContext(INITIAL_STATE);

export function ProgressProvider(props) {
    const {children} = props;
    const isRegisratedStorage = Boolean(localStorage.getItem('isRegistered'));
    const openedCompaniesStorage = localStorage.getItem('doneCompanies') ? JSON.parse(localStorage.getItem('doneCompanies')) : [];
    const [isLandscape, setIsLandscape] = useState(false);
    const [currentScreen, setCurrentScreen] = useState(getUrlParam('screen') || INITIAL_STATE.screen);
    const [openedCompanies, setOpenedCompanies] = useState(openedCompaniesStorage);
    const [isPrizesShown, setIsPrizesShown] = useState(false);
    const [isPlayed, setIsPlayed] = useState(false);
    const [isRegistered, setIsRegistered] = useState(isRegisratedStorage);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const screen = screens[currentScreen];

    const client = useRef();
    const audioRef = useRef();

    useEffect(() => {
        const checkLandscape = () => setIsLandscape(window?.innerWidth > window?.innerHeight);

        checkLandscape();
        window.addEventListener('resize', checkLandscape);

        return () => window.removeEventListener('resize', checkLandscape);
    }, []);

    useEffect(() => {
        client.current = new FTClient(
            'https://games-admin.fut.ru/api/',
            'tree-of-love'
        );
    }, []);

    const playMusic = () => {
        audioRef.current.play().then(() => {
            setIsMusicPlaying(true);
            localStorage.setItem('music', 'on');
        })
        .catch(error => {
            console.log('Ошибка воспроизведения:', error);
        });
    }

    const handleToggleAudio = () => {
        if (isMusicPlaying) {
            audioRef.current.pause();
            setIsMusicPlaying(false);
            localStorage.setItem('music', 'off');
        } else {
            playMusic();
        }
    }

    const registrateEmail = async ({email, isMailsAgreed}) => {
        setIsRegistered(true);
        // localStorage.setItem('isRegistered', true);
       try {
            const emailUser = await client?.current.findRecord('email', email);
            if (emailUser) return;

            const record = await client?.current.createRecord({email, isMailsAgreed});
            return record; 
       } catch (e) {
            return {isError: true}
       }
    };

    function next(nextScreen) {
        setCurrentScreen(nextScreen);
    }

    const state = {
        screen,
        currentScreen,
        next,
        registrateEmail,
        isLandscape,
        openedCompanies,
        setOpenedCompanies,
        setIsPlayed,
        isPlayed,
        handleToggleAudio,
        audioRef,
        isMusicPlaying,
        isRegistered
    }

    return (
        <ProgressContext.Provider value={state}>
            {children}
        </ProgressContext.Provider>
    )
}

export function useProgress() {
    return useContext(ProgressContext)
}

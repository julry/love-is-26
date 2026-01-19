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
    const [isLandscape, setIsLandscape] = useState(false);
    const [currentScreen, setCurrentScreen] = useState(getUrlParam('screen') || INITIAL_STATE.screen);
    const [openedCompanies, setOpenedCompanies] = useState([]);
    const [isFinished, setIsFinished] = useState(false);
    const [isPlayed, setIsPlayed] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
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
            ''
        );
    }, []);

    const playMusic = () => {
        audioRef.current.play().then(() => {
            setIsMusicPlaying(true);
        })
        .catch(error => {
            console.log('Ошибка воспроизведения:', error);
        });
    }

    const handleToggleAudio = () => {
        if (isMusicPlaying) {
            audioRef.current.pause();
            setIsMusicPlaying(false);
        } else {
            playMusic();
        }
    }

    const registrateEmail = async ({email, isAdsAgreed}) => {
        setIsRegistered(true);
    //    try {
    //         const emailUser = await client?.current.findRecord('email', email);
    //         if (emailUser) return;

    //         const record = await client?.current.createRecord({email, isAdsAgreed});
    //         return record; 
    //    } catch (e) {
    //         return {isError: true}
    //    }
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
        isMusicPlaying
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

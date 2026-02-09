import { AlfaGame } from "../components/screens/AlfaGame";
import { AvitoGame } from "../components/screens/AvitoGame";
import { FTGame } from "../components/screens/FtGame";
import { LemanaGame } from "../components/screens/LemanaGame";
import { Lobby } from "../components/screens/Lobby";
import { OtpGame } from "../components/screens/OTPGame";
import { PSBGame } from "../components/screens/PsbGame";
import { VtbGame } from "../components/screens/VtbGame";
import { YandexGame } from "../components/screens/YandexGame";

export const SCREEN_NAMES = {
    LOBBY: 'LOBBY',
    AVITO: 'AVITO',
    ALFA: 'ALFA',
    VTB: 'VTB',
    FT: 'FT',
    LEMANA: 'LEMANA',
    YA: 'YA',
    PSB: 'PSB',
    OTP: 'OTP',
}

export const screens = {
    [SCREEN_NAMES.LOBBY]: Lobby,
    [SCREEN_NAMES.AVITO]: AvitoGame,
    [SCREEN_NAMES.ALFA]: AlfaGame,
    [SCREEN_NAMES.VTB]: VtbGame,
    [SCREEN_NAMES.LEMANA]: LemanaGame,
    [SCREEN_NAMES.FT]: FTGame,
    [SCREEN_NAMES.PSB]: PSBGame,
    [SCREEN_NAMES.OTP]: OtpGame,
    [SCREEN_NAMES.YA]: YandexGame,
}
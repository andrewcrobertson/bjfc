import { sanitiseString } from '../utility/sanitiseString';

export const sanitiseWithMap = (text: string, textMap: any) => sanitiseString(textMap[sanitiseString(text)]) ?? sanitiseString(text);

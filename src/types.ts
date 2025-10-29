export interface ContextType {
    d4: number;
    setD4: Function;
    d6: number;
    setD6: Function;
    d8: number;
    setD8: Function;
    d10: number;
    setD10: Function;
    d12: number;
    setD12: Function;
    take2: boolean;
    setTake2: Function;
    totalDice: number;
    maxDice: number;
}

//This shouldn't ever come up at runtime, but the compiler isn't happy without it
export const defaultContextObject: ContextType = {
    d4: 0,
    setD4: () => {},
    d6: 0,
    setD6: () => {},
    d8: 0,
    setD8: () => {},
    d10: 0,
    setD10: () => {},
    d12: 0,
    setD12: () => {},
    take2: true,
    setTake2: () => {},
    totalDice: 0,
    maxDice: 0,
}

export type DieType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12';

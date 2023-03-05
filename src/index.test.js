import { getMonth } from "./index";

describe('number should be in [1] to [12] (success)', () => {
    it('number should be >= 1', () => {
        let result = getMonth(2);
        expect(result).toBe('февраль');
    })
})

describe('number should be more than 12 or less than 1 (error)', () => {
    it('number should be less than 1', () => {
        let result = getMonth(0);
        expect(result).toBe('неизвестно');
    }),

    it('number should be more than 12', () => {
        let result = getMonth(13);
        expect(result).toBe('неизвестно');
    })
})
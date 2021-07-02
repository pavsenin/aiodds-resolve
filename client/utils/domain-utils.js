export const Outcomes = Object.freeze({
    UNK: 'unk',
    O1: 'o1',
    O0: 'o0',
    O2: 'o2'
});

export const getOutcomeTitle = out => {
    if (out === Outcomes.O1)
        return 'Home';
    if (out === Outcomes.O0)
        return 'Draw';
    if (out === Outcomes.O2)
        return 'Away';
    return 'Unknown';
}
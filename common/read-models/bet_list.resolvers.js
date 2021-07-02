export default {
    bets: async(store, { eventId } ) => {
        return await store.find('Bets', { eventId: eventId }, null, null);
    }
}

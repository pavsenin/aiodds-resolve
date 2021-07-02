export default {
    event: async(store, { id }) => {
        return await store.findOne('Events', { id });
    },
    allEvents: async(store) => {
        return await store.find('Events', {}, null, { createdAt: -1 });
    }
}

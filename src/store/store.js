import { configureStore } from '@reduxjs/toolkit';
 
export const makeStore = () => {
    return configureStore({
        reducer: {
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: ['products/uploadImage/pending'],
                },
            }),
    });
};
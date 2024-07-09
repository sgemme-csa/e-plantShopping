import { createSlice } from '@reduxjs/toolkit';

export const CreatSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
        visible: false,
    },
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            console.log(`Adding item ${name}`)
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ name, image, cost, quantity: 1 });
            }
            console.log(`Items in cart: ${state.items.length}`);
        },
        removeItem: (state, action) => {
            console.log(`Removing ${JSON.stringify(action)}`);
            state.items = state.items.filter(item => item.name !== action.payload.name);
        },

        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.name === name);
            console.log(`${JSON.stringify(itemToUpdate)}`);
            console.log(`Payload ${quantity}`)
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
                console.log(`New object: ${JSON.stringify(itemToUpdate)}`);
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CreatSlice.actions;

export default CreatSlice.reducer;

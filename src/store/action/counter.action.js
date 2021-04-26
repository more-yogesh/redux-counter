export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT'

export const incrementHandler = () => {
    return { type: INCREMENT }
}

export const decrementHandler = () => {
    return { type: DECREMENT }
}
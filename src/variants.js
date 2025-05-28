export const fadeIn = (direction,delay,curr) =>{
    return {
        hidden: {
            y : direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
            x : direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
            opacity : 0,
        },
        show : {
            y: 0,
            x: 0,
            opacity : 1,
            transition: {
                type: 'tween',
                duration: 0.5,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}
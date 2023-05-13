function start(){
    const ball1 = new Ball({
    color: 'red',
    speed: 30,
    controls: {
        left: 'ArrowLeft',
        right: 'ArrowRight',
        up: 'ArrowUp',
        down: 'ArrowDown'
    },
})

const ball2 = new Ball({
    color: 'yellow',
    speed: 30,
    controls: {
        left: 'KeyA',
        right: 'KeyD',
        up: 'KeyW',
        down: 'KeyS'
    },
})
}
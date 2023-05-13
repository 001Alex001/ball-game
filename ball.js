class Ball {
    constructor(obj) {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        document.body.appendChild(ball);
        this.ball = ball;
        ball.style.background = obj.color;
        this.speed = obj.speed;
        this.controls = obj.controls;
        this.left = 0;
        this.top = 0;
        this.initListeners();
    }
    moveRight() {
        this.left += this.speed;
        this.ball.style.left = this.left + 'px';
    }
    moveLeft() {
        this.left -= this.speed;
        this.ball.style.left = this.left + 'px';
    }
    moveUp() {
        this.top -= this.speed;
        this.ball.style.top = this.top + 'px';
    }
    moveDown() {
        this.top += this.speed;
        this.ball.style.top = this.top + 'px';
    }
    initListeners() {
        document.addEventListener('keydown', (event) => {
            switch (event.code) {
                case this.controls.right:
                    this.moveRight();
                    break;
                case this.controls.left:
                    this.moveLeft();
                    break;
                case this.controls.up:
                    this.moveUp();
                    break;
                case this.controls.down:
                    this.moveDown();
                    break;
                default:
            }
        })
    }
}
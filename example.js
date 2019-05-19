var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            debug: true,
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var block;
var ground;
var inputs;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
    this.load.image('platform', 'assets/sprites/platform.png');
}

function create ()
{
    inputs = this.input.keyboard.createCursorKeys();
    block = this.matter.add.image(50, 0, 'block');

    block.setFrictionAir(0.001);
    block.setBounce(0.6);

    ground = this.matter.add.image(400, 400, 'platform', null, { isStatic: true });
    ground.setScale(2, 0.5);
    ground.setAngle(10);
    ground.setFriction(0);
}

function update ()
{
    if (block.y > 600)
    {
        block.setPosition(50, 0);
        block.setVelocity(0, 0);
    }
    
    if (inputs.left.isDown) {
        ground.setAngle(-20);
    }

    if (inputs.left.isUp) {
        ground.setAngle(10);
    }
}
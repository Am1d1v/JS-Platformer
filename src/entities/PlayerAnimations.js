

export default (anims) => {

    // Player's idle animation
    anims.create({
        key: 'idle',
        frames: anims.generateFrameNumbers('playerMoveSprite', {
            start: 0,
            end: 8
        }),
        frameRate: 10,
        repeat: -1
    });

    // Player's movement animation
    anims.create({
        key: 'run',
        frames: anims.generateFrameNumbers('playerMoveSprite', {
            start: 11,
            end: 15
        }),
        frameRate: 10,
        repeat: -1
    });

    // Player's jump animation
    anims.create({
        key: 'jump',
        frames: anims.generateFrameNumbers('playerMoveSprite', {
            start: 17,
            end: 23
        }),
        frameRate: 10,
        repeat: -1
    });

};
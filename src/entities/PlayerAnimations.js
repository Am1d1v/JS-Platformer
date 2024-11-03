

export default (anims) => {

    // Player's movement aniamtion
    anims.create({
        key: 'run',
        frames: anims.generateFrameNumbers('playerMoveSprite', {
            start: 11,
            end: 15
        }),
        frameRate: 10,
        repeat: -1
    });

};
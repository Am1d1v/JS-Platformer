

export default {
    // Set collision between player and object
    addCollider(collidingObject, callback){
        this.scene.physics.add.collider(this, collidingObject, callback, null, this);
    }
}
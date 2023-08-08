scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.gameOver(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 f f f f f 2 . . . . . . 
    . . 2 f 2 1 2 1 2 f 2 . . . . . 
    . . 2 f 1 2 1 2 1 f 2 . . . . . 
    . . 2 2 f f f f f 2 2 . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 4 f 4 4 f 4 4 . . . . . . 
    . . . 3 4 4 4 4 4 3 . . . . . . 
    . . . 4 f 4 4 f 4 4 . . . . . . 
    . . . . 4 f f 4 4 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleBlueCrystal)

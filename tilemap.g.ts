// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000203040303030303030303030303030508010101010101010910010106010107080109011001090101010901011001060901090303030303050405010303030608010901010101010601060101010106080109011001010106010603030501070901090102030501060106010106010608100901090106010101060110060106090109010101060106100601010d010708010a0c0c0c0d01060106010101010609010101010110010601060c0b0c0106080102030303030305010601010101070901090101010101060106011002030608010a01060110010110060101010f0609010e010601010106010614111213060a0b0b0c0c0c0b0b0b0c0c0b0c0c0b0d`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . 2 . . . 2 . . 2 
2 . 2 . . . 2 . . . 2 . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 
2 . 2 . . . . . 2 . 2 . . . . 2 
2 . 2 . . . . . 2 . 2 2 2 2 . 2 
2 . 2 . 2 2 2 . 2 . 2 . . 2 . 2 
2 . 2 . 2 . 2 . . . 2 . . 2 . 2 
2 . 2 . . . 2 . 2 . 2 . . 2 . 2 
2 . 2 2 2 2 2 . 2 . 2 . . . . 2 
2 . . . . . . . 2 . 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 . 2 . . . . 2 
2 . 2 . . . . . 2 . 2 . . 2 2 2 
2 . 2 . 2 . . . . . 2 . . . . 2 
2 . . . 2 . . . 2 . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.floorDark5,sprites.builtin.crowd1,sprites.builtin.crowd2,sprites.builtin.crowd3,sprites.builtin.crowd0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

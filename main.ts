scene.onOverlapTile(SpriteKind.Player, myTiles.transparency16, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010101030000010000000000030100010101010100010100000101010101010101030101000001010101000000000001010001000100010001010001010100010100010100000100010000010001000101000100000000000100010100010001010000000101010101000001000100010100010001000000000000010001000101000100010001010101000100010001010101000100010003010001010100010100010001000100010000010001000101000000010001000000000100010001010001000101010001010101010100010100010000000000000301000000020101010101010101010101010101010101`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 . . . 2 . . . . . . 2 . 2 
        2 2 2 2 . 2 2 . . 2 2 2 2 2 2 2 
        2 . 2 2 . . 2 . 2 2 . . . . . 2 
        2 . 2 . 2 . 2 . 2 2 . 2 2 2 . 2 
        2 . 2 2 . . 2 . 2 . . 2 . 2 . 2 
        2 . 2 . . . . . 2 . 2 2 . 2 . 2 
        2 . . . 2 2 2 2 2 . . 2 . 2 . 2 
        2 . 2 . 2 . . . . . . 2 . 2 . 2 
        2 . 2 . 2 . 2 2 2 2 . 2 . 2 . 2 
        2 2 2 . 2 . 2 . . 2 . 2 . 2 . 2 
        2 . 2 . 2 . 2 . 2 . . 2 . 2 . 2 
        2 . . . 2 . 2 . . . . 2 . 2 . 2 
        2 . . . 2 2 2 . 2 2 2 2 2 2 . 2 
        2 . 2 . . . . . . . 2 . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.chestClosed], TileScale.Sixteen))
    scene.setBackgroundImage(img`
        7777777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        7777777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        7777777777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        7777777777777777777777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        7777777777777777777777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        7777777777777777777777777888888888888888888888888888888988888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        7777777777777777777777777888888888888888888888888888888988888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        7777777777777777777777777888888888888888888888888888888988888888888888888888988888888888888888888888888888888888888888888888888888888888888888888888888888888888
        7777777777777777777777777888888888888888888888888888888988888888888888888888988888888888888888888888888888888888888888888888888888988888888888888888888888888888
        7777777777777777777777777788888888888888888888888888888988888888888888888888898888888888888888888888888888888888888888888888888888988888888888888888888888888888
        7777777777777777777777777788888888888888888888888888888988888888888888888888889888888888888888888888888888888888888888888888888888988888888888888888888888888888
        7777777777777777777777777778888888888888888888888888888988888888888888888888889888888888888888888888888888888888888888888888888888988888888888888888888888888888
        7777777777777777777777777778888888888888888888888888888988888888888888888888888988888888888888888888888888888888888888888888888888898888888888888888888888888888
        7777777777777777777777777778888888888888888888888888889888888888888888888888888988888888888888888888888888888888888888888888888888889888888888888888888888888888
        7777777777777777777777777778888888888888888888888888898888888888888888888888888988888888888888888888888888888888888888988888888888889888888888888888888888888888
        7777777777777777777777777778888888888888888888888889988888888888888888888888889888888888888888888888888888888888888888898888888888888988888888888888888888888888
        7777777777777777777777777778888888888888888888888898888888888888888888888888889888888888888888888888888888888888888888898888888888888898888888888888888888888888
        7777777777777777777777777778888888888888888888888988888888888888888888888888898888888888888888888888888888888888888888889888888888888889888888888888888888888888
        7777777777777777777777777778888888888888888888888988888888888888888888888888898888888888888888888888888888888888888888889888888888888889888888888888888888888888
        7777777777777777777777777777888888888888888888888888888888888888888888888888898888888888888888888888888888888888888888889888888888888888988888888888888888888888
        7777777777777777777777777777888888888888888888888888888888888888888888888888898888888888888888888888889888888888888888888988888888888888988888888888888888888888
        7777777777777777777777777777888888888888888888888888888888888888888888888888898888888888888888888888889888888888888888888988888888888888898888888888888888888888
        7777777777777777777777777777888888888888888888888888888888888888888888888888898888888888888888888888889888888888888888888988888888888888888888888888888888888888
        7777777777777777777777777777888888888888888888888888888888888888888888888888898888888888888888888888889888888888888888888988888888888888888888888888888888888888
        7777777777777777777777777777788888888888888888888888888888888888888888888888898888888888888888888888889888888888888888888898888888888888888888888888888888888888
        7777777777777777777777777777788888888888888888888888888888888888888888888888888888888888888888888888889888888888888888888898888888888888888888888888888888888888
        7777777777777777777777777777788888888888888888888888888888888888888888888888888888888888888888888888889888888888888888888889888888888888888888888888888888888888
        7777777777777777777777777777788888888888888888888888888888888889888888888888888888888888888888888888889888888888888888888888988888888888888888888888888888888888
        7777777777777777777777777777788888888888888888888888888888888889888888888888888888888888888888888888889888888888888888888888988888888888888888888888888888888888
        7777777777777777777777777777788888888888888888888888888888888889888888888888888888888888888888888888889888888888888888888888888888888888888888888888888888888888
        7777777777777777777777777777778888888888888888888888888888888889888888888888888888888888888888888888889888888888888888888888888888888888888888888888888888888888
        7777777777777777777777777777778888888888888888888888888888888888988888888888888888888888888888888888889888888888888888888888888888888888888888888888888888888888
        7777777777777777777777777777778888888888888888888888888888888888988888888888888888888888888888888888889888888888888888888888888888888888888888888888888887777777
        7777777777777777777777777777778888888888888888888888888888888888988888888888888888888888888888888888889888888888888888888888888888888888888888888888877777777777
        7777777777777777777777777777778888888888888888888888888888888888898888888888888888888888888888888888889888888888888888888888888888888888888888877777777777777777
        7777777777777777777777777777778888888888888888888888888888888888898888888888888888888888888888888888889888888888888888888888888888888888888877777777777777777777
        7777777777777777777777777777778888888888888888888888888888888888898888888888888888888888888888888888889888888888888888888888888888888888777777777777777777777777
        7777777777777777777777777777778888888888888888888888888888888888898888888888888888888888888888888888889888888888888888888888888888888777777777777777777777777777
        7777777777777777777777777777778888888888888888888888888888888888889888888888888888888888888888888888889888888888888888888888888888877777777777777777777777777777
        7777777777777777777777777777778888888888888888888888888888888888889888888888888888888888888888888888889888888888888888888888888888777777777777777777777777777777
        7777777777777777777777777777778888888888888888888888888888888888889888888888888888888888888888888888889888888888888888888888888877777777777777777777777777777777
        7777777777777777777777777777778888888888888888888888888888888888889888888888888888888888888888888888889888888888888888888888888777777777777777777777777777777777
        7777777777777777777777777777778888888888888888888888888888888888889888888888888888888888888888888888888988888888888888888888887777777777777777777777777777777777
        7777777777777777777777777777778888888888888888888888888888888888889888888888888888888888888888888888888888888888888888888888877777777777777777777777777777777777
        7777777777777777777777777777777888888888888888888888888888888888889888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777
        7777777777777777777777777777777888888888888888888888888888888888889888888888888888888888888888888888888888888888888888888887777777777777777777777777777777ff7777
        7777777777777777777777777777777888888888888888888888888888888888889888888888888888888888888888888888888888888888888888888877777777777777777777777777777777ff7777
        777777777777777777777777777777788888888888888888888888888888888888988888888888888888888888888888888888888888888888888888887777777777777777777777777777777ffff777
        77777777777777777777777777777778888888888888888888888888888888888898888888888888888888888888888888888888888888888888888887777777777777777777777777777777ffffff77
        77777777777777777777777777777778888888888888888888888888888888888898888888888888888888888888888888888888888888888888888877777777777777777777777777777777faaaaf77
        77777777777777777777777777777778888888888888888888888888888888888898888888888888888888888888888888888888888888888888888877777777777777777777777777777777faaaaf77
        77777777777777777777777777777778888888888888888888888888888888888898888888888888888888888888888888888888888888888888888877777777777777777777777777777777faaaaff7
        7777777777777777777777777777777888888888888889988888888888888888889888888888888888888888888888888888888888888888888888877777777777777777777777777777777ffaaaaaf7
        77777777777777777777777777777778888888888888898888888888888888888898888888888888888888888888888888888888888888888888888777777777777777777777777777777ffaaaaaaaff
        777777777777777777777777777777788888888888888988888888888888888888988888888888888888888888888888888888888888888888888877777777777777777777777777777ffaaaaaaaaaaf
        7777777777777777777777777777777888888888888889888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777fff77faaaaaaffaaaa
        7777777777777777777777777777777888888888888889888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777faf77faaaaafaffaaa
        7777777777777777777777777777777888888888888889888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777faff7faaaaafaafaaa
        7777777777777777777777777777777888888888888889888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777faaf7faaaafaaaaaaa
        7777777777777777777777777777777888888888888889888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777faaffaaaafaaaaffaa
        7777777777777777777777777777777888888888888898888888888888888888888888888888888898888888888888888888888888888888888888777777777777777777777777faaffaaaafaaaaaaff
        7777777777777777777777777777777888888888888898888888888888888888888888888888888898888888888888888888888888888888888888777777777777777777777777faafaaaafaaaaaaaaa
        7777777777777777777777777777777888888888888898888888888888888888888888888888888988888888888888888888888888888888888888777777777777777777777777faafaaaaaaaaaaaaaa
        7777777777777777777777777777777888888888888898888888888888888888888888888888889888888888888888888888888888888888888888777777777777777777777777faaaaaaaaaaaaffffa
        777777777777777777777777777777788888888888889888888888888888888888888888888888988888888888888888888888888888888888888877777777777777777777777ffaaaaaaaaaaaafaafa
        777777777777777777777777777777788888888888889888888888888888888888888888888889888888888888888888888888888888888888888877777777777777777777777faaaaafffaaaaaaaaff
        777777777777777777777777777777788888888888889888888888888888888888888888888898888888888888888888888888888888888888888877777777777777777777777faaaaffafaaaaafaaaf
        77777777777777777777777777777778888888888889888888888888888888888888888888889888888888888888888888888898888888888888887777777777777777777777faaaafaaafaaaaaaaaaf
        77777777777777777777777777777778888888888889888888888888888888888888888888889888888888888888888888888898888888888888887777777777777777777777faaaafaaafaaaaaaaaaa
        77777777777777777777777777777778888888888889888888888888888888888888888888889888888888888888888888888889888888888888887777777777777777777777faaaaaaaaffaaaaaaaaa
        77777777777777777777777777777788888888888889888888888888888888888888888888889888888888888888888888888888988888888888887777777777777777777777faaaaaaaaaaaaeeeeeaa
        77777777777777777777777777777788888888888889888888888888888888888888888888889888888888888888888888888888988888888888887777777777777777777777faaaaaaaaaaaaeeeeeaa
        77777777777777777777777777777788888888888898888888888888888888888888888888889888888888888888888888888888898888888888887777777777777777777777faaaaaaaaaaaaeeeeeaa
        77777777777777777777777777777788888888888888888888888888888888888888888888889888888888888888888888888888898888888888887777777777777777777777faaaaaaaaaaaaeeeeeaa
        7777777777777777777777777777778888888888888888888888888888888888888888888889888888888888888888888888888889888888888888777777777777777777777fffaaaaaaaaaaaeeee5aa
        777777777777777777777777777777888888888888888888888888888888888888888888888988888888888888888888888888888988888888888877777777777777777777777ffffffaaaaaaeeeeeaa
        777777777777777777777777777777888888888888888888888888888888888888888888889888888888888888888888888888888988888888888877777777777777777777777777777ffffaaeeeeeaa
        7777777777777777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888889888888888888777777777777777777777777777777777fffffffff
        7777777777777777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888988888888888777777777777777777777777777777777777777777
        7777777777777777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777
        7777777777777777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777
        7777777777777777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777
        7777777777777777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777
        7777777777777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777
        7777777777777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777
        7777777777777777777777777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777777777777777777
        7777777777777777777777777778888888888888888888888888888888888888888888888888888888888889888888888888888888888888888888777777777777777777777777777777777777777777
        7777777777777777777777777778888888888888888888888888888888888888888888888888888888888888988888888888888888888888888888877777777777777777777777777777777777777777
        7777777777777777777777777778888888888888888888888888888888888888888888888888888888888888988888888888888888888888888888877777777777777777777777777777777777777777
        7777777777777777777777777778888888888888888888888888888888888888888888888888888888888888898888888888888888888888888888887777777777777777777777777777777777777777
        7777777777777777777777777778888888888888888888888888888888888888888888888888888888888888889888888888888888888888888888888877777777777777777777777777777777777777
        7777777777777777777777777778888888888888888888888888888888888888888888888888888888888888889888888888888888888888888888888887777777777777777777777777777777777777
        7777777777777777777777777778888888888888888888888888888888888888888888888888888888888888889888888888888888888888888888888887777777777777777777777777777777777777
        7777777777777777777777777778888888888888888888888888888888888888888888888888888888888888889888888888888888888888888888888887777777777777777777777777777777777777
        7777777777777777777777777778888888888888888888888888888898888888888888888888888888888888889888888888888888888888888888888888777777777777777777777777777777777777
        7777777777777777777777777788888888888888888888888888888898888888888888888888888888888888888988888888888888888888888888888888877777777777777777777777777777777777
        7777777777777777777777777788888888888888888888888888888898888888888888888888888888888888888988888888888888888888888888888888887777777777777777777777777777777777
        7777777777777777777777777888888888888888888888888888888898888888888888888888888888888888888898888888888888888888888888888888888877777777777777777777777777777777
        7777777777777777777777777888888888888888888888888888888898888888888888888888888888888888888898888888888888888888888888888888888887777777777777777777777777777777
        7777777777777777777777778888888888888888888888888888888898888888888888888888888888888888888889888888888888888888888888888888888888877777777777777777777777777777
        7777777777777777777777778888888888888888888888888888888898888888888888888888888888888888888888988888888888888888888888888888888888887777777777777777777777777777
        7777777777777777777777788888888888888888888888888888888898888888888888888888888888888888888888988888888888888888888888888888888888888777777777777777777777777777
        7777777777777777777777788888888888888888888888888888888889888888888888888888888888888888888888898888888888888888888888888888888888888887777777777777777777777777
        7777777777777777777777788888888888888888888888888888888889888888888888888888888888888888888888988888888888888888888888888888888888888888877777777777777777777777
        7777777777777777777777788888888888888888888888888888888889888888888888888888888888888888888888988888888888888888888888888888888888888888888777777777777777777777
        7777777777777777777777888888888888888888888888888888888888988888888888888888888888888888888888988888888888888888888888888888888888888888888877777777777777777777
        7777777777777777777777888888888888888888888888888888888888988888888888888888888888888888888888988888888888888888888888888888888888888888888888877777777777777777
        7777777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888988888888888888888888888888888888888888888888888888877777777777777
        7777777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888898888888888888888888888888888888888888888888888888888888888888888
        7777777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888988888888888888888888888888888888
        7777777777777777777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888899888888888888888888888888888888
        7777777777777777777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888998888888888888888888888888888
        7777777777777777777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889888888888888888888888888888
        7777777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888988888888888888888888888888
        7777777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888898888888888888888888888888
        7777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889888888888888888888888888
        7777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889888888888888888888888888
        7777777777777777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888988888888888888888888888
        7777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888988888888888888888888888
        7777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888898888888888888888888888
        `)
})
let Bob: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`32000a000404040404030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303050303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030305030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030503030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303050303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030305030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030503030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303040404040403030303030303030303030303030303030303030303030303030303030303030303030303030303030303030301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
    22222.............................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    22222.............................................
    22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen))
scene.cameraFollowSprite(Bob)
Bob = sprites.create(img`
    . . . . . . 1 6 7 7 7 . . . . . 
    . . . . 1 1 6 7 7 7 7 7 7 . . . 
    . . . 1 6 6 6 7 7 7 7 7 7 7 . . 
    . 1 1 6 6 7 7 7 7 7 7 7 7 7 7 7 
    . . . d 1 f d d d d d 1 f d . . 
    . . d d d d d d d d d d d d d . 
    . . . d d d d d d d d d d d . . 
    . . . d d d d d d d d d d d . . 
    . . . . d d 1 1 1 1 1 d d . . . 
    . . . . . d d d d d d d . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . 6 6 7 7 7 6 6 . . . . 
    . . . . . 6 . 7 . 7 . 6 . . . . 
    . . . . . . . 7 . 7 . . . . . . 
    . . . . . . 7 7 . 7 7 . . . . . 
    `, SpriteKind.Player)
Bob.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(Bob)
let WiseDude = sprites.create(img`
    . . . . . . . f . . . . . . . . 
    . . . . . . e e f e . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . 1 1 d d d . . . . . . 
    . . . . . . d d 1 f . . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . . d d d 1 . . . . . . 
    . . . . . . 8 8 1 1 . . . . . . 
    . . . . . 8 8 8 8 1 1 . e e e . 
    . . . . . 8 8 f 8 8 1 . f e . . 
    . . . . . f f f 8 f f f f e . . 
    . . . . . 8 8 8 8 8 8 . . e . . 
    . . . . . f f f f f f . . e . . 
    . . . . . 6 6 6 6 6 6 . . e . . 
    . . . . . 6 6 . . 6 6 . . e . . 
    . . . . 6 6 6 . . 6 6 6 . e . . 
    `, SpriteKind.Player)
let Lochness_Monster = sprites.create(img`
    ........................................
    ........................................
    ..........................fffff.........
    .........................f77777f........
    ........................f777fff.........
    .......................f777f............
    ......................f777f.............
    ......................f77f..............
    .....................f77f...............
    .....................f77f...............
    .....................f77f...............
    .....................f777f..............
    ......................f77f..............
    .......................f77f.............
    .......................f77f.............
    .......................f77f.............
    ...fffffffff...........f77f.............
    ..f777777777ff........f77f..............
    .f777777777777f......f77f...............
    f77777777777777f....f77f................
    8899989889999998888888889888888889998888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888889988888888998888888888888888888888
    8998899999888899988888888888888888888888
    8899998889999998888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888999998888888888888
    8888888888888888888889988899988888888888
    8888888888888888888899888888999999998888
    8888888888888888889998888888888888888888
    8888888888888889999888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888889988888888888888888888888
    8888888888888999899988888888888888888888
    8888888888899988888899988888888888888888
    8888999999988888888888999999999988888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    `, SpriteKind.Enemy)
let Earth_Monster = sprites.create(img`
    7 7 7 7 7 7 6 6 6 6 7 7 6 6 6 6 
    7 7 7 7 7 6 6 6 6 6 6 7 6 6 6 6 
    7 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 
    7 7 7 7 7 7 6 6 7 7 7 7 7 6 7 7 
    7 7 7 7 6 6 6 7 7 6 6 7 7 7 7 7 
    7 6 6 7 6 6 6 7 7 6 6 6 7 7 7 7 
    6 6 6 6 6 6 7 7 7 6 6 6 7 7 7 7 
    7 6 7 7 7 7 7 7 6 6 6 6 6 7 6 6 
    7 6 7 7 7 7 7 7 7 7 7 7 7 7 6 6 
    7 6 7 6 6 7 7 7 7 7 7 7 7 7 6 7 
    6 6 6 6 7 7 6 7 7 6 6 6 6 6 6 7 
    6 6 6 7 7 6 6 6 6 7 6 6 6 6 7 7 
    7 6 6 6 6 6 6 6 6 6 7 6 6 6 6 7 
    7 7 7 6 6 7 6 7 7 7 6 6 6 6 7 7 
    7 7 7 7 7 7 6 6 7 7 6 6 6 7 7 7 
    7 7 7 7 7 7 7 6 6 7 7 6 6 7 7 7 
    `, SpriteKind.Enemy)
let Maze_Monster = sprites.create(img`
    .....dd.......d.....d.........
    ....e.dd.eee.d.....d.ee.......
    ....eeedeeeedd.eeedebee.......
    .....eebeeeebeeeeeeebe........
    .....eeebeeebeeeeebbee........
    ......eebeeebeeeebebe.........
    ......ebeeeebeeebeeeb.........
    .....ebe1ffeebeb1ffeee........
    ....efe1ffffeee1ffffefe.......
    ....efeff1ffeeeff1ffefe.......
    ....efefffffeeefffffefe.......
    .....eeefffeeeeefffeee........
    ......eeeeeeeeeeeeeee.........
    ......eeeeeeeeeeeeeee.........
    ......efeeeeeeeeeeefe.........
    .....eeffeeeeeeeeeffe.........
    .....eef1ffeeeeeff1fe.........
    .....eef111fffff111fe.........
    ....eeefc1cc1cc111cfeee.......
    .eeeeeeeffc111cc1ffeeeeeee....
    e..ee.eeeeff11cffeeee.ee..e...
    ..e.e.eeeeeefffeeeeee.e.e.....
    ..e...eeeeeeeeeeeeeee...e.....
    ......eeeeeeeeeeeeeee.........
    ......eeeeeeeeeeeeeee.........
    ......eeeeeeeeeeeeeee.........
    ......eeeeee...eeeeee.........
    ......eeeeee...eeeeed.........
    ......ee666e...e666de.........
    ......6d6666...666666.........
    `, SpriteKind.Enemy)
let Air_Monster = sprites.create(img`
    ......bbbbbbb.......
    .....bbbbbbbbb......
    ....bcbbbbbbbcb.....
    ...bcccbbbbbcccb....
    ..bccaccbbbccaccb...
    ..bbcccbbbbbcccbb...
    ..bbbcbbbbbbbcbbb...
    ..bfbbbbbbbbbcffb...
    ..bfffbbbbbbbfcfb...
    ..bfccfbbbbffccfb...
    ..bbfccffffcccfbb...
    ...bfcccccccccfc....
    ....bfcccccccfc.....
    .bbb.bffcccffc.bbb..
    b.b.b.bbfffbc.b.b.b.
    .......bbbbc........
    ........bbc.........
    .........bc.........
    .........b..........
    .........c..........
    `, SpriteKind.Enemy)
let Fire_Monster = sprites.create(img`
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    .....................4444444........
    ....................455555554.......
    ...................45ff555ff54......
    ..................45555f5f55554.....
    ..................455ff5555ff54.....
    ..................455ff5555ff54.....
    ..................4555555555554.....
    ..................4555555555554.....
    ..................4555ffffff554.....
    ..................4555f1111f554.....
    ...................4555f11f554......
    ....................4555ff554.......
    .....................4444444........
    ....................................
    .................44...........44....
    ................4554..44444..4554...
    ................4554.4555554.4554...
    ................4554.4555554.4554...
    ...............2.44..4555554..44.2..
    ...............2.....4555554........
    ...............2.....4555554.....2..
    ......................44444......2..
    ...............2.................2..
    ...................44.......44......
    ...............2..4554.....4554..2..
    ..................4554.....4554.....
    ..................2442......442.....
    ..................2.2.2.......2.....
    .............................2......
    ..................2.22.......2......
    ..............................2.....
    ..................2..........22.....
    ..................2..2..............
    ....................2........22.....
    ..............................2.....
    .....................2.......2......
    ....................................
    ....................2...............
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    `, SpriteKind.Player)
Fire_Monster.startEffect(effects.fire)
WiseDude.setPosition(78, 103)
Air_Monster.setPosition(21, 40)
Earth_Monster.setPosition(118, 40)
Lochness_Monster.setPosition(33, 80)

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
})
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111199999999999999999999999999999999999999999999995555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111999999999999999999999999999999999999999995555555555555555555
    9999999999999999999999999999999999999999999999999999999999999999999999991111999999911111111111111111119999999999999999999999999999999999999955555555555555555555
    999999999999999999999999999999999999999999999999999999999999999999999911111111119991111111111111bbb1111999999999999999999999999999999999999955555555555555444444
    99999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111bb111199999999999999999999999999999999999955555555555444444444
    999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111bbb1111111999999999999999999999999999999555555555554444444444
    9999999999999999999999999111111111999999999999999999999999999999999911111111111111111111111111111111111111111119999999999999999999999999999555555555544444444444
    99999999999999999999999111111111111199999911111119999999999999999991111b1111111111111111111111111111111111111111999999999999999999999999995555555555444444444444
    99999999999991111111111111111111111119991111111111199999999999999991111b1111111111111111111111111111111111111111999999999999999999999999955555555554444444444444
    99999999999111111111111111111111111111911111111111119999999999999991111b1111111111111111111111111111111111111111199999999999999999999995555555555544444444444444
    99999999991111111111111111111111111111111111111111119999999999999991111b1111111111111111111111111111111111111111199999999999999999995555555555555444444444444444
    99999999911111111111111111111111111111111111111111111111999999999991111b11111111111111111111111111111111111111bb199999999999999999995555555555555444444444444444
    99999999911111111111111111111111111111111111111111111111199999999991111b11111111111111111111111111111111111111bb199999999999999999999555555555555444444444444444
    99999999111bb1111111111111111111111111111111111111111111119999999991111b11111111111111111111111111111111111111b1199999999999999999999955555555554444444444444444
    9999999911bb11111111111111111111111111111111111111111111111999999991111b11111111111111111111111111111111111111b1199999999999999999999995555555554444444444444444
    9999999911b111111111111111111111111111111111111111111111111199999999111bb111111111111111111111111111111111111bb1199999999999999999999995555555554444444444444444
    9999999911b1111111111111111111111111111111111111111111111111999999991111b11111111111111111111111111111111111bb11999999999999999999999999555555554444444444444444
    9999999911b11111111111111111111111111111111111111111111111119999999991111b11111111111111111111111111111111bbb119999999999999999999999999955555554444444444444444
    9999999911b11111111111111111111111111111111111111111111111119999999999111bbb1111111111111111111111111111bbb11999999999999999999999999999995555554444444444444444
    9999999911b11111111111111111111111111111111111111111111b1119999999999991111bbb1111111111111111111111111119999999999999999999999999999999995555554444444444444444
    9999999911b11111111111111111111111111111111111111111111b11199999999999999111111111111bbbbb1199999999999999999999999999999999999999999999999555554444444444444444
    9999999911bb1111111111111111111111111111191111111111111b11199999999999999999999999999999999999999999999999999999999999999999999999999999999555554444444444444444
    99999999911bb11111111111111111111111b11199911111111111bb11999999999999999999999999999999999999999999999999999999999999999999999999999999999555554444444444444444
    999999999111bbbb1111111111111111111bb1119991111111111bb111999999999999999999999999999999999999999999999999999999999999999999999999999999999555554444444444444444
    999999999911111bb11111111111111bbbbb1119999911111111bb1119999999999999999999999999999999999999999999999999999999999999999999999999999999999555555444444444444444
    9999999999911111111111111111111111111199999991111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999995555555444444444444444
    9999999999999111111111999911111111111999999999111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555444444444444444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555544444444444444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555554444444444444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555444444444444
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555544444444444
    4999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555554444444444
    4449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555444444444
    4444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555444444
    4444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555555
    44d4444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555
    444dd44449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555
    44444d4444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555
    4444d4444d444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555
    4444444444dd4499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555599999999
    4444444d44444444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999959999999999
    4444444444444444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    4444444444444444444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    4444444d4444444d444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    44444444d4444444444444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    44444444444ddd44444444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    4444444444444444444444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    44444444444444ddd444d4999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    444444dddddd4444444444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    4444444444444444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999e4e4e4e999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    bbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    44444444444444444444b9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    44444444444444444444b9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    44444444444444444444b9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    44444444444444444444bbbbb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    444444444444444444444444b999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    444444444444444444444444b999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    bbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766777777777777777777777777777777777777777777
    6667767777666666777777666777777777776777777777766666666677777777777777666666777777777777777777776666667777777777666676777777666677777777777777777777777777777777
    6e666666666666666666666e6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6eeeeee6e66eeeeeee66e6eeee6eeeeee66eeeeeeee6666e66666eeee6666666eeeeeee6666666666666eeeeeeeee66666eeeee666666666666666666666666666666666666666666666666666666666
    eeeeeee666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666eeeeeeeee6eee66666eeeeeeeeeeeeeeeeeeeeeeeeeeeeee666eeeeeeeeeeeeeeeeeee6666eeee6666666eeeeeeeeeeeee
    eeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
let Bob = sprites.create(img`
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

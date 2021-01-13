namespace SpriteKind {
    export const Old = SpriteKind.create()
    export const badfood = SpriteKind.create()
    export const non = SpriteKind.create()
    export const enmy = SpriteKind.create()
    export const Ennmy = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enmy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sword = sprites.createProjectileFromSprite(img`
        .........................
        .........................
        .........................
        .........................
        .........................
        .....5...................
        efefef5bbbbbbbbbbb11.....
        .efefef5cccccccccccc1....
        ........5................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        `, Bob, 100, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.badfood, function (sprite, otherSprite) {
    rotten_ham.destroy()
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile42, function (sprite, location) {
    Lochness_Monster.destroy()
    Lochness_monstar2.destroy()
    lochness_monster_3.destroy()
    lochness_monster_4.destroy()
    tiles.setTilemap(tiles.createTilemap(hex`24001e000202020202020202020202020202020202020202020202020202020202020202020202020202030405020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020304050202020202020202020202020202020202020202020202020202020202020202140202020202020202020202020202020202020202020202020202020202020202020213131313020202020202020202020202020202020202020202020203040502060202131313131313131302020202020202020202020202020202020202020202020202061313131313131313131313020202020304050202020202020202020202020202020202060213131313131313131313130202020202020202020202020202020202020202020202060206021313131313131313020202020202020202020202020202020202020202020202060606020202131313060202020202020202020202020202020202020202020202020202020b060206060202020602020b02020202020202020202020202020202020202020202020b0b0b06060602020202060b0b0b0602020202020202020202020304040502020202020b0b0b0b0b0606020202060b0b0b0b0b0202020202020202020202020202020206060202020908070606060606060602090807020202020203040502020202020202020206060606060908070e0e0e0e0e0e0e0e090807020202020202020202020202020206060606060602060908070b0a0c0c0c0c0f0b090807020202020202020202020202020206060606060606060908070b0d06150606100b090807060606060202020202020202020202020202020202060908070b0d12121212100b090807020202060202020202020202020202020202020202020908070b0d11111111100b090807020202020202020202020202020202020202020202020908070b0d11111111100b0908070202020202020202020202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010116161616161601010101010101010101010101010101010101010101161616161616161616161616161616161616160101010101010101010101010101161616161616161616161616161616161616161616161616161616161616161601161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161617161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616`, img`
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
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        ....................................
        222222222222222222222222222222222222
        `, [myTiles.transparency16,sprites.castle.tileDarkGrass3,myTiles.tile4,myTiles.tile29,myTiles.tile30,myTiles.tile31,myTiles.tile47,myTiles.tile48,myTiles.tile49,myTiles.tile50,myTiles.tile51,myTiles.tile52,myTiles.tile53,myTiles.tile54,myTiles.tile55,myTiles.tile56,myTiles.tile57,myTiles.tile59,myTiles.tile60,myTiles.tile61,myTiles.tile62,myTiles.tile63,sprites.castle.tilePath5,myTiles.tile71], TileScale.Sixteen))
    Air_Monster = sprites.create(img`
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
        `, SpriteKind.Ennmy)
    Air_Monster.setVelocity(71, 5)
    Air_Monster.setFlag(SpriteFlag.BounceOnWall, true)
    tiles.placeOnRandomTile(Air_Monster, myTiles.tile62)
    tiles.placeOnRandomTile(Bob, myTiles.tile71)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Bob.isHittingTile(CollisionDirection.Bottom)) {
        Bob.vy = -300
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`1900190006060606060606060606060606010606060606060606060606060606060606060606060607060106060606060606060606060606060606060605060606060601060606010101010101060606060601010101010101010101010606060606060606010606060606010106060106060606060106060606060606060106060606060101060601060606060601060606010101010101060606060601010606010606010101010606060606060606010606060606010106060606060606060106060606060606060106060606060101060606060606060601060606060606060601060606060601010606060606010606010101010101060606010606060606060606060606060106060606060606010106060106060606060606060606060601060606060606060101060601060606060606010101010101010606010101060601010606010606060606060106060606060606060101010606010106060106060606060601060606060606060601010106060101060601060606060606010606010101010606010106060601010606010606010606060106060106060606060106060606060606060106060106060601060601060606060601060306060606060601060601060606010606010606060606010606060606010101010606010606060106060106060101010101010106060106060606060106060606060601060606060606060601060601060606060601060606060606010606060606060602010606010606010606010606010606060101010101010101010101010106060106060106060106060606060606060606060601060606060601060601060401060606060606060606060606010606060606010606`, img`
        .............2...........
        .............2...........
        .............2...222222..
        ...22222222222........2..
        ...22..2.....2........2..
        ...22..2.....2...222222..
        ...22..2..2222........2..
        ...22........2........2..
        ...22........2........2..
        ...22.....2..222222...2..
        ..........2.......22..2..
        ..........2.......22..2..
        ....2222222..222..22..2..
        ....2........222..22..2..
        ....2........222..22..2..
        ....2..2222..22...22..2..
        2...2..2.....2........2..
        2...2..2.....2........2..
        2...2..2.....2.....2222..
        2...2..2..2222222..2.....
        2......2........2..2.....
        2......2........2..2..2..
        2..2...2222222222222..2..
        2..2............2.....2..
        2..2............2.....2..
        `, [myTiles.transparency16,sprites.dungeon.floorLight0,myTiles.tile17,myTiles.tile43,myTiles.tile44,myTiles.tile18,sprites.castle.tilePath5,myTiles.tile73], TileScale.Sixteen))
    game.showLongText("Get to the end of the maze, without getting caught by the maze monster. You have also been given a sword that you could use against some monsters, but for the Maze monster, the sword is useless. ", DialogLayout.Bottom)
    info.startCountdown(2)
    WiseDude.say("In this maze you will find 2 pieces of food. One will poison you, while the other one will make you stronger")
    rotten_ham = sprites.create(img`
        ...........222222ee.............
        .........2233333bbeee...........
        .......7733d1eee333bee..........
        ......23ddd11eee1d33eee.........
        .....23d1333deee3d13bee.........
        ....73d17eee7d1d33313eee........
        ...231177eee7ddeee33dbeee.......
        ..7317777eee777eee33d3e44e......
        ..71d7777777777eeeee3db44ee.....
        .7317777777777dd3eee3db444ee....
        .7dd7777eee77eee3eee3d3b444e....
        7311eeeeeee77eee33333ddbb444e...
        7d17eeeeeee77eeeee333d1b6644e...
        7d77eeeeeee777deee333d1b44444e..
        71777d77eee77d3eeeeeed1644664ee.
        7177eee77777d33333eeed16b64464be
        7177eeedd77dd3eee3eeed1646446b6e
        7177eeedd1eee3eee3eeed1644b6446e
        e177777d1eeee3eee3eeed1b4446446e
        e1777771eeeee33333eee1d6bb44b6e.
        eeee7eeeeeee1b3333eee136bb6bb6e.
        eeee7eeeeee1db33333331b6b66bbe..
        eeee7eee711db3eee333dd6bb6bbe...
        e3d7777777eee3eee333136b77bbe...
        .edd777777eee3eee33ddbf77bbe....
        .e3dd77777eee333333d3ef7777.....
        ..e3deee7d1333333dd3bfffff......
        ...e3eee11ddd333dddbffeef.......
        ....eeeed33d111113befeff........
        ......eeb333dd13b7ffff..........
        ........eeeefffff77.............
        ................................
        `, SpriteKind.badfood)
    pizza = sprites.create(img`
        .............beebbbb............
        ............eebbbb4bb...........
        ............eb344bb4bb..........
        ............e44334bb4bb.........
        ............eb433344b4be........
        ............4eb43344444be.......
        ...........bd4eb43333344bb......
        ..........b455d4443333444bb.....
        ..........4d5555d444333444bb....
        .........4555555dd4b4443444be...
        ........bd5555d555d4bb444444ee..
        ........b55ddd555555bb4b44444ee.
        .......bd5555555555554ebb44444eb
        .......43222555555555d4eeb44b4ee
        ......b422332ddd555222d4eebbb4be
        ......be22232ed55522332db4ebbbbe
        .....bde22222e555e22232edd4bbbbe
        .....b52e222e3555e22222eddd4ebee
        ....bd552eee355552e222e355544eee
        ....b45dd5555555552eee355dd4deee
        ...b455555555555555555551554d4ee
        ...4555222555dddd5555551544d4eee
        ..b45522332555dd555511d444ddeee.
        ..4d5222232e55555551d44ddd4eee..
        .bdd5e22222e555115114d54d4ee....
        .b55d2e222e351144d1d55eeee......
        bd5ddd2eee3d444555dd4e..........
        b555115dddd55d544eede...........
        4511d444d5544ee...4de...........
        41d4555d4ee........44...........
        41554eede.......................
        44ee...4e.......................
        `, SpriteKind.Food)
    controller.moveSprite(Bob, 88, 88)
    Bob.ay = 0
    scene.cameraFollowSprite(Bob)
    Maze_Monster = sprites.create(img`
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
    Queen.destroy()
    King.destroy()
    WiseDude.follow(Bob, 89)
    tiles.placeOnRandomTile(Maze_Monster, myTiles.tile16)
    tiles.placeOnRandomTile(Bob, myTiles.tile18)
    tiles.placeOnRandomTile(pizza, myTiles.tile43)
    tiles.placeOnRandomTile(rotten_ham, myTiles.tile44)
    tiles.placeOnRandomTile(WiseDude, myTiles.tile18)
    for (let index = 0; index < 2; index++) {
        music.playMelody("B G A F A B G C5 ", 120)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd4, function (sprite, location) {
    Earth_Monster = sprites.create(img`
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
    Earth_Monster.setPosition(118, 40)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enmy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(Bob, myTiles.tile69)
    tiles.setTilemap(tiles.createTilemap(hex`2d000a00030303030303030303030303030303030303030303030303030303030303030303030303030303030303030405030303030303030303030303030303030303030303030303030303030303030303030303030303030303040505030101010103030303030303030303030303030303030303030303030303030303030303030303030304050505030303030303030303030303030303030303030303030303030303030303030303030303030303030304050505030303030303030303030301010101010101010101030303030303030303030303030303030303030304050505070303030303030303030303030303030303030303030303030303030303030303030303030303030306020505030303030303030303030303030303030303030303030303030303030303030303030303030303030304050505030303030303030101010101010303030303030301010101010101010101030303030303030303030304050505030303030303030303030303030303030303030303030303030303030303030303030303030303030303040505030303030303030303030303030303030303030303030303030303030303030303030303030303030303030405`, img`
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        `, [myTiles.transparency16,myTiles.tile32,myTiles.tile42,myTiles.tile4,myTiles.tile65,myTiles.tile66,myTiles.tile67,myTiles.tile69], TileScale.Sixteen))
    Lochness_Monster = sprites.create(img`
        .........................
        .....ffffffff............
        ....ff777c71fff..........
        ...ff777cf7711f..........
        ...f6777777771ff.........
        ...ff6666777771f.........
        ....ffff6667777fff.......
        .......fff6677777fff.....
        .........ff66667777f.....
        ...........fff666777ff...
        ...............f66777ff..
        ...............ff66677ff.
        ................fff66777f
        ..................ff66777
        ...................ff6666
        ....................ff666
        `, SpriteKind.enmy)
    Lochness_monstar2 = sprites.create(img`
        .........................
        .....ffffffff............
        ....ff777c71fff..........
        ...ff777cf7711f..........
        ...f6777777771ff.........
        ...ff6666777771f.........
        ....ffff6667777fff.......
        .......fff6677777fff.....
        .........ff66667777f.....
        ...........fff666777ff...
        ...............f66777ff..
        ...............ff66677ff.
        ................fff66777f
        ..................ff66777
        ...................ff6666
        ....................ff666
        `, SpriteKind.enmy)
    lochness_monster_3 = sprites.create(img`
        .........................
        .....ffffffff............
        ....ff777c71fff..........
        ...ff777cf7711f..........
        ...f6777777771ff.........
        ...ff6666777771f.........
        ....ffff6667777fff.......
        .......fff6677777fff.....
        .........ff66667777f.....
        ...........fff666777ff...
        ...............f66777ff..
        ...............ff66677ff.
        ................fff66777f
        ..................ff66777
        ...................ff6666
        ....................ff666
        `, SpriteKind.enmy)
    lochness_monster_4 = sprites.create(img`
        .........................
        .....ffffffff............
        ....ff777c71fff..........
        ...ff777cf7711f..........
        ...f6777777771ff.........
        ...ff6666777771f.........
        ....ffff6667777fff.......
        .......fff6677777fff.....
        .........ff66667777f.....
        ...........fff666777ff...
        ...............f66777ff..
        ...............ff66677ff.
        ................fff66777f
        ..................ff66777
        ...................ff6666
        ....................ff666
        `, SpriteKind.enmy)
    Lochness_Monster.setPosition(128, 24)
    Lochness_monstar2.setPosition(137, 37)
    lochness_monster_3.setPosition(150, 37)
    lochness_monster_4.setPosition(128, 75)
    Lochness_Monster.setVelocity(130, 80)
    Lochness_monstar2.setVelocity(110, 70)
    lochness_monster_3.setVelocity(60, 100)
    lochness_monster_4.setVelocity(150, 50)
    game.showLongText("You lost a life, swim across the water without getting drowned by the Lochness Monster.", DialogLayout.Bottom)
    Lochness_Monster.setFlag(SpriteFlag.BounceOnWall, true)
    Lochness_monstar2.setFlag(SpriteFlag.BounceOnWall, true)
    lochness_monster_3.setFlag(SpriteFlag.BounceOnWall, true)
    lochness_monster_4.setFlag(SpriteFlag.BounceOnWall, true)
})
info.onCountdownEnd(function () {
    Maze_Monster.follow(Bob, 85)
    tiles.placeOnRandomTile(Maze_Monster, myTiles.tile73)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile17, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`28001e000101010101010107010102020202040202020202020202020202020202020404040404040202020201010101010101070707020204040404040404040404040202020202040202020202020404020202010101070101010107070107070202040404020202020204020202020202020402020202040404040101010707010101010101010202020202020204040404020202020404040404040202020202040201010101070101010101010102020202020202020202040202020202020202020404040204040404010101010101070701010101070202020202020202040404040202020202040404020202020506060101070707010701070101010702020202020204040404020202020202020204020202050606060601070101010101010701010101020202020202020202020202020204040404040402050601010101010701010101010107010101010702020404020202020202040402020204040202050601010101010101010101010101070101010107020202020202020202020202020204040202050601010101070101010107070101010707070101020202040202020202020404040404020202050606010101070101070101010701010107010101010202020404040202020202020202020202020506010101010101010701010107010107070101010102020202020204040204040202020202020506060101070701010101010101070107010701010101020202020202020404020204020202020205060101010801010108010101010707070107120101071102020202040402020202020202020202050601010703070101030101010101010707070101010102020202020202040402020202021002020506010107030c0c0c030101070701010107010101010102020202020204020202020202020202020506010f0703090a0b030101070101010707010101010702020202020202020202020202040202020506010107030d010e03010107010101010101010101070702020202020204020202020202040202050601010707070101010101070101010101010101010702020404020204020202020202020202020506060101010107010101010101070101010707010102020204020204040202020402020202020202050606010101070101010101070101010107010101020202020204020202020202040402040402020205060601010107010101070701010107010101020202040202020202020202020202040404040202020506060101010101010101010107010101010202040402020202020202020202020204040204020202050606010101010101010101010101010702040402020202020202020404040202020204020404040205060606060101070701010101010107020202020204040404040402040404020202020402020404040506060601010101010101010107070202020202020202020202040202020404040202020202020404020205010101070701010101070707020202040404040404040404040404040404040202040402020204020101010101010101070702020202020202040202020202020202020404040404040404040402040401010707010101010702020202020404040202020202020202020202020202020202020204020202`, img`
        ..........2.............................
        ..........222...........................
        .............2..........................
        ............2...........................
        ............2...........................
        .............2..........................
        .............2..........................
        .............2..........................
        ..............2.........................
        ..............2.........................
        .............2..........................
        .............2..........................
        .............2..........................
        .............2..........................
        ........................................
        .............2..........................
        .............2..........................
        .............2..........................
        ..............2.........................
        .............2..........................
        ............2...........................
        ............2...........................
        ...........2............................
        ...........2............................
        ...........2............................
        ...........2............................
        ...........2............................
        ............2...........................
        ..........22............................
        .........2..............................
        `, [myTiles.transparency16,sprites.castle.tileDarkGrass3,myTiles.tile22,myTiles.tile23,myTiles.tile32,myTiles.tile33,myTiles.tile34,sprites.castle.tileDarkGrass1,myTiles.tile35,myTiles.tile36,myTiles.tile37,myTiles.tile38,myTiles.tile39,myTiles.tile40,myTiles.tile41,myTiles.tile42,myTiles.tile46,myTiles.tile64,myTiles.tile68], TileScale.Sixteen))
    tiles.placeOnRandomTile(Bob, myTiles.tile68)
    game.showLongText("Walk into the water", DialogLayout.Bottom)
    Maze_Monster.destroy()
    rotten_ham.destroy()
    pizza.destroy()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile34, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`1000190001020002000200020002000200020002010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101030303030303030303030303030301`, img`
        .............2.2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2..............2
        2222222222222222
        `, [myTiles.transparency16,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenSwitchUp,sprites.dungeon.greenSwitchDown], TileScale.Sixteen))
})
info.onLifeZero(function () {
    game.over(false)
    game.showLongText("You have been killed.", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    pizza.destroy()
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile64, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`2d000a00030303030303030303030303030303030303030303030303030303030303030303030303030303030303030405030303030303030303030303030303030303030303030303030303030303030303030303030303030303040505030101010103030303030303030303030303030303030303030303030303030303030303030303030304050505030303030303030303030303030303030303030303030303030303030303030303030303030303030304050505030303030303030303030301010101010101010101030303030303030303030303030303030303030304050505070303030303030303030303030303030303030303030303030303030303030303030303030303030306020505030303030303030303030303030303030303030303030303030303030303030303030303030303030304050505030303030303030101010101010303030303030301010101010101010101030303030303030303030304050505030303030303030303030303030303030303030303030303030303030303030303030303030303030303040505030303030303030303030303030303030303030303030303030303030303030303030303030303030303030405`, img`
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        .............................................
        `, [myTiles.transparency16,myTiles.tile32,myTiles.tile42,myTiles.tile4,myTiles.tile65,myTiles.tile66,myTiles.tile67,myTiles.tile69], TileScale.Sixteen))
    tiles.placeOnRandomTile(Bob, myTiles.tile69)
    Lochness_Monster = sprites.create(img`
        .........................
        .....ffffffff............
        ....ff777c77fff..........
        ...ff777cf7777f..........
        ...f7777777777ff.........
        ...ff7777777777f.........
        ....ffff7777777fff.......
        .......fff7777777fff.....
        .........fff7777777f.....
        ...........fffff7777ff...
        ...............f77777ff..
        ...............ff77777ff.
        ................fff77777f
        ..................ffff777
        .....................fff7
        .......................f7
        `, SpriteKind.enmy)
    Lochness_monstar2 = sprites.create(img`
        .........................
        .....ffffffff............
        ....ff777c77fff..........
        ...ff777cf7777f..........
        ...f7777777777ff.........
        ...ff7777777777f.........
        ....ffff7777777fff.......
        .......fff7777777fff.....
        .........fff7777777f.....
        ...........fffff7777ff...
        ...............f77777ff..
        ...............ff77777ff.
        ................fff77777f
        ..................ffff777
        .....................fff7
        .......................f7
        `, SpriteKind.enmy)
    lochness_monster_3 = sprites.create(img`
        .........................
        .....ffffffff............
        ....ff777c77fff..........
        ...ff777cf7777f..........
        ...f7777777777ff.........
        ...ff7777777777f.........
        ....ffff7777777fff.......
        .......fff7777777fff.....
        .........fff7777777f.....
        ...........fffff7777ff...
        ...............f77777ff..
        ...............ff77777ff.
        ................fff77777f
        ..................ffff777
        .....................fff7
        .......................f7
        `, SpriteKind.enmy)
    lochness_monster_4 = sprites.create(img`
        .........................
        .....ffffffff............
        ....ff777c77fff..........
        ...ff777cf7777f..........
        ...f7777777777ff.........
        ...ff7777777777f.........
        ....ffff7777777fff.......
        .......fff7777777fff.....
        .........fff7777777f.....
        ...........fffff7777ff...
        ...............f77777ff..
        ...............ff77777ff.
        ................fff77777f
        ..................ffff777
        .....................fff7
        .......................f7
        `, SpriteKind.enmy)
    Lochness_Monster.setPosition(128, 24)
    Lochness_monstar2.setPosition(137, 37)
    lochness_monster_3.setPosition(150, 37)
    lochness_monster_4.setPosition(128, 75)
    Lochness_Monster.setVelocity(130, 80)
    Lochness_monstar2.setVelocity(110, 70)
    lochness_monster_3.setVelocity(60, 100)
    lochness_monster_4.setVelocity(150, 50)
    game.showLongText("Swim across the water without getting drowned by the lochness monster", DialogLayout.Bottom)
    Lochness_Monster.setFlag(SpriteFlag.BounceOnWall, true)
    Lochness_monstar2.setFlag(SpriteFlag.BounceOnWall, true)
    lochness_monster_3.setFlag(SpriteFlag.BounceOnWall, true)
    lochness_monster_4.setFlag(SpriteFlag.BounceOnWall, true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Earth_Monster.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let Earth_Monster: Sprite = null
let Maze_Monster: Sprite = null
let pizza: Sprite = null
let Air_Monster: Sprite = null
let lochness_monster_4: Sprite = null
let lochness_monster_3: Sprite = null
let Lochness_monstar2: Sprite = null
let Lochness_Monster: Sprite = null
let rotten_ham: Sprite = null
let sword: Sprite = null
let WiseDude: Sprite = null
let Queen: Sprite = null
let Bob: Sprite = null
let King: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`32000a00040404040403030303030303030303030303030303030303030303030303030303030303030303030303030303130303120d03030b050c030303030303030318191a030303090303080303030703030306030303030318191a03030303031215141215110303030503030318191a0303030303030303030303030303030318191a0303030303030303030303030303120d0d150d0d11030303050303030303030318191a03030303030318191a030303030303030303031819191a0303030303030303110312150d03030305030303030303030303030303030303030303030303030303030303030303030303030303030303030311120d1511030303050303030303030303030303030303030303030303030303030303030303030303030303030303030303110311031117160f0e10030303030303030303030303030303030303030303030303030303030303030303030303030303031103110311040404040403030303030303030303030303030303030303030303030303030303030303030303030303031b0a110311031101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
    22222.............................................
    ..................................................
    ..................................................
    .............................................2....
    .............................................2...2
    .............................................2.2.2
    .............................................2.2.2
    22222........................................2.2.2
    22222222222222222222222222222222222222222222222222
    22222222222222222222222222222222222222222222222222
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.castle.rock0,sprites.builtin.brick,sprites.castle.saplingOak,sprites.builtin.crowd4,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile7,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29,myTiles.tile30,myTiles.tile31,myTiles.tile45], TileScale.Sixteen))
King = sprites.create(img`
    ....................
    ....4....4....4.....
    ....5....5....5.....
    ....55..555..55.....
    ....55555555555.....
    ....54.22.44.25.....
    ....75555555557.....
    ....51b1b1b1b15.....
    ....1b1b1b1b1b1.....
    ...1bdddddddddb1....
    ...b1ddddddddd1b....
    ...1bdffdddffdb1....
    ...b1df1dddf1d1b....
    ...1bdddddddddb1....
    ...b1ddfffffdd1b....
    ...1bdfdddddfdb1....
    .....ddddddddd......
    ......ddddddd.......
    .....111111111......
    ....11111e11111.....
    ....5111efe1115.....
    ....2511eee1152.....
    ....2511efe1152.....
    ....5551eee1555.....
    ...11111e.e11111....
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.non)
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
Queen = sprites.create(img`
    ....................
    ....................
    .......44444........
    ......4444444.......
    .....444444444......
    .....444ddd4444.....
    ....444dddddd44.....
    ....44dffddffd4.....
    ....44df1ddf1d4.....
    ....44dddddddd4.....
    ....44.ddffdd.44....
    ...44...dddd...4....
    ...4.113dddd311.....
    ....133333333331....
    ....333335533333....
    ....d3335225333d....
    ....ddd352253ddd....
    ....dd.335533.dd....
    ....dd.333333.dd....
    ....dd33333333dd....
    ......33333333......
    .....3333333333.....
    .....3333333333.....
    ....333333333333....
    ....333333333333....
    ...33333333333333...
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.non)
controller.moveSprite(Bob, 120, 0)
Bob.ay = 700
scene.cameraFollowSprite(Bob)
WiseDude = sprites.create(img`
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
    `, SpriteKind.Old)
WiseDude.setPosition(78, 103)
info.setLife(3)
game.showLongText("Bob is sent by his king and queen to go find and bring back the magical blob which will Bob's homeland \"Lardland\"", DialogLayout.Bottom)
Queen.say("Godspeed Bob!")
WiseDude.say("Greetings my dear Bob, I will be your guide on this journey to collect the Blob.", 80000)
tiles.placeOnRandomTile(King, myTiles.tile27)
tiles.placeOnRandomTile(Queen, myTiles.tile28)
tiles.placeOnRandomTile(WiseDude, myTiles.tile45)
for (let index = 0; index < 1; index++) {
    music.playMelody("G B A G F B A B ", 120)
}

let mySprite = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff444444444444444f4444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff444444444444444444444222222222222222224444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff444444444444444444444444444222222222222222222444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff4444444444444444444444444444422222222222222222222444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff44444444444444444444444444444444422222222222222222222244ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff444444444444444444444444444444444444422222222222222222222244ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff444444444444444444444444444444444444444222222222222222222222244ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff44444444444444444444444444444444444444444222222222222222222222224fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff44444444444444444444444444444444444444444442222222222222222222222244fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff4444444444444444444444444444444444444444444442222222222222222222222224ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff444444444444444444444444444444444444444444444442222222222222222222222224fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444422222222222222222222222244fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff4444444444444444444444444444444444444444444444444222222222222222222222222224ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444222222222222222222222222224fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff4444444444444444444444444444444444444444444444444442222222222222222222222222224ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444442222222222222222222222222224fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff44444444444444444444444444444444444444444444444444444442222222222222222222222222224ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff44444444444444444444444444444444444444444444444444444442222222222222222222222222224ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444422222222222222222222222222224fffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff44444444444444444444444444444444444444444444444444444444422222222222222222222222222224ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444222222222222222222222222222224fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444222222222222222222222222222224fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff44444444444444444444444444444444444444444444444444444444444222222222222222222222222222224ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444442222222222222222222222222222224fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444442222222222222222222222222222224fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff4444444444444444444444444444444444444444444444444444444444422222222222222222222222222222224ffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff4444444444444444444444444444444444444444444444444444444444422222222222222222222222222222224ffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff44444444444444444444444444444444444444444444444444444444444222222222222222222222222222222224fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff44444444444444444444444444444444444444444444444444444444444222222222222222222222222222222224fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444442222222222222222222222222222222224ffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444442222222222222222222222222222222224ffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444442222222222222222222222222222222224ffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff4444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222224fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff4444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222224fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff4444444444444444444444444444444444444444444444444444444444422222222222222222222222222222222224fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff44444444444444444444444444444444444444444444444444444444444222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff44444444444444444444444444444444444444444444444444444444444222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff44444444444444444444444444444444444444444444444444444444442222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff44444444444444444444444444444444444444444444444444444444442222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4244444444444444444444444444444444444444444444444444444444422222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4224444444444444444444444444444444444444444444444444444444222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4224444444444444444444444444444444444444444444444444444444222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4224444444444444444444444444444444444444444444444444444444222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4222444444444444444444444444444444444444444444444444444442222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4222244444444444444444444444444444444444444444444444444422222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4222244444444444444444444444444444444444444444444444444422222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4222224444444444444444444444444444444444444444444444444222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4222224444444444444444444444444444444444444444444444444222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4222222444444444444444444444444444444444444444444444442222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4222222244444444444444444444444444444444444444444444422222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4222222224444444444444444444444444444444444444444444222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4222222222444444444444444444444444444444444444444442222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4222222222244444444444444444444444444444444444444422222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4222222222224444444444444444444444444444444444444222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4222222222222244444444444444444444444444444444422222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4222222222222222444444444444444444444444444442222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4222222222222222244444444444444444444444444422222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4222222222222222222244444444444444444444422222222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff42222222222222222222224444444444444442222222222222222222222222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff42222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff42222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff42222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff422222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff422222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff422222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff4222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff4222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff4222222222222222222222222222222222222222222222222222222222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff42222222222222222222222222222222222222222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff42222222222222222222222222222222222222222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff422222222222222222222222222222222222222222222222222222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff422222222222222222222222222222222222222222222222222222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff4222222222222222222222222222222222222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff4222222222222222222222222222222222222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff42222222222222222222222222222222222222222222222222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff422222222222222222222222222222222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff422222222222222222222222222222222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff4222222222222222222222222222222222222222222222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff42222222222222222222222222222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff422222222222222222222222222222222222222222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff422222222222222222222222222222222222222222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff4222222222222222222222222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff42222222222222222222222222222222222222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff422222222222222222222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff4222222222222222222222222222222222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff44222222222222222222222222222222222222222222222222222222222222244fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff4222222222222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff42222222222222222222222222222222222222222222222222222222224ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff442222222222222222222222222222222222222222222222222222244fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff42222222222222222222222222222222222222222222222222224fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff442222222222222222222222222222222222222222222222244ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff44222222222222222222222222222222222222222222244ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff4422222222222222222222222222222222222222244ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff444222222222222222222222222222222222444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444222222222222222222222222222444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444422222222222222222224444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
let Bob = sprites.create(img`
    . . . . . . 6 6 7 7 7 . . . . . 
    . . . . 6 6 6 7 7 7 7 7 7 . . . 
    . . . 6 6 6 6 7 7 7 7 7 7 7 . . 
    . 6 6 6 6 6 1 7 7 7 7 7 7 7 7 7 
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
controller.moveSprite(Bob)
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Air_Monster.setPosition(21, 40)
Earth_Monster.setPosition(118, 40)
Lochness_Monster.setPosition(33, 80)

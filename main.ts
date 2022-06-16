sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.hearts, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 500)
    game.over(false)
})
info.onLifeZero(function () {
    game.over(false)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Jano`)
game.splash("press A")
let jano = sprites.create(assets.image`Jano`, SpriteKind.Player)
jano.setPosition(9, 107)
controller.moveSprite(jano, 100, 100)
jano.setStayInScreen(true)
info.setScore(0)
info.setLife(4)
game.onUpdate(function () {
    if (info.score() < 20) {
        scene.setBackgroundImage(assets.image`JM`)
    }
    if (info.score() >= 20) {
        scene.setBackgroundImage(assets.image`j`)
    }
})
game.onUpdateInterval(500, function () {
    if (info.score() == 9) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        game.splash("FINAL BOSS")
        mySprite = sprites.create(assets.image`asset name`, SpriteKind.Enemy)
        mySprite.follow(jano)
        jano.setVelocity(100, 100)
    }
    info.changeScoreBy(1)
    if (info.score() < 10) {
        mySprite2 = sprites.createProjectileFromSide(assets.image`Marc`, randint(-50, 50), randint(-50, 50))
        mySprite2.setBounceOnWall(true)
    }
})

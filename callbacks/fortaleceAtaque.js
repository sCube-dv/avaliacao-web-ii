export const fortaleceAtaque = (monstro) => {
    monstro.ataque = monstro.ataque + (monstro.ataque * 0.3)
    return monstro
}
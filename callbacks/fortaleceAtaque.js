export const fortaleceAtaque = (monstro) => {
    monstro.ataque = monstro.ataque + (monstro.ataque * 0.3)
    console.log('Ataque fortalecido!')
    console.log('Novo valor de ataque: ' + monstro.ataque)
    //return monstro
}
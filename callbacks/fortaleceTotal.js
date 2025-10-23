export const fortaleceTotal = (monstro) => {
    monstro.ataque = monstro.ataque + (monstro.ataque * 0.5)
    monstro.defesa = monstro.defesa + (monstro.defesa * 0.5)
    console.log('Ataque e Defesa fortalecidos!')
    console.log('Novo valor de ataque: ' + monstro.ataque)
    console.log('Novo valor de defesa: ' + monstro.defesa)
}
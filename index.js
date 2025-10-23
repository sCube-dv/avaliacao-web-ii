import batalha from './modules/batalha.js'

import { fortaleceAtaque } from './callbacks/fortaleceAtaque.js'
import { fortaleceTotal } from './callbacks/fortaleceTotal.js'


/* criação objetos Dragão e Guerreiro */
const M1 = {
    nome: 'Dragão',
    vida: 100,
    ataque: 80,
    defesa: 60
}

const M2 = {
    nome: 'Guerreiro',
    vida: 100,
    ataque: 70,
    defesa: 85
}

/* Dragão ataca Guerreiro */
batalha.atacar(M1, M2)

/* Guerreiro ataca Dragão  */
batalha.atacar(M2, M1)

/* Fortalece ataque Gerrueiro */
batalha.fortalecer(M2, fortaleceAtaque)


/* Fortalece ataque Dragão */
batalha.fortalecer(M1, fortaleceTotal)

/* fortalecimento de defesa */
const fortaleceDefesa = (monstro) => {
    monstro.defesa = monstro.defesa + (monstro.defesa * 0.25)
    console.log('Defesa fortalecida!')
    console.log('Monstro: ' + monstro.nome + '\nNovo valor de defesa: ' + monstro.defesa)
}

batalha.fortalecer(M2, fortaleceDefesa)
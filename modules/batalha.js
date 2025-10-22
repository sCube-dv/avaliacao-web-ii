/* função atacar */
const atacar = (m1, m2) => {
    /* ataque não funcionou */
    if(m2.defesa > m1.ataque){
        m1.vida = m2.defesa - m1.ataque
        return false
    } else {
        /* ataque funcionou */
        m2.vida = m1.ataque - m2.defesa
        return true
    }    
}

/* função curar */
const curar = (monstro, cura) => {
    monstro.vida = cura
    return monstro
}

/* função fortalecer */
const fortalecer = (monstro, tipoFortalecer) => {
    tipoFortalecer(monstro)
} 



export default { atacar, curar, fortalecer }
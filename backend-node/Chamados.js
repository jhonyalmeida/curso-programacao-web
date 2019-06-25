module.exports = {
    chamados: [],
    idSequence: 1,

    findAll(params) {
        return this.chamados
    },

    find(id) {
        return this.chamados.find(chamado => chamado.id === id)
    },

    create(chamado) {
        this.chamados.push({
            id: this.idSequence,
            ...chamado
        }),
        this.idSequence++
        return chamado
    },

    update(chamado) {
        const index = this.chamados.findIndex(chamado => chamado.id === id)
        this.chamados[index] = chamado
        return chamado
    },

    delete(id) {
        this.chamados = this.chamados.filter(chamado => chamado.id != id)
    }
}
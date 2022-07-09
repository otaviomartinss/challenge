// function ftipo(tipo,valor) {
//     if (tipo != "receita") {
//         valor == -valor
//     }
// }
export type MovimentacaoDTO = {
    
    id: string
    nome: string
    descricao: string
    tipo: string
    valor: number
    //ftipo()
    dataCadastro: Date
    dataAtualizacao: Date
}

export type SaldoDTO = {
    id: string
    saldo: number
    saldoAnterior: number
    dataAtualizacao: Date
}

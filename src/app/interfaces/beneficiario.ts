export interface Beneficiario {
    beneficiario: {
        cpfFormatado: string,
        nis: string,
        nome: string
    },
    enquadramentoAuxilioEmergencial: string,
    id: 0,
    mesDisponibilizacao: string,
    municipio: {
        codigoIBGE: string,
        codigoRegiao: string,
        nomeIBGE: string,
        nomeRegiao: string,
        pais: string,
        uf: {
            nome: string,
            sigla: string
        }
    },
    numeroParcela: string,
    responsavelAuxilioEmergencial: {
        cpfFormatado: string,
        nis: string,
        nome: string
    },
    situacaoAuxilioEmergencial: string,
    valor: number
}

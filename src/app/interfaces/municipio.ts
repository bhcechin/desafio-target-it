export interface Municipio {
    dataReferencia: string,
    id: number,
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
    quantidadeBeneficiados: number,
    tipo: {
      descricao: string,
      descricaoDetalhada: string,
      id: number
    },
    valor: number
  }

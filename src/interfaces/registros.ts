export type R1 = {
  TIPO_REG: string;
  CPFCGC_DEV: string;
  RAZAO: string;
  CNPJ: string;
  ENDERECO: string;
  BAIRRO: string;
  CIDADE: string;
  UF: string;
  CEP: string;
  DDD: string;
  FONE: string;
  NOME_EMP_ITAU: string;
  CNPJ_EMISSOR: string;
  ENDERECO_EMISSOR: string;
  CIDADE_EMISSOR: string;
  BAIRRO_EMISSOR: string;
  UF_EMISSOR: string;
  CEP_EMISSOR: string;
};

export interface R2 {
  TIPO_REG: string;
  CPFCGC_DEV: string;
  DEVEDOR: string;
  ENDERECO: string;
  COMPLEMENTO: string;
  BAIRRO: string;
  CIDADE: string;
  CEP: string;
  UF: string;
  NR_FILIAL: number;
  EMAIL1: string;
  EMAIL2: string;
}

export interface R3 {
  TIPO_REG: string;
  CPFCGC_DEV: string;
  CONTRATO: string;
  DT_CONTR: string;
  VL_CONTR: number;
  PARCELA: string;
  PLANO: string;
  DOCUMENTO: string;
  VL_SALDO: number;
  DT_VENC: string;
  VL_PARC_ATUAL: number;
  VL_ATUALIZADO: number;
  TIPO_CONTRATO: string;
  Vl_PARC_ORIGINAL: number;
  VL_ATUALIZADO_ORIGINAL: number;
  VL_DESCONTO: number;
  PDESCONTO: number;
  VL_JUROS: number;
  VL_HONOR: number;
  VL_TX_PERM: number;
  VL_NOTIFIC: number;
  VL_TARIFA_TCB: number;
  VL_CUSTAS: number;
  VL_MULTA: number;
  VL_JUROS_SEM_DESC: number;
  VL_HONOR_SEM_DESC: number;
  VL_TX_PERM_SEM_DESC: number;
  VL_MULTA_SEM_DESC: number;
}

export interface R4 {
  TIPO_REG: string;
  CPFCGC_DEV: string;
  VL_ACORDO: number;
  PDESCONTO: number;
  PLANO: number;
  VL_ENTRADA: number;
  VL_PARC: number;
  NR_ACORDO: number;
  VL_DESCONTO: number;
}

export interface R5 {
  TIPO_REG: string;
  CPFCGC_DEV: string;
  BOL_SOBRE: string;
  ACEITE: string;
  AGENCIA: string;
  DIG_AGENCIA: string;
  BANCO: string;
  CARTEIRA: string;
  CEDENTE: string;
  CONTA: string;
  DIG_CONTA: string;
  DOCUMENTO: string;
  DT_EMISS: string;
  DT_PROC: string;
  DT_VENC: string;
  ESPECIE: string;
  M1: string;
  M2: string;
  M3: string;
  M4: string;
  M5: string;
  M6: string;
  M7: string;
  M8: string;
  M9: string;
  NOSSO_NR: string;
  NR_BOLETO: string;
  S_MOEDA: string;
  VL_BOLETO: number;
  COD_BARRAS: string;
  DIGITAVEL: string;
  VL_DESC: number;
  VL_TOTAL_ORIGINAL: number;
  VL_JUROS: number;
  VL_HONOR: number;
  VL_TX_PERM: number;
  VL_NOTIFIC: number;
  VL_TARIFA_TCB: number;
  VL_CUSTAS: number;
  VL_MULTA: number;
  VL_JUROS_SEM_DESC: number;
  VL_HONOR_SEM_DESC: number;
  VL_TX_PERM_SEM_DESC: number;
  VL_MULTA_SEM_DESC: number;
}

export interface R6 {
  TIPO_REG: string;
  CPFCGC_DEV: string;
  Email: string;
}

export interface R7 {
  TIPO_REG: string;
  CPFCGC_DEV: string;
  DDD: string;
  TELEFONE: string;
  SEQUENCIAL: string;
}

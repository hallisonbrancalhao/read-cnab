import { R5, R1, R2, R3, R4, R6, R7 } from "../interfaces/registros";

export function parseCNAB_R1(line: string[]): R1[] {
  const result = line.map((line) => {
    return {
      TIPO_REG: line.substring(0, 1),
      CPFCGC_DEV: line.substring(1, 15),
      RAZAO: line.substring(15, 215),
      CNPJ: line.substring(215, 229),
      ENDERECO: line.substring(229, 349),
      BAIRRO: line.substring(349, 374),
      CIDADE: line.substring(374, 399),
      UF: line.substring(399, 401),
      CEP: line.substring(401, 409),
      DDD: line.substring(409, 411),
      FONE: line.substring(411, 426),
      NOME_EMP_ITAU: line.substring(426, 626),
      CNPJ_EMISSOR: line.substring(626, 646),
      ENDERECO_EMISSOR: line.substring(646, 706),
      CIDADE_EMISSOR: line.substring(706, 731),
      BAIRRO_EMISSOR: line.substring(731, 756),
      UF_EMISSOR: line.substring(756, 758),
      CEP_EMISSOR: line.substring(758, 766),
    };
  });

  return result;
}

export function parseCNAB_R2(line: string[]): R2[] {
  const result = line.map((line) => {
    return {
      TIPO_REG: line.substring(0, 1),
      CPFCGC_DEV: line.substring(1, 15),
      DEVEDOR: line.substring(15, 65),
      ENDERECO: line.substring(65, 125),
      COMPLEMENTO: line.substring(125, 185),
      BAIRRO: line.substring(185, 210),
      CIDADE: line.substring(210, 235),
      CEP: line.substring(235, 243),
      UF: line.substring(243, 245),
      NR_FILIAL: parseInt(line.substring(245, 247), 10),
      EMAIL1: line.substring(247, 347),
      EMAIL2: line.substring(347, 447),
    };
  });
  return result;
}

export function parseCNAB_R3(line: string[]): R3[] {
  const result = line.map((line) => {
    return {
      TIPO_REG: line.substring(0, 1),
      CPFCGC_DEV: line.substring(1, 15),
      CONTRATO: line.substring(15, 45),
      DT_CONTR: line.substring(45, 55),
      VL_CONTR: parseFloat(line.substring(55, 70)),
      PARCELA: line.substring(70, 73),
      PLANO: line.substring(73, 76),
      DOCUMENTO: line.substring(76, 116),
      VL_SALDO: parseFloat(line.substring(116, 131)),
      DT_VENC: line.substring(131, 141),
      VL_PARC_ATUAL: parseFloat(line.substring(141, 156)),
      VL_ATUALIZADO: parseFloat(line.substring(156, 171)),
      TIPO_CONTRATO: line.substring(171, 201),
      Vl_PARC_ORIGINAL: parseFloat(line.substring(201, 216)),
      VL_ATUALIZADO_ORIGINAL: parseFloat(line.substring(216, 231)),
      VL_DESCONTO: parseFloat(line.substring(231, 246)),
      PDESCONTO: parseInt(line.substring(246, 249), 10),
      VL_JUROS: parseFloat(line.substring(249, 264)),
      VL_HONOR: parseFloat(line.substring(264, 279)),
      VL_TX_PERM: parseFloat(line.substring(279, 294)),
      VL_NOTIFIC: parseFloat(line.substring(294, 309)),
      VL_TARIFA_TCB: parseFloat(line.substring(309, 324)),
      VL_CUSTAS: parseFloat(line.substring(324, 339)),
      VL_MULTA: parseFloat(line.substring(339, 354)),
      VL_JUROS_SEM_DESC: parseFloat(line.substring(354, 369)),
      VL_HONOR_SEM_DESC: parseFloat(line.substring(369, 384)),
      VL_TX_PERM_SEM_DESC: parseFloat(line.substring(384, 399)),
      VL_MULTA_SEM_DESC: parseFloat(line.substring(399, 414)),
    };
  });
  return result;
}

export function parseCNAB_R4(line: string[]): R4[] {
  const result = line.map((line) => {
    return {
      TIPO_REG: line.substring(0, 1),
      CPFCGC_DEV: line.substring(1, 15),
      VL_ACORDO: parseFloat(line.substring(15, 30)),
      PDESCONTO: parseInt(line.substring(30, 33), 10),
      PLANO: parseInt(line.substring(33, 36), 10),
      VL_ENTRADA: parseFloat(line.substring(36, 51)),
      VL_PARC: parseFloat(line.substring(51, 66)),
      NR_ACORDO: parseInt(line.substring(66, 76), 10),
      VL_DESCONTO: parseFloat(line.substring(76, 91)),
    };
  });
  return result;
}

export function parseCNAB_R5(line: string[]): R5[] {
  const result = line.map((line) => {
    return {
      TIPO_REG: line.substring(0, 1),
      CPFCGC_DEV: line.substring(1, 15),
      BOL_SOBRE: line.substring(15, 16),
      ACEITE: line.substring(16, 17),
      AGENCIA: line.substring(17, 23),
      DIG_AGENCIA: line.substring(23, 25),
      BANCO: line.substring(25, 28),
      CARTEIRA: line.substring(28, 48),
      CEDENTE: line.substring(48, 108),
      CONTA: line.substring(108, 123),
      DIG_CONTA: line.substring(123, 125),
      DOCUMENTO: line.substring(125, 155),
      DT_EMISS: line.substring(155, 165),
      DT_PROC: line.substring(165, 175),
      DT_VENC: line.substring(175, 185),
      ESPECIE: line.substring(185, 187),
      M1: line.substring(187, 337),
      M2: line.substring(337, 487),
      M3: line.substring(487, 637),
      M4: line.substring(637, 787),
      M5: line.substring(787, 937),
      M6: line.substring(937, 1087),
      M7: line.substring(1087, 1237),
      M8: line.substring(1237, 1387),
      M9: line.substring(1387, 1537),
      NOSSO_NR: line.substring(1537, 1557),
      NR_BOLETO: line.substring(1557, 1582),
      S_MOEDA: line.substring(1582, 1587),
      VL_BOLETO: parseFloat(line.substring(1587, 1602)),
      COD_BARRAS: line.substring(1602, 1682),
      DIGITAVEL: line.substring(1682, 1762),
      VL_DESC: parseFloat(line.substring(1762, 1777)),
      VL_TOTAL_ORIGINAL: parseFloat(line.substring(1777, 1792)),
      VL_JUROS: parseFloat(line.substring(1792, 1807)),
      VL_HONOR: parseFloat(line.substring(1807, 1822)),
      VL_TX_PERM: parseFloat(line.substring(1822, 1837)),
      VL_NOTIFIC: parseFloat(line.substring(1837, 1852)),
      VL_TARIFA_TCB: parseFloat(line.substring(1852, 1867)),
      VL_CUSTAS: parseFloat(line.substring(1867, 1882)),
      VL_MULTA: parseFloat(line.substring(1882, 1897)),
      VL_JUROS_SEM_DESC: parseFloat(line.substring(1897, 1912)),
      VL_HONOR_SEM_DESC: parseFloat(line.substring(1912, 1927)),
      VL_TX_PERM_SEM_DESC: parseFloat(line.substring(1927, 1942)),
      VL_MULTA_SEM_DESC: parseFloat(line.substring(1942, 1957)),
    };
  });
  return result;
}

export function parseCNAB_R6(line: string[]): R6[] {
  const result = line.map((line) => {
    return {
      TIPO_REG: line.substring(0, 1),
      CPFCGC_DEV: line.substring(1, 15),
      Email: line.substring(15, 215),
    };
  });
  return result;
}

export function parseCNAB_R7(line: string[]): R7[] {
  const result = line.map((line) => {
    return {
      TIPO_REG: line.substring(0, 1),
      CPFCGC_DEV: line.substring(1, 15),
      DDD: line.substring(15, 18),
      TELEFONE: line.substring(18, 28),
      SEQUENCIAL: line.substring(28, 30),
    };
  });
  return result;
}

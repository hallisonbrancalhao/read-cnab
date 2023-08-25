import { extractInitials } from "./functions/extract-initials";
import {
  parseCNAB_R1,
  parseCNAB_R2,
  parseCNAB_R3,
  parseCNAB_R4,
  parseCNAB_R5,
  parseCNAB_R6,
  parseCNAB_R7,
} from "./functions/parse_cnab";
import { R2, R4, R5 } from "./interfaces/registros";
import "./style.css";

const htmlContent = `
  <div>
    <a href="https://pgmais.com.br" target="_blank">
      <img src="https://pgmais.com.br/wp-content/uploads/2022/04/logo_pgmais_all-28.svg" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>💵</h1>
    <div class="card">
      <form id="cnabForm">
        <div class="cnabs">
          <label for="cnab1" >CNAB 1:</label>
          <textarea required=true id="cnab1" name="cnab1" rows="4" cols="50" placeholder="Insira o texto aqui..."></textarea>
          <label  for="cnab2">CNAB 2:</label>
          <textarea required=true id="cnab2" name="cnab2" rows="4" cols="50" placeholder="Insira o texto aqui..."></textarea>
        </div>
        <button type="submit">Gerar</button>
      </form>
    </div>

    <div class="output">
      <textarea id="outputArea" rows="10" cols="50"></textarea>
      <button id="copyButton">Copiar para a área de transferência</button>
    </div>
    
    <p class="read-the-docs">
      Concatenar 2 arquivos cnabS
    </p>
  </div>
`;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = htmlContent;

document.getElementById("cnabForm")!.addEventListener("submit", (e) => {
  e.preventDefault();
  setupcnab();
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = htmlContent;

document.getElementById("cnabForm")!.addEventListener("submit", (e) => {
  e.preventDefault();
  setupcnab();
});

document.getElementById("copyButton")!.addEventListener("click", () => {
  const outputArea = document.getElementById(
    "outputArea"
  ) as HTMLTextAreaElement;
  outputArea.select();
  document.execCommand("copy");
});

export function setupcnab(): void {
  const cnab1Str = (document.getElementById("cnab1") as HTMLTextAreaElement)
    .value;
  const cnab2Str = (document.getElementById("cnab2") as HTMLTextAreaElement)
    .value;

  const cnab1Obj = extractInitials(cnab1Str);
  const cnab2Obj = extractInitials(cnab2Str);

  const cnab1r1 = parseCNAB_R1(cnab1Obj["1"]);
  const cnab1r2 = parseCNAB_R2(cnab1Obj["2"]);
  const cnab1r3 = parseCNAB_R3(cnab1Obj["3"]);
  const cnab1r4 = parseCNAB_R4(cnab1Obj["4"]);
  const cnab1r5 = parseCNAB_R5(cnab1Obj["5"]);
  const cnab1r6 = parseCNAB_R6(cnab1Obj["6"]);
  const cnab1r7 = parseCNAB_R7(cnab1Obj["7"]);

  const outputArea = document.getElementById(
    "outputArea"
  ) as HTMLTextAreaElement;
  outputArea.value = concatenatedLines;
}

function generateResultCnab(): string {
  const header = Object.keys(linhaExcel[0]).join(";");
  const rows = linhaExcel.map((row) => Object.values(row).join(";")).join("\n");

  return header + "\n" + rows;
}

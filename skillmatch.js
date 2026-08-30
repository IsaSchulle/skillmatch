// ==========================================
// SKILLMATCH JS
// Simulador de Compatibilidade com Vaga
// Front-End Júnior
// ==========================================


// ==========================================
// RF01 - PERFIL DO CANDIDATO
// ==========================================

const candidato = {
    nome: "Isadora Possamai Schulle",
    areaInteresse: "Front-End/React",
    habilidades: ["HTML", "CSS", "JavaScript"],
    experiencia: "Estudos e projetos",
    disponivel: true
};


// ==========================================
// RF09 - CLASSE VAGA
// ==========================================

class Vaga {
    constructor(empresa, cargo, requisitos) {
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
    }

    calcularCompatibilidade(habilidadesCandidato) {
        if (this.requisitos.length === 0) {
            return 0;
        }

        const habilidadesEncontradas = this.requisitos.filter(
            habilidade => habilidadesCandidato.includes(habilidade)
        );

        return Math.round(
            (habilidadesEncontradas.length / this.requisitos.length) * 100
        );
    }

    listarHabilidadesFaltantes(habilidadesCandidato) {
        return this.requisitos.filter(
            habilidade => !habilidadesCandidato.includes(habilidade)
        );
    }
}


// ==========================================
// RF10 - HERANÇA
// ==========================================

class VagaReact extends Vaga {
    constructor(empresa, cargo, requisitos, nivelReact) {
        super(empresa, cargo, requisitos);
        this.nivelReact = nivelReact;
    }

    exibirEspecializacao() {
        return `Nível de React exigido: ${this.nivelReact}`;
    }
}


// ==========================================
// RF02 - LISTA DE VAGAS
// ==========================================

const vagas = [
    new Vaga(
        "WebTech",
        "Desenvolvedora Front-End Júnior",
        ["HTML", "CSS", "JavaScript"]
    ),

    new Vaga(
        "CodeStart",
        "Desenvolvedora Web Júnior",
        ["HTML", "CSS", "JavaScript", "Git"]
    ),

    new VagaReact(
        "React Solutions",
        "Desenvolvedora React Júnior",
        ["HTML", "CSS", "JavaScript", "React", "Git"],
        "Básico"
    )
];


// ==========================================
// RF04 - CLASSIFICAÇÃO
// ==========================================

function classificarCompatibilidade(percentual) {
    if (percentual >= 80) {
        return "Alta compatibilidade";
    } else if (percentual >= 50) {
        return "Média compatibilidade";
    } else {
        return "Baixa compatibilidade";
    }
}


// ==========================================
// RF12 - CALLBACK
// ==========================================

function executarComCallback(dados, callback) {
    return callback(dados);
}


// ==========================================
// RF13 - CLOSURE
// ==========================================

function criarContador() {
    let contador = 0;

    return function () {
        contador++;
        return contador;
    };
}

const contadorRelatorio = criarContador();


// ==========================================
// RF14 - PROMISE
// ==========================================

function carregarVagas() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (vagas.length > 0) {
                resolve(vagas);
            } else {
                reject("Não foi possível carregar as vagas.");
            }

        }, 1000);

    });
}


// ==========================================
// RF07 - RECOMENDAÇÃO DE ESTUDO
// ==========================================

function gerarRecomendacao(habilidadesFaltantes) {

    if (habilidadesFaltantes.length === 0) {
        return "Continue praticando e aprofundando seus conhecimentos.";
    }

    return `Estudar primeiro: ${habilidadesFaltantes[0]}`;
}


// ==========================================
// FUNÇÃO PRINCIPAL
// ==========================================

async function executarSkillMatch() {

    console.log("==========================================");
    console.log("           SKILLMATCH JS");
    console.log("==========================================");

    console.log(`Candidata: ${candidato.nome}`);
    console.log(`Área de interesse: ${candidato.areaInteresse}`);
    console.log(`Experiência: ${candidato.experiencia}`);
    console.log(`Habilidades: ${candidato.habilidades.join(", ")}`);
    console.log("");

    try {

        // Aguarda o carregamento simulado das vagas
        const vagasCarregadas = await carregarVagas();

        console.log("Vagas carregadas com sucesso!");
        console.log("");

        // RF08 - MAP
        const resultados = vagasCarregadas.map(vaga => {

            const compatibilidade = vaga.calcularCompatibilidade(
                candidato.habilidades
            );

            const faltantes = vaga.listarHabilidadesFaltantes(
                candidato.habilidades
            );

            const classificacao = classificarCompatibilidade(
                compatibilidade
            );

            return {
                vaga: vaga,
                compatibilidade: compatibilidade,
                classificacao: classificacao,
                faltantes: faltantes
            };
        });


        // ==========================================
        // EXIBIÇÃO DAS VAGAS
        // ==========================================

        resultados.forEach(resultado => {

            const numero = contadorRelatorio();

            console.log("------------------------------------------");
            console.log(`VAGA ${numero}`);
            console.log("------------------------------------------");

            console.log(`Empresa: ${resultado.vaga.empresa}`);
            console.log(`Cargo: ${resultado.vaga.cargo}`);
            console.log(`Compatibilidade: ${resultado.compatibilidade}%`);
            console.log(`Classificação: ${resultado.classificacao}`);

            console.log(
                `Requisitos: ${resultado.vaga.requisitos.join(", ")}`
            );

            if (resultado.faltantes.length > 0) {

                console.log(
                    `Habilidades faltantes: ${resultado.faltantes.join(", ")}`
                );

            } else {

                console.log("Nenhuma habilidade faltante!");

            }

            // Verifica se a vaga possui especialização em React
            if (resultado.vaga instanceof VagaReact) {
                console.log(resultado.vaga.exibirEspecializacao());
            }

            console.log(
                `Recomendação: ${gerarRecomendacao(resultado.faltantes)}`
            );

            console.log("");
        });


        // ==========================================
        // RF06 - VAGA MAIS COMPATÍVEL
        // ==========================================

        const melhorVaga = resultados.reduce(
            (melhor, atual) => {

                if (
                    atual.compatibilidade > melhor.compatibilidade
                ) {
                    return atual;
                }

                return melhor;

            },
            resultados[0]
        );


        console.log("==========================================");
        console.log("       VAGA MAIS COMPATÍVEL");
        console.log("==========================================");

        console.log(`Empresa: ${melhorVaga.vaga.empresa}`);
        console.log(`Cargo: ${melhorVaga.vaga.cargo}`);
        console.log(`Compatibilidade: ${melhorVaga.compatibilidade}%`);
        console.log(`Classificação: ${melhorVaga.classificacao}`);

        console.log("");

        // RF12 - CALLBACK
        executarComCallback(melhorVaga, resultado => {

            console.log(
                `Callback: análise finalizada para ${resultado.vaga.cargo}.`
            );

        });


        // RF05 - FILTER
        const habilidadesImportantes = melhorVaga.faltantes.filter(
            habilidade => habilidade !== ""
        );

        console.log(
            `Habilidades para estudar: ${habilidadesImportantes.join(", ")}`
        );

    } catch (erro) {

        console.error("Erro ao executar o SkillMatch:", erro);

    }
}


// ==========================================
// INICIAR SISTEMA
// ==========================================

executarSkillMatch();
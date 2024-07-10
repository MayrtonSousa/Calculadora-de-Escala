function conversaoParaEscala(medidaReal, escala) {
    // Converte a medida real de metros para centímetros
    const medidaRealCm = medidaReal * 100;
    return medidaRealCm / escala;
}

function conversaoParaReal(medidaEscala, escala) {
    // Converte a medida em escala para a medida real em centímetros e depois para metros
    const medidaRealCm = medidaEscala * escala;
    return medidaRealCm / 100;
}

function calcular() {
    const opcao = document.getElementById("opcao").value;
    const medida = parseFloat(document.getElementById("medida").value);
    const escala = parseFloat(document.getElementById("escala").value);
    let resultado = '';

    if (isNaN(medida) || isNaN(escala)) {
        resultado = 'Por favor, insira valores válidos para medida e escala.';
    } else {
        if (opcao === "real-para-escala") {
            const medidaEscala = conversaoParaEscala(medida, escala);
            resultado = `A medida em escala é: ${medidaEscala.toFixed(2)} cm`;
        } else if (opcao === "escala-para-real") {
            const medidaReal = conversaoParaReal(medida, escala);
            resultado = `A medida real é: ${medidaReal.toFixed(2)} m`;
        }
    }

    document.getElementById("resultado").innerText = resultado;
}

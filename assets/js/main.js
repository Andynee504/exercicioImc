function meuEscopo() {
    const formulario = document.querySelector(`.calcule-seu-IMC`);
    const resultado = document.querySelector(`.resultado`);

    function calculo(evento) {
        evento.preventDefault();
        const peso = formulario.querySelector(`.peso`);
        const altura = formulario.querySelector(`.altura`);
        const pesoFormatado = parseInt(peso.value);
        const alturaFormatado = parseInt(altura.value);
        const calculoImc = (pesoFormatado/((alturaFormatado/100) **2));

        if (!peso.value && !altura.value) {
            resultado.innerHTML = `Preencha todos os campos adequadamente.`;
        } else if (!peso.value || !pesoFormatado) {
            resultado.innerHTML = `Preencha o campo "Peso (em kg):" adequadamente com apenas números.`;
        } else if (!altura.value || !alturaFormatado) {
            resultado.innerHTML = `Preencha o campo "Altura (em cm):" adequadamente com apenas números.`;
        } else if (pesoFormatado && alturaFormatado) {
            if (altura.value < 40 || altura.value > 250 || peso.value < 2 || peso.value > 595) {
                resultado.innerHTML = `Confira se não há erros. Seu IMC é ${calculoImc}`;
            } else {
                if (calculoImc <18.5) {
                    resultado.classList.add(`.resultado-2`);
                    resultado.innerHTML = `Seu IMC é ${calculoImc} (abaixo do peso).`;
                } else if (calculoImc >=18.5 && calculoImc < 25) {
                    resultado.classList.add(`.resultado-1`);
                    resultado.innerHTML = `Seu IMC é ${calculoImc} (peso ideal).`;
                } else if (calculoImc >=25 && calculoImc <30) {
                    resultado.classList.add(`.resultado-2`);
                    resultado.innerHTML = `Seu IMC é ${calculoImc} (sobrepeso).`;
                } else if (calculoImc >=30 && calculoImc <35) {
                    resultado.classList.add(`.resultado-3`);
                    resultado.innerHTML = `Seu IMC é ${calculoImc} (obesidade grau 1).`;
                } else if (calculoImc >=35 && calculoImc <40) {
                    resultado.classList.add(`.resultado-3`);
                    resultado.innerHTML = `Seu IMC é ${calculoImc} (obesidade grau 2).`;
                } else if (calculoImc >= 40) {
                    resultado.classList.add(`.resultado-3`);
                    resultado.innerHTML = `Seu IMC é ${calculoImc} (obesidade grau 3).`;
                } else {
                    resultado.classList.add(`.resultado-4`);
                    resultado.innerHTML = `Ocorreu algum erro inesperado.`;
                    console.log(typeof calculoImc, calculoImc);
                    console.log(typeof peso.value, peso.value);
                    console.log(typeof altura.value, altura.value);
                }
            }
        } else {
            resultado.innerHTML = `Ocorreu algum erro MUITO inesperado.`;
        }
        
    }

    formulario.addEventListener(`submit`, calculo);

}
meuEscopo();

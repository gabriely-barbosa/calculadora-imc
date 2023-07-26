// Pegar o id="form"
const form = document.getElementById('form');

//Fazer um submit para os input
form.addEventListener('submit', function(event) {
    //O event.preventDefault() vai prevenir o comportamento padrão do evento, impedindo o carregamento da page quando enviarmos os dados
    event.preventDefault();

    //Pegar os dados dos input
    const weight = document.getElementById('weight').value; // O value vai pegar o valor do input referente
    const height = document.getElementById('height').value;

    // Calculo 
    const bmi = (weight / (height * height)).toFixed(2); //.toFixed serve para aparecer somente dois números após o ponto decimal

    // Pegar o value de <span id="value"> para adicionar algo dentro dele
    const value = document.getElementById('value');
    let description = '';

    //Adicionar a core estilo para os calculos bmi em casos opostos ao peso ideal(vermelho)
    value.classList.add('attention');

    // Tirar a class="hiden"
    document.getElementById('infos').classList.remove('hidden');

    // Condições para o resultado de cada calculo imc
     if (bmi < 18) {
        description = 'Cuidado! Você está abaixo do peso!';
     } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no peso ideal!';
        //Remover a cor estilo "padrão"(vermelho) para o calculo bmi
        value.classList.remove('attention');
        //Adicionar a cor estilo para o calculo de peso ideal(verde)
        value.classList.add('normal');
     } else if (bmi > 25 && bmi <= 30) {
        description = 'Cuidado! Você está com sobrepeso!';
     } else if (bmi > 30 && bmi <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!';
     } else if (bmi > 35 && bmi <= 40) {
        description = 'Cuidado! Você está com obesidade severa!';
     } else {
        description = 'Cuidado! Você está com obesidade mórbida!';
     }

     // Mostrar o valor do calculo bmi
     value.textContent = bmi.replace('.', ','); //.replace vai trocar o ponto por virgula
     // Fazer com que o texto de description apareça dentro do <span>
     document.getElementById('description').textContent = description;
});
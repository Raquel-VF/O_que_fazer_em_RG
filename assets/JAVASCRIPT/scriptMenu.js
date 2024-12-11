const dayElement = document.querySelector('.menu-day');
const dateElement = document.querySelector('.menu-date');

function updateDate(){
    const now = new Date();
    const dayOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    const day = dayOfWeek[now.getDay()];
    const date = now.toLocaleDateString("pt-BR", { day:"2-digit", month:"2-digit", year:"numeric",});

    dayElement.textContent = day;
    dateElement.textContent = date;
}

updateDate();
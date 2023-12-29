// Для верхней панели меню
const intrBtn = document.querySelector('.intro');
const instalBtn = document.querySelector('.install');
const inputsBtn = document.querySelector('.inputs-li');
const resumeBtn = document.querySelector('.r-example');

intrBtn.addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.descrip');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('introduction')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});

instalBtn.addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.descrip');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('instruction')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});

inputsBtn.addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.descrip');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('inputs')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});

resumeBtn.addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.descrip');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('resume')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});

// для команд в деплой отделе

const deployPanelLies = document.querySelectorAll('.inst li');

deployPanelLies[0].addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.deploy-type');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('cap-rover')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});

deployPanelLies[1].addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.deploy-type');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('docker')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});

// для команд в command отделе

const startBtn = document.querySelector('.start');
const stuckBtn = document.querySelector('.stuck');

startBtn.addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.com');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('out-start')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});

stuckBtn.addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.com');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('out-stuck')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});

// для кнопок в inputs отделе

const subPanelLies = document.querySelectorAll('.inp li');

subPanelLies[0].addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.chat-inp');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('command')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});

subPanelLies[1].addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.chat-inp');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('keyboard')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});

subPanelLies[2].addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.chat-inp');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('message')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});

/// keyBoards button handler

const almatyBtn = document.querySelector('.almaty');
const astanaBtn = document.querySelector('.astana');
const karagandaBtn = document.querySelector('.karaganda');

almatyBtn.addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.keyb');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('out-almaty')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});

astanaBtn.addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.keyb');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('out-astana')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});

karagandaBtn.addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.keyb');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('out-karaganda')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});

// message btn handler 

const createMsgBtn = document.querySelector('.create');
const profileMsgBtn = document.querySelector('.profile');
const contactsMsgBtn = document.querySelector('.contacts');

createMsgBtn.addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.msg');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('out-create')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});

profileMsgBtn.addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.msg');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('out-profile')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});

contactsMsgBtn.addEventListener('click', () => {
    const descriptionDivs = document.querySelectorAll('.msg');

    descriptionDivs.forEach((div) => { 
        if (div.classList.contains('out-contacts')) { 
            div.classList.add('active'); 
        } else {
            div.classList.remove('active'); 
        }
    });
});
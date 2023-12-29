let vm = Vue.createApp({
    data() {
        return {
            imgSrcObj: {
                src: [
                        'https://cojo.ru/wp-content/uploads/2023/01/lisy-ari-1.webp',
                        'https://pibig.info/uploads/posts/2022-07/1657211357_2-pibig-info-p-krasivie-kartinki-na-telefon-babochki-2.jpg',
                        'https://s00.yaplakal.com/pics/pics_original/5/0/6/17827605.jpg',
                        'https://www.gctc.ru/media/images/education/general/cosmos_1.jpg',
                     ],
                time: 1000,
            },
        }
    },
});

vm.directive('img-src-changer', {
    mounted(el, binding) {
        const sources = binding.value.src;
        const time = binding.value.time;

        if(binding.modifiers.random){
            let randomIndex = Math.floor(Math.random() * sources.length);

            function changeSrc() { 
                el.src = sources[randomIndex];
                randomIndex = Math.floor(Math.random() * sources.length);
        
                setTimeout(changeSrc, time);
            }
        
            setTimeout(changeSrc, time);

        } else {
            let index = 0;
    
            function changeSrc() {
                if (index <= sources.length) {
                    if( index === (sources.length)) index = 0;
                    el.src = sources[index];
                    index++;
            
                    setTimeout(changeSrc, time);
                }
            }
        
            setTimeout(changeSrc, time);
        }
    },
});

vm.mount('#root');
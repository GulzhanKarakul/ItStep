let va = Vue.createApp( {
    data: () => {
        return {
            day: '',
            color: '',
            className: 'super',
            list: ['first', 'second', 'third', 'forth'],
        }
    },
    mounted() {

    },
    methods: {

    },
});

va.directive('week-day', {
    updated(el, binding){
        let currentDay = new Date(binding.instance.day);
        let weekday = currentDay.getDay();
        let workDay = el.nextSibling;
        let weekend = workDay.nextSibling;

        if(weekday ==  '6' || weekday == '0') {
            weekend.style.display = 'block';
            workDay.style.display = 'none';
        }
        else {
            weekend.style.display = 'none';
            workDay.style.display = 'block';
        }
        
    }
});

va.directive('random-color', {
    updated(el) {
        el.style.backgroundColor = generateColor();
    }
});

va.directive('new-tag', {
    mounted(el, binding) {
        let newTag = document.createElement(binding.arg);
        console.log(binding)
        newTag.className = binding.value;
        newTag.textContent = 'ссылка'
        el.append(newTag);
    }
});

va.directive('list-reverse', {
    mounted(el, binding) {
        el.addEventListener('click', () => {
            let array = binding.value;
            console.log(array);
            array.reverse();
        })
    }
});

va.directive('list-random', {
    mounted(el, binding) {
        el.addEventListener('click', () => {
            let array = binding.value;
            console.log(array);
            let newArr = [];
            
            // for(let i=0; i < array.length; i++){
                let index = Math.floor(Math.random() * array.length);
                let li = array[index]
                
                if(newArr.indexOf(li) > 0) continue;
                else newArr.push(li);
            // };
            binding.instance.list = newArr;
            console.log(newArr);
        })
    }
});

va.mount("#root");

function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
}
// 1. Создать редактор постов на Vue. 
// Пост состоит из блоков, которые хранятся в массиве. 
// Каждому отдельному блоку можно установить цвет текста, фон, шрифт, размер шрифта, начертание шрифта (курсив, жирный). 
// Редактирование текста реализовать через textarea. 
// Все переносы должны сохраняться в готов тексте.

// 2. Скинуть код html и js


let PostContent = {
    data: () => {
        return {
            allPosts: [],
            newPostText: '',
            backgroundImage: {
                'pink': 'https://klike.net/uploads/posts/2022-10/1666592242_1.jpg',
                'dark': 'https://i.pinimg.com/736x/10/e2/e8/10e2e88c5db172d760b0b96033318afd.jpg',
                'light': 'https://png.pngtree.com/thumb_back/fw800/background/20210226/pngtree-pink-eucalyptus-leaves-wallpaper-image_568011.jpg',
                'blue': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJX53iNn-QNYNhskdiKRxP9QZAfNLvSf0pQQ&usqp=CAU',
                'abstraction': 'https://funart.pro/uploads/posts/2022-08/thumbs/1659735711_69-funart-pro-p-fon-dlya-telefona-aifon-krasivo-69.jpg',
            },
            textColor: '',
            size: '',
            style: '',
            bond: false,
            italic: false,
            reductText: '',
            currentDiv: 'div1',
        }
    },
    mounted() {

    },
    methods: {
        createNewPost(){
            let post = {};
            if(this.newPostText !== '' || this.newPostText !== null || this.newPostText !== undefined){
                const formattedText = this.newPostText.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;');
                post['text'] = formattedText;
                post['bcgrnd'] = {
                    backgroundImage: `url(${this.backgroundImage['light']})`,
                    backgroundSize: 'cover',
                };
                post['tools'] = {
                    color: '#000',
                    fontSize: '20px',
                    fontFamily: 'Arial',
                    fontWeight: 500,
                    fontStyle: '',
                };
                post['show'] = false,
                
                this.allPosts.push(post);
            };
            this.newPostText = '';
        },
        panelStyle(index){
            let currentPost = allPosts[index];
            return currentPost['tools'];
        },
        showPanel(index){
            let post = this.allPosts[index];
            post['show'] = !post['show'];
        },
        showDiv(divName) {
            this.currentDiv = divName;
        },
        chooseColor(index) {
            let post = this.allPosts[index];
            let tools = post['tools'];
            tools.color = this.textColor;
            this.textColor = '';
        },
        chooseBackgrnd(type, index) {
            let post = this.allPosts[index];
            let bcgrnd = post['bcgrnd'];
            bcgrnd.backgroundImage = `url(${this.backgroundImage[type]})`;
        },
        changeStyle(index) {
            let post = this.allPosts[index];
            let tools = post['tools'];
            tools.fontFamily = this.style;
        },
        changeFontSize(index) {
            let post = this.allPosts[index];
            let tools = post['tools'];
            tools.fontSize = `${this.size}px`;
        },
        isBond(index){
            let post = this.allPosts[index];
            let tools = post['tools'];
            if(!this.bond) tools.fontWeight = 700;
            else tools.fontWeight = 500;
        },
        isItalic(index) {
            let post = this.allPosts[index];
            let tools = post['tools'];
             if(!this.italic) tools.fontStyle = `italic`;
             else tools.fontStyle = '';
        },
        changePost(index){
            let post = this.allPosts[index];
            if(this.reductText !== '' || this.reductText !== null || this.reductText !== undefined){
                const formattedText = this.reductText.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;');
                post['text'] = formattedText;
            };

            this.reductText = '';
        },
    },
    computed: {

    },
}

Vue.createApp(PostContent).mount('#root');
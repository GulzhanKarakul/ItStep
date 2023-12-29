<template>
      <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark"> 
      <div class="container-fluid"> 
        <a class="navbar-brand" href="#">Главная</a> 
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation"> 
          <span class="navbar-toggler-icon"></span> 
        </button> 
        <div class="collapse navbar-collapse" id="navbarColor01"> 
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
            <li class="nav-item"> 
              <router-link class="nav-link active" to="/galery">Галерея</router-link> 
            </li> 
            <li class="nav-item"> 
              <router-link class="nav-link active" aria-current="page" to="/contacts">Контакты</router-link> 
            </li> 
          </ul> 
          <form class="d-flex" role="search"> 
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> 
            <button class="btn btn-outline-light" type="submit">Search</button> 
          </form> 
        </div> 
      </div> 
    </nav>
  
  
    <router-view 
    :user="user"
    ></router-view>

</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            user: {
                userInfo: {
                    name: 'Годжо',
                    lastName: 'Сатору',
                    birthDate: '1993-12-01',
                    number: 87771156580,
                    avatar: 'https://abrakadabra.fun/uploads/posts/2022-02/1646073209_12-abrakadabra-fun-p-magicheskaya-bitva-avatarka-24.jpg',
                },
                userGalery: [
                    'https://abrakadabra.fun/uploads/posts/2022-02/1646073192_4-abrakadabra-fun-p-magicheskaya-bitva-avatarka-7.jpg',
                    'https://i.pinimg.com/280x280_RS/ac/0d/d9/ac0dd919e9b6722dcc0ef0c941be35ea.jpg',
                    'https://sun9-33.userapi.com/impg/qZ5qs5PE-mSilCS0yAxyclMPEykPhdPwtlZN4Q/xSGbb_Onifg.jpg?size=704x939&quality=96&sign=55f9f8bcb4455b09e5f351b31079eb7d&type=album',
                    'https://abrakadabra.fun/uploads/posts/2022-02/1646046929_1-abrakadabra-fun-p-geto-suguru-art-1.jpg',
                    'https://desu.shikimori.me/uploads/poster/characters/168067/main_2x-14c718632e69447d051586a8ea59084f.webp',
                    'https://i.pinimg.com/736x/dc/06/29/dc062985f6f32dee43b41002e4a220db.jpg',
                    'https://sun9-35.userapi.com/impg/n2sYSnwXEVf4TlqfiQ-kH1njocW4g_czDbG7ug/9K79vRG8l3E.jpg?size=604x604&quality=95&sign=44c74c9cf6f8c2176474cb807b1b92aa&c_uniq_tag=l-IPw6gA3RgAHhv1FeYDCBzxk29G03D9ySyAW9HTPhE&type=album',
                    'https://i.pinimg.com/1200x/ba/f6/b0/baf6b0190b27bafed09a3aa58e88f599.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhM2Loa3jhct8vUlTX33dO6NjPDCAeGP2rwQ&usqp=CAU',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyez_jblReK4oQHTqjiGJohj1xVid1Ou738rVQQ8GSpfDQ1sYTWtlzpnt1-YEFzta1rg&usqp=CAU',
                ],
                userContacts: [
                    {id: 0, name: 'Нанами', number: 87753339900},
                    {id: 1, name: 'Гето', number: 87751110011},
                    {id: 2, name: 'Сукуна', number: 87754441188},
                    {id: 3, name: 'Тодзи', number: 87759996600},
                ],
            }
        }
    },
    methods: {
        
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    /* background: #88b5f5; */
}
</style>

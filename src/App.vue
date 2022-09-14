<template>
  <div>
    <card-list :list-data="listData"/>
  </div>
</template>

<script>
import CardList from "@/components/CardList"

  export default{
    name: "App",

    components: {
      CardList,
    },

    data() {
      return{
        listData: [
          {
            id: 1,
            imgSrc:
              'https://ireland.apollo.olxcdn.com/v1/files/ajv37yhp6lrc-UA/image;s=1080x1347',
            title: 'термокомбінезон для дівчинки фірми Lupilu',
            place: 'Межово-Вчора 17:51',
            price: 500,
          },
          {
            id: 2,
            imgSrc:
              'https://ireland.apollo.olxcdn.com/v1/files/ajv37yhp6lrc-UA/image;s=1080x1347',
            title: 'термокомбінезон для дівчинки фірми Lupilu',
            place: 'Межово-Вчора 17:51',
            price: 500,
          },
          {
            id: 3,
            imgSrc:
              'https://ireland.apollo.olxcdn.com/v1/files/ajv37yhp6lrc-UA/image;s=1080x1347',
            title: 'термокомбінезон для дівчинки фірми Lupilu',
            place: 'Межово-Вчора 17:51',
            price: 500,
          },
        ],
      }
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
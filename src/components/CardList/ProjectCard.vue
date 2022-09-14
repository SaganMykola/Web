<template>
    <div class="card-container">
        <div class="image">
            <span ></span>
            <img :src="imgSrc" />
        </div>
        <div class="title">
            <p>{{title}}</p>
        </div>
        <div class="place-and-time">{{place}}</div>
        <div class="footer">
            <div>{{price}} грн.</div>
            <button class="button">
                <img src="https://emojigraph.org/media/twitter/white-heart_1f90d.png"/>
            </button>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'ProjectCard',

        props: {
            imgSrc: {
                type: String,
                default: "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg",
            },
            
            title: {
                type: String,
                default: "no title",
            },
            price: {
                type: Number,
                default: 0,
            },
            place: {
                type: String,
                default: "",
            },
        },
    }
</script>


<style lang="css" scoped>

    .card-container {
      border: 2px solid black;
      width: 300px;
      height: 520px;
      margin: 20px;
      padding: 10px;
    }
    .place-and-time{
        display: flex;
        justify-content: left;
        font-size: 14px;
    }
    .footer{
        display: flex;
        justify-content: space-between;
        padding: 30px;
    }
    .button{
        display: flex;
        width: 40px;
        height: 35px;
        cursor: pointer;
        border: none;
        background-color: white;
    }
    .button :hover{
        background-color: rgb(226, 224, 224);
    }
    .button img{
        width: 32px;
        height: 32px;
    }
    .image {
      padding: 10px;
    }
    .image img {
      width: 100%;
    }
    </style>
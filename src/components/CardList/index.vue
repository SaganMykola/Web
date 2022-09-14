<template>
    <div class="container">
        <project-card 
        v-for="item in listData"
        :key="item.id"
        :img-src="item.imgSrc"
        :title="item.title"
        :place="item.place"
        :price="item.price"
        />
    </div>
</template>

<script>
    import ProjectCard from './ProjectCard.vue'
    export default {
        name: "CardList",
        
        components: {
            ProjectCard,
        },

        props: {
            listData:{ 
                type: Array,
                default: () => [],
            },
        },
    }
</script>

<style lang="css" scoped>
    .container{
        display: flex;
    }
</style>
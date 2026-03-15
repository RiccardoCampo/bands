<template>
    <div v-if="!bannerDismissed" class="banner">
        <button class="button" @click="dismiss" title="Dismiss">
          <cross-icon style="margin-top: 1px;" :height="28" :width="28"/>
        </button>
        <button class="button page" @click="changePage">
          <chevron-up v-if="page == 0" style="rotate: 90deg; margin-top: 1px;" :height="28" :width="28"/>
          <chevron-down v-if="page == 1" style="rotate: 90deg; margin-top: 1px; margin-left: -2px;" :height="28" :width="28"/>
        </button>
        <div v-if="page == 0" class="page">
            <h1>Ciao, welcome to Bands demo!</h1>
            <span>Bands is meant for music lovers and helps you catalogue and sort out your music tastes. You can add your favorite artists and assign scores to them. You decide which scores, by defining metrics. This is entirely subjective, no magic is involved and you'll need to enter all the information yourself</span><br>
            <span>That said, this is a demo, so what you're seeing here are <i>my</i> favorite bands.</span><br>
            
            <h1>How to use Bands</h1>
            <ul>
                <li>Hit enter or click the search icon to browse all artists</li>
                <li>Add filters to the search by typing to get suggested metrics</li>
                <li>You can define a range of values for each metric; if you look for <i>rock [3,5]</i> only artists having rock score between 3 and 5 will be displayed (bounds included)</li>
                <li>Search artists by name by typing text and hitting enter or clicking the search icon</li>
                <li>Add or edit artists, but this is a demo, on page refresh, all edits will be gone</li>
            </ul>
        </div>
        <div v-if="page == 1" class="page">
            <h1>Why I created Bands</h1>
            <span>I created this as I listen to over 500 different artists, and I often find myself taking more than 5 minutes just deciding what to listen to. I always know what kind of music I want to listen to, but I can't remember all the artists matching that "taste profile". It was not my intention to create a whole website for that; I would've preferred adding tags to artists in my music streaming services, but that is not possible, so here we are.</span><br>
            <span>As you can see, most metrics are not just tags, and that is because I think they are fuzzy. Defining an artist as being <i>rock</i> is just too vague, I believe most of these characteristics are better represented as a spectrum (thus you could see an artist with multiple scores as a point in a multidimensional space). Musical preferences are highly individual, and it's up to you to determine them, not music critics or someone else's playlist name.</span><br>
            <span>The name? I got it from audio mixer bands, since you can tune an artists score as if you were tuning Hertz bands on a mixer. And it's also a play on words.</span><br>
            
            <h1>Technical notes</h1>
            <span>I am not using cookies; that's why you will get this banner on each refresh. It's a demo, you'll have to deal with it.</span><br>
            <span>You can spin up your instance of Bands, follow the instructions in the repository, though it requires some technical skills. I might host a multi-user version of the website in the future, but don't wait for that.</span><br>
            <span>I created this as a way to learn frontend development, I did not use AI, the code and UX are far from perfect.</span>
        </div>
    </div>
</template>


<script lang="ts">
import { usePageStatus } from '@/store/pageStatus';
import { mapActions, mapState } from 'pinia';
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'DemoBanner',
    data () {
        return {
            page: 0,
        }
    },
    methods: {
        ...mapActions(usePageStatus, ['dismissBanner']),
        dismiss() {
            this.dismissBanner()
        },
        changePage() {
            this.page = (this.page + 1) % 2
        }
    },
    computed: {
        ...mapState(usePageStatus, ['bannerDismissed'])
    }
});
</script>

<style scoped>
div.banner {
    position: absolute;
    z-index: 100;
    top: 15vw;
    left: 30vw;
    width: 40vw;
    max-height: 30vw;
    background-color: var(--lightblue);
    border: 4px solid var(--darkblue);
    text-align: justify;
    overflow-y: scroll;
}
div.page {
    margin-left: 10px;
    margin-right: 10px;
}
h1 {
    text-align: center;
}
span {
    font-size: 1.5pc;
    display: inline-block;
    margin-top: 20px;
}
li {
    font-size: 1.5pc;
}

button {
    background-color: var(--lightred); 
    color: var(--darkred);
    border: none;
    height: 36px;
    transition: all 0.1s;
    float: right;
}
button:hover {
    background-color: var(--darkred); 
    color: var(--lightred);
}

button.page {
    background-color: var(--lightgreen); 
    color: var(--darkgreen);
}
button.page:hover{
    background-color: var(--darkgreen); 
    color: var(--lightgreen);
}

</style>

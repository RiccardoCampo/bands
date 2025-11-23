<script lang="ts">
import { ColorOrder } from '@/config';
import { usePageStatus } from '@/store/pageStatus';
import { mapState } from 'pinia';
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'ColorsMixin',
    methods: {
        getColor (index: number) {
            return ColorOrder[(Math.floor(index) + this.colorOffset) % ColorOrder.length];
        },
        addColors (array: any[]) {            
            return array.map((element, index) => ({...element, color: this.getColor(index)}))
        },
        addColorsToMap (map: any) {
            Object.keys(map).forEach(
                (key, index) => {map[key]["color"] = this.getColor(index)}
            )
            
            return map
        },
    },
    computed: {
        ...mapState(usePageStatus, ['colorOffset']),
    }
});

</script>
  
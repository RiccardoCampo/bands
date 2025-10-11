<script lang="ts">
import { ColorOrder } from '@/config';
import { usePageStatus } from '@/store/pageStatus';
import { mapState } from 'pinia';
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'ColorsMixin',
    methods: {
        getColor (index: number) {
            return ColorOrder[Math.floor(index) % ColorOrder.length];
        },
        addColors (array: any[]) {            
            return array.map((element, index) => ({...element, color: this.getColor(index + this.colorOffset)}))
        },
        // TODO add correct typing for map.
        addColorsToMap (map: any) {
            Object.keys(map).forEach(
                (key, index) => {map[key]["color"] = this.getColor(index + this.colorOffset)}
            )
            
            return map
        },
    },
    computed: {
        ...mapState(usePageStatus, ['colorOffset']),
    }
});

</script>
  
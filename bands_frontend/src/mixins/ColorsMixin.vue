<script>
import { ColorOrder } from '@/config';
import { usePageStatus } from '@/store/PageStatus';
import { mapState } from 'pinia';


export default {
    name: 'ColorsMixin',
    methods: {
        getColor (index) {
            return ColorOrder[Math.floor(index) % ColorOrder.length];
        },
        addColors (array) {            
            return array.map((element, index) => ({...element, color: this.getColor(index + this.colorOffset)}))
        },
        addColorsToMap (map) {
            Object.keys(map).forEach(
                (key, index) => {map[key]["color"] = this.getColor(index + this.colorOffset)}
            )
            
            return map
        },
    },
    computed: {
        ...mapState(usePageStatus, ['colorOffset']),
    }
}

</script>
  
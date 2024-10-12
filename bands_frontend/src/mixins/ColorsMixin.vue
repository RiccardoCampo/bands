<script>
import { ColorOrder } from '@/config';


export default {
name: 'ColorsMixin',
methods: {
    getColor (index) {
        return ColorOrder[Math.floor(index) % ColorOrder.length];
    },
    addColors (array) {
        const offset = Math.floor(Math.random() * ColorOrder.length);
        
        return array.map((element, index) => ({...element, color: this.getColor(index + offset)}))
    },
}
}

</script>
  
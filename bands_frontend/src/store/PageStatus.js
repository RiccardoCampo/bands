import { ColorOrder } from '@/config';
import {defineStore} from 'pinia'

export const usePageStatus = defineStore('page-status', {
    state: () => ({
        _colorOffset: undefined,
        listActive: false,
        pageSize: {
            width: 0,
            height: 0,
        },
    }),
    getters: {
        headerMinimized () {
            return this.listActive
        },
        colorOffset () {
            if (this._colorOffset === undefined)
                this._colorOffset = Math.floor(Math.random() * ColorOrder.length);
            
            return this._colorOffset
        }
    },
    actions: {
        activateList () {
            this.listActive = true
        },
        updatePageSize (width, height) {
            this.pageSize.width = width
            this.pageSize.height = height
        }
    }
})

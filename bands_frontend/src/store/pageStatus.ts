import { ColorOrder } from '@/config';
import {defineStore} from 'pinia'

export const usePageStatus = defineStore('page-status', {
    state: () => ({
        _colorOffset: undefined as number | undefined,
        listActive: false as boolean,
        newArtistActive: false as boolean,
        searchStarted: false as boolean,
        pageSize: {
            width: 0,
            height: 0,
        },
    }),
    getters: {
        headerMinimized (): boolean {
            return this.listActive
        },
        colorOffset (): number {
            if (this._colorOffset === undefined)
                this._colorOffset = Math.floor(Math.random() * ColorOrder.length);
            
            return this._colorOffset
        }
    },
    actions: {
        startSearch() {
            this.searchStarted = true
            this.activateList()
        },
        activateList () {
            this.listActive = true
        },
        showNewArtist() {
            this.newArtistActive = true
            this.activateList()
        },
        hideNewArtist() {
            this.newArtistActive = false
        },
        updatePageSize (width: number, height: number) {
            this.pageSize.width = width
            this.pageSize.height = height
        }
    }
})

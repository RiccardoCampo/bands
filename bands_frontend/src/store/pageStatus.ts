import { ColorOrder } from '@/config';
import { debounce } from '@/utils';
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
        artistsLikeThisName: "" as string,
        error: "" as string,
        bannerDismissed: !process.env.VUE_APP_DEMO as boolean,
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
        },
        setArtistLikeThisName(name: string) {
            this.artistsLikeThisName = name
        },
        setError(error: string) {
            this.error = error            
            setTimeout(() => {
                this.error = ""
            }, 5000);
        },
        dismissBanner() {
            this.bannerDismissed = true
        },
    }
})

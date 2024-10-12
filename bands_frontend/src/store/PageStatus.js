import {defineStore} from 'pinia'

export const usePageStatus = defineStore('page-status', {
    state: () => ({
        listActive: false,
        pageSize: {
            width: 0,
            height: 0,
        },
    }),
    getters: {
        headerMinimized () {
            return this.listActive
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

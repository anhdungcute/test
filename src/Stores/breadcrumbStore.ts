// src/stores/breadcrumbStore.ts
import { defineStore } from 'pinia'

interface Breadcrumb {
  path: string
  label: string
}

export const useBreadcrumbStore = defineStore('breadcrumb', {
  state: () => ({
    breadcrumbs: [
      { path: '/', label: 'Home' }
    ] as Breadcrumb[]
  }),
  actions: {
    // Cập nhật breadcrumb
    setBreadcrumbs(newBreadcrumbs: Breadcrumb[]) {
      this.breadcrumbs = newBreadcrumbs
    },
    // Thêm breadcrumb mới
    addBreadcrumb(breadcrumb: Breadcrumb) {
      this.breadcrumbs.push(breadcrumb)
    },
    // Xóa breadcrumb cuối cùng
    removeLastBreadcrumb() {
      this.breadcrumbs.pop()
    }
  }
})

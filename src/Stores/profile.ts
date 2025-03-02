import { defineStore } from 'pinia';

export interface UserProfile {
  name: string;
  avatar: string;
}

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: {} as UserProfile,
  }),

  actions: {
    setProfile(profile: UserProfile) {
      this.profile = profile;
      // Lưu thông tin vào localStorage để khi reload không mất dữ liệu
      localStorage.setItem('profile', JSON.stringify(profile));
    },

    loadProfile() {
      const storedProfile = localStorage.getItem('profile');
      if (storedProfile) {
        this.profile = JSON.parse(storedProfile);
      }
    },

    clearProfile() {
      this.profile = {} as UserProfile;
      localStorage.removeItem('profile');
    },
  },

  getters: {
    getProfile(state): UserProfile {
      return state.profile;
    },
  },
});

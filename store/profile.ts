import create from 'zustand';

export type ViewType = 'board' | 'card';

export type ProfileStore = {
  viewType: ViewType;
  setViewType: (viewType: ViewType) => void;
};

const useProfileStore = create<ProfileStore>((set) => ({
  viewType: 'board',
  setViewType: (viewType) => set({ viewType }),
}));

export default useProfileStore;

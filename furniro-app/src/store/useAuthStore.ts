import { create } from 'zustand';

type TUseAuthStore = {
  email: string;
  setAuthStore: ({ _email }: { _email: string }) => void;
};

const useAuthStore = create<TUseAuthStore>((set) => ({
  email: '',
  /* _email yg didapat dari page login, di assign ke props email yg ada di line 4 */
  setAuthStore: ({ _email }) => set(() => ({ email: _email })),
}));

export default useAuthStore;

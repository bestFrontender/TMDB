import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';
import { get } from 'radash';

import './assets/main.scss';
import toast, { Toaster } from 'react-hot-toast';
import { initializeI18n } from './services/i18n';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: error => {
      toast.error(get(error, 'error.message') || 'Неизвестная ошибка сервера');
    }
  }),
  mutationCache: new MutationCache({
    onError: error => {
      toast.error(get(error, 'error.message') || 'Неизвестная ошибка сервера');
    }
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000
    }
  }
});
initializeI18n().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Toaster />
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  );
});

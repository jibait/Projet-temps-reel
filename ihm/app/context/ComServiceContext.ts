import { createContext } from 'react';
import { ComService } from '../services/ComService';

export const ComServiceContext = createContext<ComService>(null!);
export const ComServiceProvider = ComServiceContext.Provider;
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { useRef } from "react";
import { ComService } from "./services/ComService";
import config from "./config";
import { Store } from "./store/Store";
import { StoreProvider } from "./context/StoreContext";
import { ComServiceProvider } from "./context/ComServiceContext";

export function Providers({ children }: { children: React.ReactNode }) {
  const store = useRef<Store | undefined>(undefined);
  const comService = useRef<ComService | undefined>(undefined);

  // Initialisation des services
  if (store.current === undefined || comService.current === undefined) {
    store.current = new Store();
    comService.current = new ComService({
      url: config.stompWebSocketUrl,
      queueName: config.messagingQueueName,
      store: store.current,
    });
  }

  return (
    <ChakraProvider>
      <StoreProvider value={store.current}>
        <ComServiceProvider value={comService.current}>
          {children}
        </ComServiceProvider>
      </StoreProvider>
    </ChakraProvider>
  );
}

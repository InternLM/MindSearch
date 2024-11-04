import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

export const MindsearchContext = createContext(
    {} as {
        activeNode: string;
        isEnd: boolean;
        chatIsOver: boolean;
        setActiveNode?: () => void;
    },
);
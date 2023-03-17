import type { ScriptableContext, ChartType, ChartEvent, ActiveElement } from 'chart.js';

import { Id } from '@/types/responseData';

export type ChartContext = ScriptableContext<ChartType>;

export type ChartClick = (e: ChartEvent, elements: ActiveElement[], idArray: Id[]) => void;

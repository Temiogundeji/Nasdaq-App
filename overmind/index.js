import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook,
} from 'overmind-react';
import { state } from './states';
import * as actions from './actions';
import * as effects from './effects';

export const useAppState = createStateHook();
export const useActions = createActionsHook();
export const useEffects = createEffectsHook();
export const useReaction = createReactionHook();

export const config = {
  state,
  actions,
  effects,
};

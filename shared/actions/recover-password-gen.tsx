// NOTE: This file is GENERATED from json files in actions/json. Run 'yarn build-actions' to regenerate

import * as Types from '../constants/types/provision'

// Constants
export const resetStore = 'common:resetStore' // not a part of recover-password but is handled by every reducer. NEVER dispatch this
export const typePrefix = 'recover-password:'
export const showDeviceListPage = 'recover-password:showDeviceListPage'
export const showExplainDevice = 'recover-password:showExplainDevice'
export const startRecoverPassword = 'recover-password:startRecoverPassword'
export const submitDeviceSelect = 'recover-password:submitDeviceSelect'

// Payload Types
type _ShowDeviceListPagePayload = {readonly devices: Array<Types.Device>}
type _ShowExplainDevicePayload = {readonly type: 'desktop' | 'mobile'; readonly name: string}
type _StartRecoverPasswordPayload = {readonly username: string}
type _SubmitDeviceSelectPayload = {readonly id: string}

// Action Creators
export const createShowDeviceListPage = (payload: _ShowDeviceListPagePayload): ShowDeviceListPagePayload => ({
  payload,
  type: showDeviceListPage,
})
export const createShowExplainDevice = (payload: _ShowExplainDevicePayload): ShowExplainDevicePayload => ({
  payload,
  type: showExplainDevice,
})
export const createStartRecoverPassword = (
  payload: _StartRecoverPasswordPayload
): StartRecoverPasswordPayload => ({payload, type: startRecoverPassword})
export const createSubmitDeviceSelect = (payload: _SubmitDeviceSelectPayload): SubmitDeviceSelectPayload => ({
  payload,
  type: submitDeviceSelect,
})

// Action Payloads
export type ShowDeviceListPagePayload = {
  readonly payload: _ShowDeviceListPagePayload
  readonly type: typeof showDeviceListPage
}
export type ShowExplainDevicePayload = {
  readonly payload: _ShowExplainDevicePayload
  readonly type: typeof showExplainDevice
}
export type StartRecoverPasswordPayload = {
  readonly payload: _StartRecoverPasswordPayload
  readonly type: typeof startRecoverPassword
}
export type SubmitDeviceSelectPayload = {
  readonly payload: _SubmitDeviceSelectPayload
  readonly type: typeof submitDeviceSelect
}

// All Actions
// prettier-ignore
export type Actions =
  | ShowDeviceListPagePayload
  | ShowExplainDevicePayload
  | StartRecoverPasswordPayload
  | SubmitDeviceSelectPayload
  | {type: 'common:resetStore', payload: {}}
import type { GestureResponderHandlers, LayoutChangeEvent } from 'react-native'

type OnLayout = ((event: LayoutChangeEvent) => void) | undefined

export interface RNExtraProps {
  onScrollShouldSetResponder?: unknown
  onScrollShouldSetResponderCapture?: unknown
  onSelectionChangeShouldSetResponder?: unknown
  onSelectionChangeShouldSetResponderCapture?: unknown
  onLayout?: OnLayout
  elevationAndroid?: number | string
}

export interface RNViewProps extends GestureResponderHandlers, RNExtraProps {
  rel?: any
  download?: any
}

export interface RNTextProps extends RNExtraProps {
  dir?: 'ltr' | 'rtl' | 'auto'
}

// KEEP IN SYNC WITH ^
export type RNOnlyProps =
  | 'onStartShouldSetResponder'
  | 'onScrollShouldSetResponder'
  | 'onScrollShouldSetResponderCapture'
  | 'onSelectionChangeShouldSetResponder'
  | 'onSelectionChangeShouldSetResponderCapture'
  | 'onLayout'
  | 'elevationAndroid'
  | 'rel'
  | 'download'
  | 'dir'
  // GestureResponderHandlers
  | 'onStartShouldSetResponder'
  | 'onMoveShouldSetResponder'
  | 'onResponderEnd'
  | 'onResponderGrant'
  | 'onResponderReject'
  | 'onResponderMove'
  | 'onResponderRelease'
  | 'onResponderStart'
  | 'onResponderTerminationRequest'
  | 'onResponderTerminate'
  | 'onStartShouldSetResponderCapture'
  | 'onMoveShouldSetResponderCapture'

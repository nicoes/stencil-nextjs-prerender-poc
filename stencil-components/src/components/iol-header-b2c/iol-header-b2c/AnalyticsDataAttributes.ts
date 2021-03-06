export type AnalyticsAction = 'ClickOnHeaderLink' | 'ClickOnHeaderTopicsLink' | 'ClickOnHeaderWerkZoekendenLink' | 'ClickOnHeaderOpleidingenLink' | 'ClickOnHeaderProfileLink' | 'ClickOnHeaderAccountLink'

export type AnalyticsAttributesProps = {
  action?: AnalyticsAction,
  label?: string
}

const AnalyticsDataAttributes = ({ action, label }: AnalyticsAttributesProps) => ({
  'data-analytics-action': action,
  'data-analytics-label': label
})

export default AnalyticsDataAttributes


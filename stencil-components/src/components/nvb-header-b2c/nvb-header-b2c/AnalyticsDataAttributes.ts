export type AnalyticsAction = 'ClickOnHeaderLink' | 'ClickOnHeaderAccountLink' | 'ClickOnHeaderWerkZoekendenLink' | 'ClickOnHeaderWerkgeversLink'
export type AnalyticsCategory = 'menu' | 'footer' | 'footer_contact_banner'

export type AnalyticsAttributesProps = {
  action?: AnalyticsAction,
  category?: AnalyticsCategory,
  label?: string
}

const AnalyticsDataAttributes = ({ action, category, label }: AnalyticsAttributesProps) => ({
  'data-analytics-action': action,
  'data-analytics-category': category,
  'data-analytics-label': label
})

export default AnalyticsDataAttributes


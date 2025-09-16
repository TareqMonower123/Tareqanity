import {NumberInputProps, useFormValue} from 'sanity'
import {Stack, Text} from '@sanity/ui'

/**
 * Subtracts a given number of minutes from a date string.
 * @param {string} date - The date string to subtract minutes from.
 * @param {number} minutes - The number of minutes to subtract.
 * @returns {Date} - The resulting date after subtracting the minutes.
 */
function subtractMinutesFromDate(date: string, minutes: number) {
  return new Date(new Date(date).getTime() - minutes * 60000)
}

/**
 * A custom input component for the "doorsOpen" field in the event document type.
 * It renders a text element that displays the date and time when the doors open,
 * based on the value of the "date" field and the value of the "doorsOpen" field.
 * @param {NumberInputProps} props - The props object passed to the component.
 * @returns {JSX.Element} - The rendered component.
 */
export function DoorsOpenInput(props: NumberInputProps) {
  const date = useFormValue(['date']) as string | undefined

  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      {typeof props.value === 'number' && date ? (
        <Text size={1}>
          Doors open{' '}
          {subtractMinutesFromDate(date, props.value).toLocaleDateString(undefined, {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })}
        </Text>
      ) : null}
    </Stack>
  )
}
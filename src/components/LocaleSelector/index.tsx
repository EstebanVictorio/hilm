import * as React from 'react';
import { Select } from '@headlessui/react';
import styles from './index.module.css';
import cn from 'clsx';

const locales = [
  { label: 'Spanish', value: 'es-MX', renderLocale: 'en-US' },
  { label: 'English (US)', value: 'en-US', renderLocale: 'en-US' },
  { label: 'Español', value: 'es-MX', renderLocale: 'es-MX' },
  { label: 'Inglés (US)', value: 'en-US', renderLocale: 'es-MX' },
] as const;

type Props = {
  locale?: typeof locales[number]['value'];
}

const classes = {
  container: cn(
    "flex flex-col items-start gap-1"
  )
}

export default function LocaleSelector({ locale = 'es-MX' }: Props) {
  const renderedLocales = locales.filter(l => l.renderLocale === locale)

  return (
    <div className={styles.Field}>
      <Select>
        {renderedLocales.map(l => (
          <option disabled={locale === l.value} key={`${l.value}-${l.label}`} value={l.value}>{l.label}</option>
        ))}
      </Select>
    </div>
  );
}

function CaretUpDownIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
      style={{ display: 'block', ...props.style }}
    >
      <path d="M11 10H5l3 3.5zm0-4H5l3-3.5z" />
    </svg>
  );
}

function CheckIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      {...props}
      style={{ display: 'block', ...props.style }}
    >
      <path d="m2.5 8.5 4 4 7-9" />
    </svg>
  );
}

function CaretUpIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
      style={{ display: 'block', ...props.style }}
    >
      <path d="M12 10H4l4-4.5z" />
    </svg>
  );
}

function CaretDownIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
      style={{ display: 'block', ...props.style }}
    >
      <path d="M12 6H4l4 4.5z" />
    </svg>
  );
}

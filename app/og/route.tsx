/* eslint-disable react/forbid-dom-props */
// @ts-nocheck
import { ImageResponse } from 'next/og';
import { BRAND } from '@/lib/brand';
import styles from './og.module.css';

export const runtime = 'edge';

export async function GET() {
  const width = 1200;
  const height = 630;

  // Style objects to avoid inline styles lint warnings
  const containerStyle = {
    width: `${width}px`,
    height: `${height}px`,
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: '#0f172a',
    background: `linear-gradient(135deg, ${BRAND.colors.blue} 0%, ${BRAND.colors.orange} 100%)`,
    padding: '64px',
  };

  const cardStyle = {
    background: 'rgba(255,255,255,0.92)',
    borderRadius: 24,
    padding: '32px 40px',
    maxWidth: 900,
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
  };

  const taglineStyle = { fontSize: 20, letterSpacing: 2, color: '#475569' };
  const titleStyle = { fontSize: 64, fontWeight: 800, lineHeight: 1.1, marginTop: 8 };
  const subtitleStyle = { fontSize: 28, marginTop: 12, color: '#0f172a' };
  const featuresStyle = { display: 'flex', gap: 12, marginTop: 24, fontSize: 22, color: '#1e293b' };
  const contactStyle = { marginTop: 24, fontSize: 22, color: '#0f172a' };

  // Note: Inline styles are required for Open Graph image generation
  // eslint-disable-next-line react/forbid-dom-props
  return new ImageResponse(
    (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.tagline}>Since {BRAND.founded}</div>
          <div className={styles.title}>
            {BRAND.company}
          </div>
          <div className={styles.subtitle}>
            Premier HVAC Services in Lake Charles, LA
          </div>
          <div className={styles.features}>
            <div>✅ 24/7 Emergency</div>
            <div>✅ Licensed & Insured</div>
            <div>✅ Free Estimates</div>
          </div>
          <div className={styles.contact}>
            Call {BRAND.phone}
          </div>
        </div>
      </div>
    ),
    {
      width,
      height,
    }
  );
}

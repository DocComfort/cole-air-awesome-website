import { ImageResponse } from 'next/og';
import { BRAND } from '@/lib/brand';

export const runtime = 'edge';

export async function GET() {
  const width = 1200;
  const height = 630;
  const blue = BRAND.colors.blue;
  const orange = BRAND.colors.orange;

  return new ImageResponse(
    (
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          color: '#0f172a',
          background: `linear-gradient(135deg, ${blue} 0%, ${orange} 100%)`,
          padding: '64px',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.92)',
            borderRadius: 24,
            padding: '32px 40px',
            maxWidth: 900,
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          }}
        >
          <div style={{ fontSize: 20, letterSpacing: 2, color: '#475569' }}>Since {BRAND.founded}</div>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, marginTop: 8 }}>
            {BRAND.company}
          </div>
          <div style={{ fontSize: 28, marginTop: 12, color: '#0f172a' }}>
            Premier HVAC Services in Lake Charles, LA
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 24, fontSize: 22, color: '#1e293b' }}>
            <div>✅ 24/7 Emergency</div>
            <div>✅ Licensed & Insured</div>
            <div>✅ Free Estimates</div>
          </div>
          <div style={{ marginTop: 24, fontSize: 22, color: '#0f172a' }}>
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

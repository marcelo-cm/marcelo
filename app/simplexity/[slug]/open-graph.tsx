import { ImageResponse } from 'next/og';

import IconBar from '@/components/molecules/IconBar';

export const alt = 'Simplexity. Research & Thought Pieces.';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await fetch(`https://.../posts/${params.slug}`).then((res) =>
    res.json(),
  );

  return new ImageResponse(
    (
      <div
        style={{
          background: '#171717',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ fontSize: 48 }}>
          Marcelo Chaman Mallqui
          <span
            style={{
              display: 'inline',
              color: '#A3A3A3',
            }}
          >
            —Software, Design & Writing
          </span>
        </h1>
        <h2 style={{ fontSize: 24 }}>{post.title}</h2>
      </div>
    ),
    {
      ...size,
    },
  );
}

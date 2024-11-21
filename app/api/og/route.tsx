import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

async function loadGoogleFont(font: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:opsz,wght@14..32,300..900`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error('failed to load font data');
}

const privateTag = () => {
  return (
    <p
      style={{
        position: 'absolute',
        top: '72px',
        right: '72px',
        fontSize: '2rem',
        margin: '0 0 0 0',
        padding: '1rem 1.5rem',
        color: '#A3A3A3',
        border: '1px solid #A3A3A3',
        borderRadius: '1rem',
      }}
    >
      PRIVATE CONTENT, DO NOT SHARE
    </p>
  );
};

const publicTag = () => {
  return (
    <p
      style={{
        position: 'absolute',
        top: '72px',
        right: '72px',
        fontSize: '2rem',
        margin: '0 0 0 0',
        padding: '1rem 1.5rem',
        color: '#A3A3A3',
        border: '1px solid #A3A3A3',
        borderRadius: '1rem',
      }}
    >
      PUBLIC, SHARE FREELY
    </p>
  );
};

const unlistedTag = () => {
  return (
    <p
      style={{
        position: 'absolute',
        top: '72px',
        right: '72px',
        fontSize: '2rem',
        margin: '0 0 0 0',
        padding: '1rem 1.5rem',
        color: '#A3A3A3',
        border: '1px solid #A3A3A3',
        borderRadius: '1rem',
      }}
    >
      UNLISTED, SHARE WITH CAUTION
    </p>
  );
};

const tagFunctions = {
  private: privateTag,
  public: publicTag,
  unlisted: unlistedTag,
};

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;

    const title = searchParams.get('title');
    const date = searchParams.get('date');
    const visibility = searchParams.get('visibility');

    const willOverflow = title && title.length > 50;

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: '4.75rem',
            color: 'white',
            display: 'flex',
            background: '#161616',
            width: '100%',
            height: '100%',
            position: 'relative',
            padding: '72px',
            textAlign: 'left',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            fontWeight: '300',
            fontFamily: 'Inter',
          }}
        >
          <p
            style={{
              position: 'absolute',
              top: '72px',
              left: '72px',
              fontSize: '3rem',
              color: '#A3A3A3',
              margin: '0 0 0 0',
            }}
          >
            {date}
          </p>
          {tagFunctions[visibility as 'private' | 'public' | 'unlisted']()}
          <div
            style={{
              display: 'flex',
              flexDirection: willOverflow ? 'column' : 'row',
              gap: '0',
              color: '#A3A3A3',
              margin: '0 0 0 0',
            }}
          >
            <p
              style={{
                margin: '0 0 0 0',
                color: '#FAFAFA',
              }}
            >
              Simplexity
            </p>
            <p style={{ margin: '0 0 0 0' }}>
              {' '}
              {!willOverflow && '—'}
              {title}
            </p>
          </div>
        </div>
      ),
      {
        width: 2160,
        height: 1080,
        fonts: [
          {
            name: 'Inter',
            data: await loadGoogleFont('Inter'),
            style: 'normal',
            weight: 300,
          },
        ],
      },
    );
  } catch (e) {
    // console.log(e);
    return new Response('Internal Server Error', { status: 500 });
  }
}

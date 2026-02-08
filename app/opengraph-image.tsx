import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Niklesh - Full Stack Software Engineer'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 128,
                    background: '#171717',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 40,
                    }}
                >
                    {/* Logo Icon */}
                    <div
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            background: '#0991FA',
                            marginRight: 40,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 60,
                            fontWeight: 900,
                            color: 'white',
                        }}
                    >
                        N
                    </div>
                    <div style={{ fontSize: 80, fontWeight: 900, letterSpacing: '-0.05em' }}>
                        Niklesh
                    </div>
                </div>
                <div
                    style={{
                        fontSize: 40,
                        color: '#A3A3A3',
                        marginTop: 20,
                        fontWeight: 500,
                        textAlign: 'center',
                        maxWidth: '800px',
                        lineHeight: 1.4,
                    }}
                >
                    Full Stack Software Engineer &<br />System Architecture Enthusiast
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported icons size metadata
            // config to also set the ImageResponse's width and height.
            ...size,
        }
    )
}

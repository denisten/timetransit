// components/MetaTags.jsx
import Head from 'next/head'
import { useRouter } from 'next/router'

export const MetaTags = ({
                             title = 'TimeTransit — доставка из Китая',
                             description = 'Надёжная доставка грузов из Китая по всей России.',
                             image = '/og-image.jpg',
                         }) => {
    const router = useRouter()

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://timetransit.ru'
    const canonicalUrl = `${baseUrl}${router.asPath.split('?')[0]}`

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />

            {/* Open Graph */}

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />

            {/* Canonical */}
            {process.env.NODE_ENV !== 'development' && (
                <link rel="canonical" href={canonicalUrl} />
            )}
        </Head>
    )
}

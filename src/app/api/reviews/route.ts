import { NextResponse } from 'next/server';

export interface PlaceReviewItem {
  id: string;
  authorName: string;
  authorUri?: string;
  rating: number;
  publishTime?: string;
  relativePublishTimeDescription: string;
  text: string;
}

interface GoogleReview {
  name?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
  };
  rating?: number;
  publishTime?: string;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
}

interface GooglePlaceResponse {
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReview[];
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: 'As avaliações do Google Maps não estão configuradas.' },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=pt-BR`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
        },
        next: {
          revalidate: 21 * 24 * 60 * 60,
        },
      }
    );

    if (!response.ok) {
      console.error(`Google Places API returned HTTP ${response.status}.`);
      return NextResponse.json(
        { error: 'Não foi possível carregar as avaliações do Google Maps.' },
        { status: 502 }
      );
    }

    const data: GooglePlaceResponse = await response.json();

    const reviews: PlaceReviewItem[] = (data.reviews ?? [])
      .map((review, index) => ({
        id: review.name ?? String(index),
        authorName: review.authorAttribution?.displayName ?? 'Usuário do Google',
        authorUri: review.authorAttribution?.uri,
        rating: review.rating ?? 0,
        publishTime: review.publishTime,
        relativePublishTimeDescription:
          review.relativePublishTimeDescription ?? '',
        text: review.text?.text ?? review.originalText?.text ?? '',
      }))
      .filter((review) => review.text.trim().length > 0)
      .sort((a, b) => {
        const parsedDateA = a.publishTime ? Date.parse(a.publishTime) : 0;
        const parsedDateB = b.publishTime ? Date.parse(b.publishTime) : 0;
        const publishedAtA = Number.isFinite(parsedDateA) ? parsedDateA : 0;
        const publishedAtB = Number.isFinite(parsedDateB) ? parsedDateB : 0;
        return publishedAtB - publishedAtA;
      });

    return NextResponse.json({
      rating: data.rating ?? 0,
      userRatingCount: data.userRatingCount ?? 0,
      reviews,
    });
  } catch (error) {
    console.error('Failed to fetch Google Maps reviews:', error);
    return NextResponse.json(
      { error: 'Não foi possível carregar as avaliações do Google Maps.' },
      { status: 502 }
    );
  }
}
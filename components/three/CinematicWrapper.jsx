'use client';
import dynamic from 'next/dynamic';

const CinematicBackground = dynamic(() => import('./CinematicBackground'), { ssr: false });

export default function CinematicWrapper(props) {
  return <CinematicBackground {...props} />;
}

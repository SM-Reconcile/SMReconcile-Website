'use client';
import { buildUrl } from 'cloudinary-build-url';
import clsx from 'clsx';
import Image from 'next/image';
import * as React from 'react';
import dynamic from 'next/dynamic';

import 'react-image-lightbox/style.css';

const Lightbox = dynamic(() => import('react-image-lightbox'), { ssr: false });

type CloudinaryImgType = {
  publicId: string;
  height: string | number;
  width: string | number;
  alt: string;
  title?: string;
  className?: string;
  preview?: boolean;
  noStyle?: boolean;
  aspect?: {
    width: number;
    height: number;
  };
  mdx?: boolean;
  fill?: boolean;
} & React.ComponentPropsWithoutRef<'figure'>;

export default function CloudinaryImg({
  publicId,
  height,
  width,
  alt,
  title,
  className,
  preview = true,
  noStyle = false,
  mdx = false,
  fill = false,
  style,
  aspect,
  ...rest
}: CloudinaryImgType) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const urlBlurred = buildUrl(publicId, {
    cloud: {
      cloudName: 'dnbgy13w7',
    },
    transformations: {
      effect: {
        name: 'blur:1000',
      },
      quality: 1,
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  });
  const url = buildUrl(publicId, {
    cloud: {
      cloudName: 'dnbgy13w7',
    },
    transformations: {
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  });
  const aspectRatio = aspect ? aspect.height / aspect.width : undefined;
  const RESIZE_MAX_WIDTH = 1000;
  const resizedToMaxWidth = mdx && +width >= RESIZE_MAX_WIDTH;

  const finalWidth = resizedToMaxWidth
    ? Math.min(+width, RESIZE_MAX_WIDTH)
    : width;
  const finalHeight = resizedToMaxWidth
    ? (RESIZE_MAX_WIDTH * +height) / +width
    : height;
  return (
    <figure
      className={clsx(className, {
        'overflow-hidden rounded shadow dark:shadow-none': !noStyle,
        'mx-auto w-full': mdx && +width <= 800,
      })}
      style={{
        ...(mdx && +width <= 800 ? { maxWidth: width } : {}),
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          position: 'relative',
          height: fill ? '100%' : 0,
          paddingTop: fill ? 0 : (aspectRatio
            ? `${aspectRatio * 100}%`
            : `${(+height / +width) * 100}%`),
          cursor: preview ? 'zoom-in' : 'default',
        }}
        className='img-blur'
        onClick={preview ? () => setIsOpen(true) : undefined}
      >
        <style jsx>{`
          .img-blur::before {
            content: '';
            position: absolute;
            inset: 0;
            filter: blur(20px);
            z-index: 0;
            background-image: url(${urlBlurred});
            background-position: center center;
            background-size: 100%;
          }
        `}</style>
        <div className='absolute left-0 top-0 w-full h-full'>
          <Image
            width={finalWidth as number}
            height={finalHeight as number}
            src={url}
            alt={alt}
            className='w-full h-full object-cover'
          />
        </div>
      </div>
      {isOpen && (
        <Lightbox mainSrc={url} onCloseRequest={() => setIsOpen(false)} />
      )}
    </figure>
  );
}

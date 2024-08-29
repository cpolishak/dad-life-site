import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
    <Box sx={{ 
      maxWidth: "900px", 
      maxHeight: "600px", 
      overflowY: 'scroll' 
      }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1664051271055-8f69c10ce70a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Chopping',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1664367173424-c01a3a4876a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1473531761844-5a14668fc8f8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Sitting by the lake',
    },

    {
      img: 'https://images.unsplash.com/photo-1616430284384-62ba9ce6c11d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Outdoor girl dad',
    },
    {
      img: 'https://images.unsplash.com/photo-1549068294-04a001ee0638?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Chairs',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1679850626945-f2dba8580606?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Bunny Adventures',
    },
    {
      img: 'https://images.unsplash.com/photo-1472739841375-d0ea9f0cb6a6?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Sparkler',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1664051546462-c3d321be71c9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Holding daughter in air',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1664367173362-593de24d940e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Sunset cuteness',
    },
  ];
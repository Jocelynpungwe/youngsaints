import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
import hoodie1 from '../assets/young/product/product-1-b.JPG'
import hoodie2 from '../assets/young/product/product-2-b.JPG'
import hoodieAll from '../assets/young/product/product-hoodies-all.JPG'
import personHoodie from '../assets/young/hoodie-1.JPG'
import caps1 from '../assets/young/product/products-cap-a.JPG'
import newImage2 from '../assets/young/product/product-bennie.JPG'

import benny1 from '../assets/young/benny-1.JPG'
import benny2 from '../assets/young/benny-2.JPG'
import benny3 from '../assets/young/benny-3.JPG'
import benny4 from '../assets/young/benny-4.JPG'
import benny5 from '../assets/young/benny-5.JPG'
import benny6 from '../assets/young/benny-6.JPG'

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'contact',
    url: '/contact',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Our mission is to empower individuals to express their devotion boldly through carefully crafted, religious-inspired apparel, fostering a community that embraces both faith and flair.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'YVNG Saint envisions seamlessly blending spirituality with contemporary fashion, creating a vibrant space where faith becomes an integral and celebrated aspect of personal style. ',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Yvng Saints, founded in 2020 by Rofra and Grace, is a vibrant fusion of urban fashion. Born from faith, the brand redefines style with contemporary designs, celebrating individuality while embracing the pulse of city living.',
  },
]

export const data = [
  {
    id: 1,
    images: [personHoodie, hoodie2, hoodie1, hoodieAll],
    name: 'hoodies',
    price: 4500,
    category: 'hoodies',
    description:
      'YVNG Saint Company presents a divine fusion of faith and fashion with our exclusive line of religious-themed hoodies. Embrace a unique blend of spirituality and streetwear as our meticulously designed hoodies seamlessly integrate sacred symbols and powerful motifs, creating a tangible expression of your unwavering devotion.',
    stock: 0,
    colors: ['black'],
    stars: 4,
    reviews: 5,
  },
  {
    id: 2,
    images: [caps1],
    name: 'caps',
    price: 2500,
    category: 'caps',
    description:
      'YVNG Saint Company brings forth a collection of religious-inspired caps that transcend fashion, merging timeless spirituality with contemporary style. Each cap is a testament to faith, adorned with sacred symbols and meaningful designs, allowing you to carry your beliefs with you wherever you go.',
    stock: 0,
    colors: ['black'],
    stars: 4,
    reviews: 5,
  },
  {
    id: 3,
    images: [benny6, benny1, benny2, benny3, benny4, benny5],
    name: 'bennies',
    price: 3500,
    category: 'bennies',
    description:
      'YVNG Saint Company introduces a divine touch to your winter essentials with our collection of religious-based beanies. Experience the warmth of faith as our beanies seamlessly blend religious symbols and meaningful motifs, creating a cozy yet powerful accessory for the devout.',
    stock: 10,
    colors: ['black', 'gray', 'orange', 'green'],
    stars: 4,
    reviews: 5,
  },
]

export const products_url = '/.netlify/functions/products'

export const single_product_url = `/.netlify/functions/single-product?id=`

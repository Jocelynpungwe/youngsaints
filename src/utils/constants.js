import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
import hoodie1 from '../assets/young/product/product-1-b.JPG'
import hoodie2 from '../assets/young/product/product-2-b.JPG'
import hoodieAll from '../assets/young/product/product-hoodies-all.JPG'
import caps1 from '../assets/young/product/products-cap-a.JPG'
import newImage2 from '../assets/young/product/product-bennie.JPG'
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
    text: '"At Young Saint, our mission is to inspire individuals to embrace their unique style within the vibrant tapestry of urban culture. Through meticulously crafted streetwear, we aim to empower self-expression, blending quality, comfort, and contemporary design. We strive to be the catalyst for confidence, encouraging everyone to embrace their individuality while making a bold statement in the world of fashion.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Our vision at Young Saint is to become the epitome of urban fashion, recognized globally for our fusion of street-inspired clothing with modern elegance. We aspire to be the go-to brand for individuals seeking not just trendy apparel but a lifestyle that celebrates individuality and authenticity. Through our innovative designs and commitment to quality, we envision inspiring a community of confident trendsetters who effortlessly embody the spirit of urban culture.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Young Saint, founded in 2020 by Rofra and Grace, is a vibrant fusion of urban fashion. Born from a passion for streetwear, the brand redefines style with contemporary designs, celebrating individuality while embracing the pulse of city living.',
  },
]

export const data = [
  {
    id: 1,
    images: [hoodie2, hoodie1, hoodieAll],
    name: 'hoodies',
    price: 5000,
    category: 'hoodies',
    description:
      'Introducing our Urban Edge Hoodie, the epitome of modern streetwear fashion. Crafted with premium, ultra-soft fabric, this hoodie embodies comfort without compromising style. Its relaxed fit, adorned with our iconic Young Saint emblem, seamlessly merges urban attitude with everyday ease. Complete with an adjustable hood and a practical kangaroo pocket, this hoodie effortlessly elevates your urban look, making it a must-have staple for those who seek both comfort and trendsetting style.',
    stock: 0,
    colors: ['black', 'gray', 'red', 'gold'],
    stars: 4,
    reviews: 5,
  },
  {
    id: 2,
    images: [caps1, hoodie2, hoodie1, hoodieAll],
    name: 'caps',
    price: 3500,
    category: 'caps',
    description:
      'Introducing our Urban Edge Hoodie, the epitome of modern streetwear fashion. Crafted with premium, ultra-soft fabric, this hoodie embodies comfort without compromising style. Its relaxed fit, adorned with our iconic Young Saint emblem, seamlessly merges urban attitude with everyday ease. Complete with an adjustable hood and a practical kangaroo pocket, this hoodie effortlessly elevates your urban look, making it a must-have staple for those who seek both comfort and trendsetting style.',
    stock: 10,
    colors: ['black', 'gray', 'red', 'gold'],
    stars: 4,
    reviews: 5,
  },
  {
    id: 3,
    images: [newImage2, caps1, hoodie2, hoodie1, hoodieAll],
    name: 'bennies',
    price: 4000,
    category: 'bennies',
    description:
      'Introducing our Urban Edge Hoodie, the epitome of modern streetwear fashion. Crafted with premium, ultra-soft fabric, this hoodie embodies comfort without compromising style. Its relaxed fit, adorned with our iconic Young Saint emblem, seamlessly merges urban attitude with everyday ease. Complete with an adjustable hood and a practical kangaroo pocket, this hoodie effortlessly elevates your urban look, making it a must-have staple for those who seek both comfort and trendsetting style.',
    stock: 10,
    colors: ['black', 'gray', 'red', 'gold'],
    stars: 4,
    reviews: 5,
  },
]

export const products_url = '/.netlify/functions/products'

export const single_product_url = `/.netlify/functions/single-product?id=`

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: 'dog' | 'cat' | 'exotic';
  subCategory: string;
  image: string;
  rating: number;
  reviews: number;
  tag?: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  { id: 'dog', name: 'Perros', icon: 'dog', color: 'bg-orange-100', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=400' },
  { id: 'cat', name: 'Gatos', icon: 'cat', color: 'bg-blue-100', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400' },
  { id: 'exotic', name: 'Exóticos', icon: 'bird', color: 'bg-green-100', image: 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?auto=format&fit=crop&q=80&w=400' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Taste of the Wild High Prairie - 12kg',
    price: 345000,
    oldPrice: 380000,
    category: 'dog',
    subCategory: 'Alimento Seco',
    image: 'https://images.unsplash.com/photo-1589924691106-073b69a59b86?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    reviews: 124,
    tag: 'Best Seller',
    description: 'Proteína de bisonte y venado asado para una nutrición óptima.'
  },
  {
    id: '2',
    name: 'Rascador Multitira para Gatos',
    price: 125000,
    category: 'cat',
    subCategory: 'Juguetes',
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
    reviews: 89,
    description: 'Estructura reforzada con sisal natural y felpa premium.'
  },
  {
    id: '3',
    name: 'Arena Sanitaria Advanced - 18kg',
    price: 85000,
    oldPrice: 95000,
    category: 'cat',
    subCategory: 'Higiene',
    image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&q=80&w=400',
    rating: 4.7,
    reviews: 215,
    tag: 'Oferta',
    description: 'Control de olores superior y fácil limpieza.'
  },
  {
    id: '4',
    name: 'Cama Ortopédica Memory - L',
    price: 189000,
    category: 'dog',
    subCategory: 'Camas',
    image: 'https://images.unsplash.com/photo-1591946614421-1fbf521c64ec?auto=format&fit=crop&q=80&w=400',
    rating: 5.0,
    reviews: 45,
    description: 'Diseñada para perros senior o con problemas articulares.'
  }
];

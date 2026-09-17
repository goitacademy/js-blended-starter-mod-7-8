const products = [
  {
    id: 1,
    name: 'Ноутбук',
    price: 32000,
    category: 'Комп’ютери',
    image: 'https://placehold.co/600x400?text=Laptop',
    sales: { week: 18 },
  },
  {
    id: 2,
    name: 'Навушники',
    price: 2500,
    category: 'Аудіо',
    image: 'https://placehold.co/600x400?text=Headphones',
    sales: { week: 26 },
  },
  {
    id: 3,
    name: 'Миша',
    price: 1200,
    category: 'Аксесуари',
    image: 'https://placehold.co/600x400?text=Mouse',
    sales: { week: 20 },
  },
  {
    id: 4,
    name: 'Клавіатура',
    price: 2800,
    category: 'Аксесуари',
    image: 'https://placehold.co/600x400?text=Keyboard',
    sales: { week: 12 },
  },
];

const sales = {
  week: [
    { label: 'Пн', value: 12 },
    { label: 'Вт', value: 19 },
    { label: 'Ср', value: 8 },
    { label: 'Чт', value: 15 },
    { label: 'Пт', value: 22 },
  ],
  month: [
    { label: '1 тиждень', value: 74 },
    { label: '2 тиждень', value: 91 },
    { label: '3 тиждень', value: 83 },
    { label: '4 тиждень', value: 108 },
  ],
};

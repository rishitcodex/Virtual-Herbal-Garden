const products = [
  // Herbs
  { 
    id: 1, 
    category: 'herbs', 
    name: 'Tulsi (Holy Basil)', 
    description: 'Sacred herb known for its medicinal properties and stress-relieving benefits', 
    price: '₹199/kg', 
    image: 'https://example.com/images/herbs/tulsi.jpg' 
  },
  { 
    id: 2, 
    category: 'herbs', 
    name: 'Ashwagandha', 
    description: 'Adaptogenic herb for stress relief and energy boosting', 
    price: '₹299/100g', 
    image: 'https://example.com/images/herbs/ashwagandha.jpg' 
  },
  { 
    id: 3, 
    category: 'herbs', 
    name: 'Brahmi', 
    description: 'Improves brain health and enhances memory', 
    price: '₹249/100g', 
    image: 'https://example.com/images/herbs/brahmi.jpg' 
  },
  { 
    id: 4, 
    category: 'herbs', 
    name: 'Giloy', 
    description: 'Powerful immunity boosting herb with anti-inflammatory properties', 
    price: '₹179/100g', 
    image: 'https://example.com/images/herbs/giloy.jpg' 
  },
  { 
    id: 5, 
    category: 'herbs', 
    name: 'Moringa Powder', 
    description: 'Nutrient-rich superfood packed with vitamins and minerals', 
    price: '₹199/200g', 
    image: 'https://example.com/images/herbs/moringa.jpg' 
  },
  { 
    id: 6, 
    category: 'herbs', 
    name: 'Curcumin', 
    description: 'Potent anti-inflammatory compound from turmeric', 
    price: '₹349/100g', 
    image: 'https://example.com/images/herbs/curcumin.jpg' 
  },
  { 
    id: 7, 
    category: 'herbs', 
    name: 'Mint Leaves', 
    description: 'Digestive aid and natural breath freshener', 
    price: '₹149/100g', 
    image: 'https://example.com/images/herbs/mint.jpg' 
  },
  { 
    id: 8, 
    category: 'herbs', 
    name: 'Lemongrass', 
    description: 'Aromatic herb perfect for teas and Asian cuisine', 
    price: '₹129/100g', 
    image: 'https://example.com/images/herbs/lemongrass.jpg' 
  },
  
  // Herbal Medicines
  { 
    id: 9, 
    category: 'medicines', 
    name: 'Chyawanprash', 
    description: 'Traditional herbal jam for immunity and vitality', 
    price: '₹399/500g', 
    image: 'https://example.com/images/medicines/chyawanprash.jpg' 
  },
  { 
    id: 10, 
    category: 'medicines', 
    name: 'Triphala Powder', 
    description: 'Ayurvedic blend for digestive health and detoxification', 
    price: '₹249/200g', 
    image: 'https://example.com/images/medicines/triphala.jpg' 
  },
  { 
    id: 11, 
    category: 'medicines', 
    name: 'Amla Powder', 
    description: 'Vitamin C rich supplement for immunity and hair health', 
    price: '₹199/200g', 
    image: 'https://example.com/images/medicines/amla.jpg' 
  },
  { 
    id: 12, 
    category: 'medicines', 
    name: 'Shilajit', 
    description: 'Natural mineral supplement for energy and vitality', 
    price: '₹499/100g', 
    image: 'https://example.com/images/medicines/shilajit.jpg' 
  },
  { 
    id: 13, 
    category: 'medicines', 
    name: 'Safed Musli', 
    description: 'Natural energy and stamina booster', 
    price: '₹299/100g', 
    image: 'https://example.com/images/medicines/safed-musli.jpg' 
  },
  
  // Healthcare Products
  { 
    id: 14, 
    category: 'healthcare', 
    name: 'Neem Face Wash', 
    description: 'Natural cleanser for acne-free and clear skin', 
    price: '₹199/200ml', 
    image: 'https://example.com/images/healthcare/neem-face-wash.jpg' 
  },
  { 
    id: 15, 
    category: 'healthcare', 
    name: 'Aloe Vera Gel', 
    description: 'Pure aloe gel for sunburn relief and skin hydration', 
    price: '₹299/100ml', 
    image: 'https://example.com/images/healthcare/aloe-gel.jpg' 
  },
  { 
    id: 16, 
    category: 'healthcare', 
    name: 'Tea Tree Oil', 
    description: 'Natural antiseptic oil for skin blemishes and infections', 
    price: '₹249/30ml', 
    image: 'https://example.com/images/healthcare/tea-tree-oil.jpg' 
  },
  { 
    id: 17, 
    category: 'healthcare', 
    name: 'Lavender Oil', 
    description: 'Calming essential oil for stress relief and better sleep', 
    price: '₹279/30ml', 
    image: 'https://example.com/images/healthcare/lavender-oil.jpg' 
  },
  { 
    id: 18, 
    category: 'healthcare', 
    name: 'Rose Water', 
    description: 'Natural toner for glowing and refreshed skin', 
    price: '₹199/200ml', 
    image: 'https://example.com/images/healthcare/rose-water.jpg' 
  },
  { 
    id: 19, 
    category: 'healthcare', 
    name: 'Hemp Oil', 
    description: 'Omega-rich oil for skin and hair nourishment', 
    price: '₹449/30ml', 
    image: 'https://example.com/images/healthcare/hemp-oil.jpg' 
  },
  { 
    id: 20, 
    category: 'healthcare', 
    name: 'Argan Oil', 
    description: 'Moroccan beauty oil for hair shine and skin hydration', 
    price: '₹499/30ml', 
    image: 'https://example.com/images/healthcare/argan-oil.jpg' 
  },
  { 
    id: 21, 
    category: 'healthcare', 
    name: 'Jojoba Oil', 
    description: 'Natural moisturizer that mimics skin oils', 
    price: '₹299/30ml', 
    image: 'https://example.com/images/healthcare/jojoba-oil.jpg' 
  },
  { 
    id: 22, 
    category: 'healthcare', 
    name: 'Castor Oil', 
    description: 'Cold-pressed oil for hair growth and thickness', 
    price: '₹199/100ml', 
    image: 'https://example.com/images/healthcare/castor-oil.jpg' 
  }
];

export default products;
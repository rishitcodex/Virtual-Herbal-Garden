// ...existing imports...
const mongoose = require('mongoose');
const Product = require('./Product_model_file.cjs');

// Use your DB connection
mongoose.connect('mongodb://127.0.0.1:27017/virtual-herbal-garden', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productsData = [
    { 
        id: 1, 
        category: 'herbs', 
        name: 'Tulsi (Holy Basil)', 
        description: 'Sacred herb known for its medicinal properties and stress-relieving benefits', 
        price: '₹199/kg', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q9qw5V7kDOd5LPreU6MzRgHaFj%26pid%3DApi&f=1&ipt=f9c8eccb5b596bfb58dc68c36e9e1551dd436fb3bb9d387c0a7187a6c7b2a58d&ipo=images' 
      },
      { 
        id: 2, 
        category: 'herbs', 
        name: 'Ashwagandha', 
        description: 'Adaptogenic herb for stress relief and energy boosting', 
        price: '₹299/100g', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.naturesway.com.au%2Fmedia%2Fcontentmanager%2Fcontent%2Fabout-ashwagandha-for-sleep-1600x1000_3.jpg&f=1&nofb=1&ipt=204f429dd89e5fa22a578870d384954e48bf24db1c85f08679ad12476777e223' 
      },
      { 
        id: 3, 
        category: 'herbs', 
        name: 'Brahmi', 
        description: 'Improves brain health and enhances memory', 
        price: '₹249/100g', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0734%2F4365%2Farticles%2FAdobeStock_129806720.jpeg%3Fv%3D1599100067&f=1&nofb=1&ipt=026f658e167b45074d679e30da9b8d442b37a2dfbe9573a8f5dc4370e3da7f29' 
      },
      { 
        id: 4, 
        category: 'herbs', 
        name: 'Giloy', 
        description: 'Powerful immunity boosting herb with anti-inflammatory properties', 
        price: '₹179/100g', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F010%2F830%2F432%2Flarge_2x%2Ftinospora-cordifolia-local-name-guduchi-and-giloy-is-an-herbaceous-vine-of-the-family-menispermaceae-indigenous-to-the-tropical-areas-of-india-use-as-ayurveda-medicine-photo.jpg&f=1&nofb=1&ipt=ebc00f8ae4779e5fdd96475af28c934f7d12dc52c4240caf338fe91843618f01' 
      },
      { 
        id: 5, 
        category: 'herbs', 
        name: 'Moringa Powder', 
        description: 'Nutrient-rich superfood packed with vitamins and minerals', 
        price: '₹199/200g', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.immediate.co.uk%2Fproduction%2Fvolatile%2Fsites%2F30%2F2021%2F10%2FHero-image-moringa-259c523.jpg&f=1&nofb=1&ipt=2de35601c71556c6b5fd8c2e08ddea150e034996e4ab12d6f3ccf1b1a64f04d5' 
      },
      { 
        id: 6, 
        category: 'herbs', 
        name: 'Curcumin', 
        description: 'Potent anti-inflammatory compound from turmeric', 
        price: '₹349/100g', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.arthritiswa.org.au%2Fwp-content%2Fuploads%2F2020%2F02%2FCurcumin-scaled.jpg&f=1&nofb=1&ipt=bbc8d25ebeaba0f31b1b8100f5fc4bee7545fa38b712e0ce101b30777fb37f0a' 
      },
      { 
        id: 7, 
        category: 'herbs', 
        name: 'Mint Leaves', 
        description: 'Digestive aid and natural breath freshener', 
        price: '₹149/100g', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.healthifyme.com%2Fblog%2Fwp-content%2Fuploads%2F2020%2F09%2Fmint-leaves-1.jpg&f=1&nofb=1&ipt=9293fd2d26b016b26ebae65f80c90a9be46c86c8fc81addb28682b03035450a9' 
      },
      { 
        id: 8, 
        category: 'herbs', 
        name: 'Lemongrass', 
        description: 'Aromatic herb perfect for teas and Asian cuisine', 
        price: '₹129/100g', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhot-thai-kitchen.com%2Fwp-content%2Fuploads%2F2017%2F09%2Flemongrass.jpg&f=1&nofb=1&ipt=c27996c3b0bdbb75ed14fb29c54d737c774e235b37088bec36f3898db2035737' 
      },
      
      // Herbal Medicines
      { 
        id: 9, 
        category: 'medicines', 
        name: 'Chyawanprash', 
        description: 'Traditional herbal jam for immunity and vitality', 
        price: '₹399/500g', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.netmeds.com%2Fimages%2Fcms%2Fwysiwyg%2Fblog%2F2019%2F03%2FChyawanprash_898.jpg&f=1&nofb=1&ipt=354e8ea9024d36ed5bcfde7f69f8929c3cbd87e6208dfab334b88c38e9786c35' 
      },
      { 
        id: 10, 
        category: 'medicines', 
        name: 'Triphala Powder', 
        description: 'Ayurvedic blend for digestive health and detoxification', 
        price: '₹249/200g', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2022%2F2%2FUK%2FFC%2FXL%2F5875857%2Ftriphala-powder-1000x1000.jpg&f=1&nofb=1&ipt=4c93dd0afd3cec8017b654c3808416df82f975e87bcdaa9715cdff78cdf5b4b1' 
      },
      { 
        id: 11, 
        category: 'medicines', 
        name: 'Amla Powder', 
        description: 'Vitamin C rich supplement for immunity and hair health', 
        price: '₹199/200g', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgreenstories.co.in%2Fwp-content%2Fuploads%2F2022%2F03%2Famla-powder-with-raw-avla-its-an-ayurvedic-royalty-free-image-1645726821.jpg&f=1&nofb=1&ipt=427c6ee7629b0023113e3145bf263e4187eb2d36d1c8ca75f3713e2c84f56d6b' 
      },
      { 
        id: 12, 
        category: 'medicines', 
        name: 'Shilajit', 
        description: 'Natural mineral supplement for energy and vitality', 
        price: '₹499/100g', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ultranutrio.com%2Fwp-content%2Fuploads%2F2023%2F08%2FUltra_Nutrio_Supplements_Blog_1_Shilajit_2-uai-1032x1032.jpg&f=1&nofb=1&ipt=afe27a43c4bf257d5c19a0f46d79a3fb171bd06f61d460efe4b70b3714239423' 
      },
      { 
        id: 13, 
        category: 'medicines', 
        name: 'Safed Musli', 
        description: 'Natural energy and stamina booster', 
        price: '₹299/100g', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.exportersindia.com%2Fproduct_images%2Fbc-full%2F2020%2F5%2F7269153%2Fsafed-musli-1590046935-5444808.jpeg&f=1&nofb=1&ipt=b62a60ed4cc3981ef4061f384cae201c86a41b06e2996d921a46a3ed58a26bcc' 
      },
      
      // Healthcare Products
      { 
        id: 14, 
        category: 'healthcare', 
        name: 'Neem Face Wash', 
        description: 'Natural cleanser for acne-free and clear skin', 
        price: '₹199/200ml', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F03%2Fde%2F44%2F03de440abe13aba7d4dcdc42f6890aa5.jpg&f=1&nofb=1&ipt=dffd20cb0548405d49c8c4bfddf20cc5f3d8b954a874e3175bf9d5f45a652681' 
      },
      { 
        id: 15, 
        category: 'healthcare', 
        name: 'Aloe Vera Gel', 
        description: 'Pure aloe gel for sunburn relief and skin hydration', 
        price: '₹299/100ml', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorables.com%2Fwp-content%2Fuploads%2F2023%2F10%2Fhow-to-store-aloe-vera-plant-gel-1697688328.jpg&f=1&nofb=1&ipt=9e875dc9e9eaad66110988c49f9d8ff5fddd65b90285097430e4bb8b60aea3f5' 
      },
      { 
        id: 16, 
        category: 'healthcare', 
        name: 'Tea Tree Oil', 
        description: 'Natural antiseptic oil for skin blemishes and infections', 
        price: '₹249/30ml', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fparade.com%2F.image%2Ft_share%2FMTkwNTgxMzA1OTI2MTY2Mzk2%2Ftea-tree-oil-uses-jpg.jpg&f=1&nofb=1&ipt=0cd975c0927dd36daaba702250caed0c6bf256eec5f1e0e9a8f8e4348bd6ede0' 
      },
      { 
        id: 17, 
        category: 'healthcare', 
        name: 'Lavender Oil', 
        description: 'Calming essential oil for stress relief and better sleep', 
        price: '₹279/30ml', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tipshealthline.com%2Fwp-content%2Fuploads%2F2018%2F01%2FBenefit-of-Lavender-essential-oil.jpg&f=1&nofb=1&ipt=9fa741407be6793664febc8c487af706816e29b96041762dd4b396ffaa9c12d1' 
      },
      { 
        id: 18, 
        category: 'healthcare', 
        name: 'Rose Water', 
        description: 'Natural toner for glowing and refreshed skin', 
        price: '₹199/200ml', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiskincarereviews.com%2Fwp-content%2Fuploads%2F2018%2F05%2Frose-water.jpg&f=1&nofb=1&ipt=e7483c3449aaf068befd395590343dce1f2b7aa9c075725b1093be29fd96fd18' 
      },
      { 
        id: 19, 
        category: 'healthcare', 
        name: 'Hemp Oil', 
        description: 'Omega-rich oil for skin and hair nourishment', 
        price: '₹449/30ml', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.xYaoceGRUZ_pJtZ8PhMRXQHaE8%3Fpid%3DApi&f=1&ipt=fa8fc2960e8f7548f2f43c7ecf458e41e098a60dcdcc9224976d0e6e673cb61e&ipo=images' 
      },
      { 
        id: 20, 
        category: 'healthcare', 
        name: 'Argan Oil', 
        description: 'Moroccan beauty oil for hair shine and skin hydration', 
        price: '₹499/30ml', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.1RZXQ5iUq2sS6ngVKpD27gHaEK%3Fpid%3DApi&f=1&ipt=8772e9274093819416ad2fcad6d582266a82750cf0e6270f4afc6f7ee3a70810&ipo=images' 
      },
      { 
        id: 21, 
        category: 'healthcare', 
        name: 'Jojoba Oil', 
        description: 'Natural moisturizer that mimics skin oils', 
        price: '₹299/30ml', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.x_B55vczK7GN5HZcxRdzFAHaER%3Fpid%3DApi&f=1&ipt=9eb7159d232c7df6f897d46428f10e3fd7aee6d045418787ebcd5905e4d51e61&ipo=images' 
      },
      { 
        id: 22, 
        category: 'healthcare', 
        name: 'Castor Oil', 
        description: 'Cold-pressed oil for hair growth and thickness', 
        price: '₹199/100ml', 
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.0c9VHN8L0KhpUwhpLEBwGwHaE8%26pid%3DApi&f=1&ipt=f8dd8496e2656e794570be3657d5b750d56caef9c16fde181ec9bf29f3b6e94e&ipo=images' 
      }
];

async function seedDB() {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log('Database seeded!');
    mongoose.connection.close();
  } catch (error) {
    console.error(error);
  }
}
seedDB();
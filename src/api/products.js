const MOCK_PRODUCTS = [
  { id: 1, name: 'Polera básica', price: 9990, image: 'https://www.dimarsa.cl/media/catalog/product/m/a/marcasgreenlifelisasinbordado-negro1jpeg_0_2.jpg' },
  { id: 2, name: 'Pantalón jeans', price: 19990, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsyKUwsAyMgM4Y8M7dYxcsMy-CvWgtTF3Y9w&s' },
  { id: 3, name: 'Zapatillas', price: 29990, image: 'https://home.ripley.cl/store/Attachment/WOP/D317/2000398454216/2000398454216-1.jpg' },
  { id: 4, name: 'Polerón', price: 24990, image: 'https://www.hakahonu.cl/cdn/shop/files/08cd2ace-5338-4151-96bf-f5dbfe49bf68-c6541_48836b93-fd5b-49eb-926c-074107c23669.jpg?v=1733199961&width=416' },
  { id: 5, name: 'Gorro', price: 5990, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrq-aLOmWiQfSn3NvZH5Ua1LOj8govACuhXw&s' },
  { id: 6, name: 'Bufanda', price: 7990, image: 'https://www.brooksbrothers.cl/media/catalog/product/b/1/b100198179_bb04_1_1.jpg' },
  { id: 7, name: 'Chaqueta', price: 34990, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWQUF3q8hdcdVFbdO5dLegxjcmQupxBBO3g&s' },
  { id: 8, name: 'Calcetas', price: 2990, image: 'https://api-prd.ynk.cl/medias/BELSPORT-NISX7664964-VIEW1.jpg-515Wx515H?context=bWFzdGVyfGltYWdlc3wxMzY0NXxpbWFnZS9qcGVnfGFEWm1MMmhqT0M4NU1ERTFNamcxTXpVd05ETXdMMEpGVEZOUVQxSlVYMDVKVTFnM05qWTBPVFkwWDFaSlJWY3hMbXB3WjE4MU1UVlhlRFV4TlVnfDlmZDE1NDIzZWY3NzgzNDBiYjA3NGE2MjY4ZDYzNTU0YzY1MDc2Mjk2MmYyYWQyOGVmYzUyMTJkYTFhMGI1NWY' },
  { id: 9, name: 'Guantes', price: 12990, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbc2lcG1TJBzttyY_72zu-_jRAcSI6qSHQg&s' },
  { id: 10, name: 'Sombrero', price: 15990, image: 'https://api-prd.ynk.cl/medias/515Wx515H-BOLD-NPHM9024042-VIEW1.jpg?context=bWFzdGVyfGltYWdlc3wxNjY3MnxpbWFnZS9qcGVnfGFEWXpMMmd6TXk4NU9EVTRNVGczTnpnNE16RTRMelV4TlZkNE5URTFTRjlDVDB4RVgwNVFTRTA1TURJME1EUXlYMVpKUlZjeExtcHdad3xmZTFlZWNjMzNjZmVmZjBkMTA2NDFiZjEwYjM2ZTE0YzkwNjJlNDlhMGFmMDExZGEwZGE2MzZiNGY5YWUxN2Q0' },
  { id: 11, name: 'Mochila', price: 44990, image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/83e8a50f81c044e69c9d3274af19fb2d_9366/Mochila_Classic_3_Bar_Logo_Negro_JI6953_01_00_standard.jpg' },
  { id: 12, name: 'Reloj', price: 79990, image: 'https://larelojeria.cl/cdn/shop/products/p-IQ-05-1-1.jpg?v=1661373227&width=800' }
]

export function fetchProducts() {
  return new Promise((resolve) => setTimeout(() => resolve(MOCK_PRODUCTS), 500))
}
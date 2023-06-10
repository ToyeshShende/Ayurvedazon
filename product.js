function showProductDetails(productId) {
    const productDetails = getProductDetails(productId);
  
    // Open a new tab or window with the product description
    const newTab = window.open("", "_blank");
    newTab.document.write(`
    
    <html lang="en">
    <head>
    <style>
  /* Product Details */
  .product-details {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #f7f7f7;
  }

  .product-image {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .product-image img {
    max-width: 100%;
    height: auto;
  }

  .product-info {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 20px;
  }

  .product-info h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .product-info p {
    margin-bottom: 15px;
  }

  .product-info h5 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .product-info .buynow,
  .product-info .addtocart {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    background-color: #f39c12;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .product-info .buynow:hover,
  .product-info .addtocart:hover {
    background-color: #e67e22;
  }
</style>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Ayurvedazon</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
     <!-- header -->
     <div class="headerboarder"></div>
     
     <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-navbar">
         <div class="container-fluid">
           <a class="navbar-brand" href="/">Ayurvedazon</a>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarNav">
             <ul class="navbar-nav">
               <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="/">Home</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="/aboutus.html">About us</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="/contact.html">Contact us</a>
               </li>
               
              
             </ul>
             <div class="ms-auto"> 
               <ul class="navbar-nav">
                 <li class="nav-item">
                   <a class="nav-link" href="#">
                     <img width="25" height="25" src="https://img.icons8.com/color/48/gender-neutral-user.png" alt="gender-neutral-user" /> SignIn
                   </a>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </nav>

       <div class="product-details">
            <div class="product-image">
              <img src="${productDetails.image}" alt="Product Image">
            </div>
            <div class="product-info">
              <h2>${productDetails.name}</h2>
              <p>${productDetails.description}</p>
              <h5>${productDetails.price}</h5>
              <p>${productDetails.detail}</p>
              <button class='buynow'>Buy Now</button>
              <button class='addtocart'>ADD to Cart</button>
              </div>
          </div>
  
       
  
  <!-- 
       footer -->
  
       <footer class="footer bg-body-secondary">
         <div class="container">
           <div class="row">
             <div class="col-lg-4">
               <h5>About Ayurvedazon</h5>
               <p>Ayurvedazon is a leading online platform for Ayurvedic medicines and products. We offer a wide range of authentic Ayurvedic products sourced from trusted manufacturers.</p>
             </div>
             <div class="col-lg-4">
               <h5>Contact Information</h5>
               <p>Kondhwa Budruk, Pune</p>
               <p>Email: toyeshshende@gmail.com</p>
               <p>Phone: +1 123-456-7890</p>
             </div>
             <div class="col-lg-4">
               <h5>Quick Links</h5>
               <ul class="list-unstyled">
                 <li><a href="/">Home</a></li>
                 <li><a href="/aboutus.html">About Us</a></li>
                 <li><a href="/contact.html">Contact Us</a></li>
                 <li><a href="#">Terms of Service</a></li>
                 <li><a href="#">Privacy Policy</a></li>
               </ul>
             </div>
           </div>
         </div>
       </footer>
       
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    </body>
  </html>
    `);
    newTab.document.close();
  }
  
  
  function getProductDetails(productId) {
   
    const productDetails = {
      neelibringadi: {
        name: "Neelibringadi Keram (Oil)",
        description: "Promotes Thick, Lustrous Hair",
        price: "RS. 200.00",
        image: "https://www.keralaayurveda.biz/media/user_2mKbLQa0e7/5228/neelibringadi-keram-1.webp",
        detail:"Do you lose a bunch of strands as you run your fingers through your hair? If so, you are not alone. Most people in India and worldwide suffer from a wide range of hair problems, such as premature greying, dandruff, and hair fall Hair fall starts long before you notice too much hair in your shower drain. The preliminary stage of hair fall is called hair-thinning. During this stage, preventing the imminent hair fall is relatively easy compared to losing a patch of hair altogether.Regardless of how far along you are, you can always stop hair from falling in its tracks. Kerala Ayurveda presents Neelibringadi Keram helps strengthen the hair roots, restore shine, and stimulate growth. It's a well-rounded men's hair fall solution, and women can use it too. Whether you are looking for a herbal oil for male pattern baldness or an Ayurvedic oil for alopecia, Neelibringadi Keram is the right pick. This hair growth oil will turn your bad hair days into good ones. Kerala Ayurveda Neelibringadi Keram, based on the original formula from Sahasrayogam, is a potent anti-hair fall oil to promote hair growth. A shiro abhyanga, or head massage with Kerala Ayurveda Neelibringadi keram, is the only hair oil treatment you will ever need for strong, thick, and healthy hair",
      },
     
      histantin: {
        name: "Histantin",
        description: "For Seasonal, Dietary and Respiratory Allergies",
        price: "RS. 300.00",
        image: "https://www.keralaayurveda.biz/media/user_v1oz1Yz27j/4545/Histanin-Web-%286%29-%281%29.jpg",
      },
      swarnamukhi: {
        name: "Swarnamukhi Face Cream",
        description: "Night Cream for a Golden Glow",
        price: "RS. 310.00",
        image: "https://www.keralaayurveda.biz/media/user_v1oz1Yz27j/5025/2.jpg",
      },
      kumkumadi: {
        name: "Kumkumadi Tailam (Oil)",
        description: "For Glowing, Radiant Complexion",
        price: "RS. 400.00",
        image: "https://www.keralaayurveda.biz/media/user_2mKbLQa0e7/5236/kumkumadi-oil-1.webp",
        detail:"Healthy, glowing skin is a marker of a healthy body and radiates our inner beauty. However, we must prioritize skincare and use quality products with ever-increasing pollution. Many cosmetic products on the market promise quick results but contain hazardous ingredients causing adverse responses in the long run. Thus, today's health-conscious consumers want chemical-free, natural cosmetic products. Kumkumadi Oil is one such skincare product. ingredients,Kumkumadi Oil for face and skin is a formulation of traditional ingredients widely used in ayurvedic oil for face. Its natural ingredients help brighten the skin, improve texture, glow, and minimize scars and acne. Kumkumadi tailam is made with particular botanical components that are only accessible in specific locations of India and have been implemented to improve overall skin health since ancient times.",
      },
      balakalpam: {
        name: "Balakalpam Syrup",
        description: "Improve appetite & Regularises Bowels",
        price: "RS. 140.00",
        image: "https://www.keralaayurveda.biz/media/user_v1oz1Yz27j/4911/1.jpg",
      },
    };
  
    return productDetails[productId];
  }
  
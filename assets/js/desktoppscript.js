document.addEventListener("DOMContentLoaded", function () {
    // Sample product data in JSON format
    const products = [
        {
            name: "HP All-in-One PC Intel Pentium J5040",
            price: 30990,
            description: "HP All-in-One PC Intel Pentium J5040 21.5-inch(54.6 cm) FHD Three-Sided Micro-Edge Display(8GB RAM/512GB SSD/Intel UHD Graphics/Win 11 Home/Wired Keyboard and Mouse Combo/MS Office)22-dd2686in, White",
            image: "assets/img/products/p11.jpg"
        },
        {
            name: "ASUS Vivo AiO V222",
            price: 27990,
            description: "ASUS Vivo AiO V222, 4 core Intel Pentium Silver J5040, 21.5 (54.61cm), All-in-One Desktop (8GB/256GB SSD/Win11/1Year McAfee Security/Wired Keyboard & Mouse Included/Black/4.8 kg), V222GAK-BA034W",
            image: "assets/img/products/p12.jpg"
        },
        {
            name: "Lenovo IdeaCentre AIO 3",
            price: 45989,
            description: "Lenovo IdeaCentre AIO 3 12th Gen Intel i3 23.8 FHD WVA 3-Side Edgeless All-in-One Desktop with Alexa Built-in (8GB/512GB SSD/Win11/MS Office 2021/HD 720p Camera/Wireless Keyboard & Mouse) F0GH00MJIN",
            image: "assets/img/products/p13.jpg"
        },
        {
            name: "Inspiron Small Desktop",
            price:83990 ,
            description: "13th Gen Intel® Core™ i7-13700 (24 MB cache, 16 cores, 24 threads, 2.10 GHz to 5.10 GHz Turbo)",
            image: "assets/img/products/p6.avif"
        },
        {
            name: "Inspiron 24 All-in-One",
            price: 89990,
            description: "13th Gen Intel® Core™ i7-1355U (12 MB cache, 10 cores, 12 threads, up to 5.00 GHz Turbo)",
            image: "assets/img/products/p5.avif"
        },
        {
            name: "Dell Vostro 3710",
            price:53000,
            description: "Dell Vostro 3710 Sff-Intel Core i3 12th Gen || 8 GB DDR4 || 1 TB + 256 GB SSD || Windows 11 Home with Office 2021 || E2220H 21.5 Monitor || Without DVD Drive || 4 Years Onsite Warranty (Black)",
            image: "assets/img/products/p14.jpg"
        },
        {
            name: "Dell 13th Gen All-in-One PC Inspiron 5420",
            price:84220 ,
            description: "Dell 13th Gen All-in-One PC Inspiron 5420, Intel Core i5-1335U Processor/ 16GB/ 512GB/ MX550 (2GB GDDR6)/ 23.8 FHD AG/ProWireless Keyboard + Mouse/ 3 Years Onsite Hardware Service/White/ 5.56kg",
            image: "assets/img/products/p15.jpg"
        },
        {
            name: "Dell All-in-One PC Inspiron 5410",
            price:65490 ,
            description: "Dell All-in-One PC Inspiron 5410, Intel Core i5-1235U Processor/ 8GB/ 512GB/ 23.8(60.45cm) FHD/Windows 11 + MSO21/ Pro Wireless Keyboard + Mouse/ 3 Years Onsite Hardware Service/White/ 5.39kg",
            image: "assets/img/products/p16.jpg"
        },
        
        
        // Add more products as needed
    ];

    const productContainer = document.querySelector(".product-container");

    // Function to create product details
    function createProductDetails(product) {
        const productDetails = document.createElement("div");
        productDetails.classList.add("product-details");
        
        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.classList.add("product-image");

        const productName = document.createElement("p");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `Price: ₹${product.price.toFixed(2)}`;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        productDetails.appendChild(productImage);
        productDetails.appendChild(productName);
        productDetails.appendChild(productPrice);
        productDetails.appendChild(productDescription);

        return productDetails;
    }

    // Function to handle clicking on a product
    function handleProductClick(product) {
        // Create a query string from the product data
        const queryParams = `?name=${encodeURIComponent(product.name)}&price=${product.price}&description=${encodeURIComponent(product.description)}&image=${encodeURIComponent(product.image)}`;
        // Redirect to the product details page with query parameters
        window.location.href = `product-details.html${queryParams}`;
    }

    // Loop through the products and generate HTML for each product
    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.classList.add("product-image");

        const productName = document.createElement("p");
        productName.textContent = product.name;

        const viewDetailsButton = document.createElement("button");
        viewDetailsButton.textContent = "View Details";
        
        viewDetailsButton.addEventListener("click", () => {
            handleProductClick(product);
        });

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(viewDetailsButton);

        productContainer.appendChild(productDiv);
    });
});

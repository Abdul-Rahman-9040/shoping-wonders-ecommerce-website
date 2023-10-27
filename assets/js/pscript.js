document.addEventListener("DOMContentLoaded", function () {
    // Sample product data in JSON format
    const products = [
        {
            name: "Inspiron 16 Laptop",
            price: 78990,
            description: "12th Gen Intel® Core™ i5-1240P (12 MB cache, 12 cores, 16 threads, up to 4.40 GHz Turbo) \n NVIDIA® GeForce® MX570/570A, 2 GB GDDR6 \n ",
            image: "assets/img/products/p1.avif"
        },
        {
            name: "Inspiron 15 Laptop",
            price: 44890,
            description: "13th Gen Intel® Core™ i3-1305U (10 MB cache, 5 cores, 6 threads, up to 4.50 GHz Turbo) \n 512 GB, M.2, PCIe NVMe, SSD",
            image: "assets/img/products/p2.avif"
        },
        {
            name: "XPS 17 Laptop",
            price: 311989.98,
            description: "13th Gen Intel® Core™ i7-13700H (24 MB cache, 14 cores, up to 5.00 GHz Turbo)",
            image: "assets/img/products/p4.avif"
        },
        {
            name: "XPS 13 Laptop",
            price: 89990.02,
            description: "12th Gen Intel® Core™ i5-1230U (12 MB cache, 10 cores, up to 4.40 GHz Turbo)",
            image: "assets/img/products/p3.avif"
        },
        {
            name: "Inspiron 24 All-in-One",
            price: 89990,
            description: "13th Gen Intel® Core™ i7-1355U (12 MB cache, 10 cores, 12 threads, up to 5.00 GHz Turbo)",
            image: "assets/img/products/p5.avif"
        },
        {
            name: "Inspiron Small Desktop",
            price:83990 ,
            description: "13th Gen Intel® Core™ i7-13700 (24 MB cache, 16 cores, 24 threads, 2.10 GHz to 5.10 GHz Turbo)",
            image: "assets/img/products/p6.avif"
        },
        {
            name: "HP Pavilion 35.6 cm Laptop 14-ec1003AU",
            price:52999 ,
            description: "AMD Ryzen™ 5-5625U Processor Windows 11 Home 35.6 cm (14) diagonal FHD display Brightview with AMD Radeon™ Graphics",
            image: "assets/img/products/p7.avif"
        },
        {
            name: "HP Spectre 34.3 cm x360 2-in-1 Laptop OLED 13.5-ef0053TU - Black",
            price:134999 ,
            description: "12th Gen Intel® Evo™ Powered by Core™ i7 Processor Windows 11 Home 34.3 cm (13.5) diagonal, 3K2K (3000 x 2000), OLED touchscreen display with Intel® Iris® Xᵉ Graphics 16 GB LPDDR4x-4266 RAM",
            image: "assets/img/products/p8.avif"
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

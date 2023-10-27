document.addEventListener("DOMContentLoaded", function () {
    // Sample product data in JSON format
    const products = [
        {
            name: "boAt Rockerz",
            price: 1099,
            description: "boAt Rockerz 400 Bluetooth On Ear Headphones With Mic With Upto 8 Hours Playback & Soft Padded Ear Cushions(Black/Blue)",
            image: "assets/img/products/p17.jpg"
        },
        {
            name: "Sony WF-C700N",
            price: 7499,
            description: "Sony WF-C700N Bluetooth Truly Wireless Lightest Active Noise Cancellation in Ear Earbuds, Multipoint Connection, 10 mins Super Quick Charge, 20hrs Batt, IPX4 Ratings, Fast Pair, App Support-Black",
            image: "assets/img/products/p21.jpg"
        },
        {
            name: "TOSHIBA Canvio Basics 1TB Portable External HDD",
            price: 4312,
            description: "TOSHIBA Canvio Basics 1TB Portable External HDD - USB 3.2 for PC Laptop Windows and Mac, 3 Years Warranty, External Hard Drive - Black",
            image: "assets/img/products/p19.jpg"
        },
        {
            name: "JBL Tune 230NC TWS",
            price:3988 ,
            description: "JBL Tune 230NC TWS, Active Noise Cancellation Earbuds with Mic, Massive 40 Hrs Playtime with Speed Charge, Adjustable EQ APP, 4Mics for Perfect Calls, Google Fast Pair, Bluetooth 5.2 (Black)",
            image: "assets/img/products/p20.jpg"
        },
        {
            name: "Samsung T7",
            price: 7749,
            description: "Samsung T7 1TB Up to 1,050MB/s USB 3.2 Gen 2 (10Gbps, Type-C) External Solid State Drive (Portable SSD) Blue (MU-PC1T0H)  Visit the Samsung Store",
            image: "assets/img/products/p22.jpg"
        },
        {
            name: "SanDisk 1TB Pendrive",
            price:19191,
            description: "SanDisk 1TB Ultra Dual Drive Luxe USB Type-C - SDDDC4-1T00-G46, Silver",
            image: "assets/img/products/p23.jpg"
        },
        {
            name: "Apple Wired EarPods",
            price: 1549,
            description: "Apple Wired EarPods with Lightning Connector",
            image: "assets/img/products/p18.jpg"
        },
        {
            name: "Samsung Galaxy Watch5 ",
            price:24999 ,
            description: "Samsung Galaxy Watch5 Bluetooth (44 mm, Graphite, Compatible with Android only)",
            image: "assets/img/products/p24.jpg"
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

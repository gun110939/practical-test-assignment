// ============================================================
// mockData.js — ข้อมูลจำลอง แก้ไขให้ตรงกับโจทย์
// ============================================================

const MOCK_DATA = {
  // Navigation Menu
  navMenu: [
    {
      id: "women",
      label: "WOMEN",
      href: "#",
      submenu: [
        // { id: "new-arrivals", label: "NEW ARRIVALS", href: "#" },
        // { id: "clothing", label: "CLOTHING", href: "#" },
        // { id: "shoes", label: "SHOES", href: "#" },
        // { id: "bags", label: "BAGS", href: "#" },
        // { id: "accessories", label: "ACCESSORIES", href: "#" },
      ],
    },
    {
      id: "collections",
      label: "COLLECTIONS",
      href: "#",
      submenu: [
        // { id: "spring-summer", label: "SPRING/SUMMER", href: "#" },
        // { id: "fall-winter", label: "FALL/WINTER", href: "#" },
        // { id: "capsule", label: "CAPSULE", href: "#" },
      ],
    },
    {
      id: "editorial",
      label: "EDITORIAL",
      href: "#",
      submenu: [
        { id: "asc", label: "A.S.C", href: "#" },
        { id: "bazaar", label: "BAZAAR", href: "#" },
        { id: "elle", label: "ELLE", href: "#" },
        { id: "gq", label: "GQ", href: "#" },
        { id: "lofficial-thailand", label: "L'OFFICIAL THAILAND", href: "#" },
        { id: "numero", label: "NUMERO", href: "#" },
        { id: "vogue", label: "VOGUE", href: "#" },
      ],
    },
    {
      id: "news",
      label: "NEWS",
      href: "#",
      submenu: [],
    },
    {
      id: "stories",
      label: "STORIES",
      href: "#",
      submenu: [],
    },
  ],

  // ตัวอย่าง: ข้อมูล items (ปรับตามโจทย์)
  items: [
    {
      id: 1,
      title: "Item 1",
      description: "Description 1",
      image: "assets/images/placeholder.jpg",
      category: "category-a",
      price: 100,
      tags: ["tag1", "tag2"],
    },
    {
      id: 2,
      title: "Item 2",
      description: "Description 2",
      image: "assets/images/placeholder.jpg",
      category: "category-b",
      price: 200,
      tags: ["tag2", "tag3"],
    },
    {
      id: 3,
      title: "Item 3",
      description: "Description 3",
      image: "assets/images/placeholder.jpg",
      category: "category-a",
      price: 300,
      tags: ["tag1", "tag3"],
    },
  ],

  // ตัวอย่าง: ข้อมูล categories
  categories: [
    { id: "all", label: "ทั้งหมด" },
    { id: "category-a", label: "Category A" },
    { id: "category-b", label: "Category B" },
  ],

  // FAQ Categories with Questions
  faqCategories: [
    {
      id: "orders",
      label: "ORDERS",
      questions: [
        {
          question: "How can I track my order?",
          answer:
            "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's website.",
        },
        {
          question: "Can I modify or cancel my order?",
          answer:
            "Orders can be modified or cancelled within 2 hours of placement. After that, the order enters our fulfillment process and cannot be changed. Please contact customer service immediately if you need assistance.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are secured with SSL encryption.",
        },
      ],
    },
    {
      id: "shipping",
      label: "SHIPPING",
      questions: [
        {
          question: "How long does shipping take?",
          answer:
            "Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days. International shipping may take 10-14 business days depending on the destination.",
        },
        {
          question: "Do you offer free shipping?",
          answer:
            "Yes! We offer free standard shipping on all orders over $100. Orders under $100 have a flat rate shipping fee of $8.95.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by location. You can see the exact cost at checkout.",
        },
      ],
    },
    {
      id: "returns",
      label: "RETURNS & EXCHANGES",
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "Items can be returned within 14 days of receipt, provided they are unworn, unwashed, and in original condition with tags attached.",
        },
        {
          question: "Can I exchange for a different size?",
          answer:
            "Yes, exchanges are available for different sizes within 14 days of receipt. Please contact our customer service team to initiate an exchange.",
        },
        {
          question: "Are sale items refundable?",
          answer:
            "Sale items are final sale and cannot be refunded. However, exchanges may be available depending on stock availability.",
        },
        {
          question: "How do I initiate a return?",
          answer:
            "To initiate a return, log into your account, go to your order history, and select the item you wish to return. You will receive a prepaid shipping label via email.",
        },
      ],
    },
    {
      id: "sizing",
      label: "SIZING & PRODUCTS",
      questions: [
        {
          question: "How do I find my size?",
          answer:
            "We provide a detailed size guide on each product page. Measure yourself and compare with our size chart for the best fit. If you're between sizes, we recommend sizing up.",
        },
        {
          question: "Are your products true to size?",
          answer:
            "Most of our products are true to size. However, some items may have specific fit notes listed on the product page. We recommend checking individual product descriptions.",
        },
        {
          question: "What materials are your products made of?",
          answer:
            "We use premium quality materials including organic cotton, sustainable polyester, and natural fibers. Material composition is listed on each product page.",
        },
      ],
    },
  ],

  // Footer Data
  footer: {
    columns: [
      {
        id: "about",
        title: "ABOUT",
        links: [
          { label: "Women", href: "#" },
          { label: "Collections", href: "#" },
          { label: "Editorial", href: "#" },
          { label: "Stories", href: "#" },
        ],
      },
      {
        id: "help",
        title: "HELP",
        links: [
          { label: "Payment Notification", href: "#" },
          { label: "Customer Service", href: "#" },
          { label: "FAQ", href: "#" },
        ],
      },
      {
        id: "social",
        title: "SOCIAL",
        links: [
          { label: "Instagram", href: "#" },
          { label: "Facebook", href: "#" },
        ],
      },
      {
        id: "legal",
        title: "LEGAL",
        links: [
          { label: "Terms & Conditions", href: "#" },
          { label: "Privacy Policy", href: "#" },
          { label: "Cookies Policy", href: "#" },
        ],
      },
    ],
    newsletter: {
      title: "NEWSLETTER",
      placeholder: "Email",
      buttonText: "SUBSCRIBE",
    },
    copyright: "©PLAIMANAS",
    credit: "Web by ::*",
  },
};

/**
 * PRODUCTOS DE ZAFIRO CROCHET
 * 
 * Estructura de cada producto:
 * {
 *   id: número único,
 *   name: "Nombre del producto",
 *   price: precio actual,
 *   oldPrice: precio anterior (opcional, si se pone, sale en OFERTAS),
 *   category: "categoría" o ["categoría1", "categoría2"] (puede ser string o array para múltiples categorías),
 *   image: "URL de la imagen",
 *   description: "Descripción breve",
 *   rating: número de estrellas (1-5)
 * }
 */

const products = [
    // === RAMOS ===
    // === SNOOPY ===
    {
        id: 1, name: "MS Hex Bolt", price: 350.00, oldPrice: 40.00, category: ["bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The MS Hex Bolt is a high-strength fastener manufactured from premium-grade mild steel, designed for robust and reliable fastening in a wide range of industrial and general-purpose applications. With a standard hexagonal head, it allows easy installation using common tools, making it ideal for use in construction, machinery, automotive, and fabrication works.\n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 2, name: "MS Half Thread Bolt", price: 350.00, oldPrice: 40.00, category: ["bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 3, name: "SS Hex Bolt", price: 350.00, oldPrice: 40.00, category: ["bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 4, name: "MS Hex Flange Bolt", price: 350.00, oldPrice: 40.00, category: ["bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 5, name: "MS Carriage Bolt", price: 350.00, oldPrice: 40.00, category: ["bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 6, name: "MS U Bolt", price: 350.00, oldPrice: 40.00, category: ["bolt", "hook"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 7, name: "MS Eye Bolt", price: 350.00, oldPrice: 40.00, category: ["bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 8, name: "MS Hex Nut", price: 350.00, oldPrice: 40.00, category: ["nut"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 9, name: "Double Face Hex Nut", price: 350.00, oldPrice: 40.00, category: ["nut"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 10, name: "MS Hex Flange Nut", price: 350.00, oldPrice: 40.00, category: ["nut"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 11, name: "Hex Long Coupling Nut", price: 350.00, oldPrice: 40.00, category: ["nut"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 12, name: "MS Lock Nut", price: 350.00, oldPrice: 40.00, category: ["nut"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 13, name: "SS Hex Nut", price: 350.00, oldPrice: 40.00, category: ["nut"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 14, name: "High Tensile Nut", price: 350.00, category: ["high tensile","nut"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 15, name: "Dome Cap Nut", price: 350.00, category: ["nut"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 16, name: "MS Plain Washer", price: 350.00, category: ["washer"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 17, name: "MS Spring Washer", price: 350.00, category: ["washer"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 18, name: "SS Plain Washer", price: 350.00, category: ["washer"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 19, name: "High Tensile Washer", price: 350.00, category: ["washer", "high tensile"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 20, name: "Bitumen Washer", price: 350.00, category: ["washer", "rubber"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 21, name: "Allen Socket Head Bolt", price: 350.00, category: ["high tensile", "bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 22, name: "Counter Sunk Allen Bolt", price: 350.00, category: ["high tensile", "bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 23, name: "Bolt", price: 350.00, category: ["high tensile", "bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 24, name: "Expansion Bolt Fastener", price: 350.00, category: ["fastener"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 25, name: "Sleeve Anchor Fastener", price: 350.00, category: ["fastener"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 26, name: "Pin Type Anchor Fastener", price: 350.00, category: ["fastener"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 27, name: "Bullet Fastener", price: 350.00, category: ["fastener"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 28, name: "Bolt Type Fastener", price: 350.00, category: ["fastener"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 29, name: "Hook Eye Fastener", price: 350.00, category: ["fastener"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 30, name: "L Patti Clamp", price: 350.00, category: ["fitting"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 31, name: "MS Lock Patti", price: 350.00, category: ["fitting"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 32, name: "MS Bed T Nut Bolt Bed Fitting", price: 350.00, category: ["fitting"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 33, name: "MS L Patti", price: 350.00, category: ["fitting"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 34, name: "MS Bolt Nut Washer", price: 350.00, category: ["bolt", "nut", "washer"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 35, name: "SS Bolt Nut Washer", price: 350.00, category: ["bolt", "nut", "washer"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 36, name: "Round Head Rivet", price: 350.00, category: ["other"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 37, name: "T Type Foundation Bolt", price: 350.00, category: ["bolt", "other"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 38, name: "L Type Foundation Bolt", price: 350.00, category: ["other", "bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 38, name: "J Type Foundation Bolt", price: 350.00, category: ["other", "bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 39, name: "Self Tapping Screw", price: 350.00, category: ["screw"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 40, name: "Gypsum Board Screw", price: 350.00, category: ["screw"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id:41, name: "Self Drilling Screw", price: 350.00, category: ["screw"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 42, name: "MS L Hook Bolt", price: 350.00, category: ["hook"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 43, name: "MS J Hook Bolt", price: 350.00, category: ["hook"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 44, name: "J Pipe Hook", price: 350.00, category: ["hook"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 45, name: "Nail Pipe Hook", price: 350.00, category: ["hook"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 46, name: "GI Pipe Hook", price: 350.00, category: ["hook"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 47, name: "MS U Strap Pipe Clamp", price: 350.00, category: ["hook"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 48, name: "MS Door Hinges", price: 350.00, category: ["hinges"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 49, name: "SS Door Hinges", price: 350.00, category: ["hinges"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 50, name: "MS Door Bolt Hinges", price: 350.00, category: ["hinges"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 51, name: "MS Piano Hinges", price: 350.00, category: ["hinges"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 52, name: "SS Piano Hinges", price: 350.00, category: ["hinges"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 53, name: "Thread Rod", price: 350.00, category: ["rod"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 54, name: "Tie Rod", price: 350.00, category: ["rod"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 55, name: "C Channel", price: 350.00, category: ["rod"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 56, name: "Stud", price: 350.00, category: ["rod"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 58, name: "Concrete Nail", price: 350.00, category: ["other"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
    {
        id: 59, name: "MS Nail", price: 350.00, category: ["other"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Este ramo contiene 3 girasoles, 3 rosas y un Snoopy aviador 🤍", rating: 5
    },
];

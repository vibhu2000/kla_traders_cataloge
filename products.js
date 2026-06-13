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
        id: 1, name: "MS Hex Bolt", price: 350.00, category: ["bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The MS Hex Bolt is a high-strength fastener manufactured from premium-grade mild steel, designed for robust and reliable fastening in a wide range of industrial and general-purpose applications. With a standard hexagonal head, it allows easy installation using common tools, making it ideal for use in construction, machinery, automotive, and fabrication works.\n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 2, name: "MS Half Thread Bolt", price: 350.00, category: ["bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The MS Half Thread Hex Bolt is a premium-grade fastener crafted from high-strength mild steel, designed with partial threading to provide a firm and secure grip in structural and load-bearing applications. The hexagonal head allows easy tightening using standard tools, while the unthreaded shank offers better alignment, shear strength, and clamping force—ideal for machinery, construction, and automotive uses. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 3, name: "SS Hex Bolt", price: 350.00, category: ["bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Stainless Steel Hex Bolts are high-strength, six-sided head bolts made from premium stainless steel (SS 202 / SS 304 / SS 316), ideal for applications requiring corrosion resistance, durability, and a clean finish. Designed for use in both structural and decorative applications, these bolts ensure reliable fastening even in wet, humid, or chemically aggressive environments. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 4, name: "MS Hex Flange Bolt", price: 350.00, category: ["bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The MS Hex Flange Bolt is a high-performance fastener made from durable mild steel, featuring an integrated flange beneath the hexagonal head. This built-in washer design distributes the load more evenly, reduces the need for a separate washer, and helps prevent loosening under vibration. Ideal for high-torque applications in automotive, machinery, and structural assemblies. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 5, name: "MS Carriage Bolt", price: 350.00, category: ["bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The MS Carriage Bolt is a high-strength fastener made from premium-quality mild steel, featuring a dome-shaped head and a square neck just below the head to prevent rotation during tightening. Commonly used in wood-to-metal and wood-to-wood connections, it offers a smooth, finished appearance on the outer surface and a strong, secure fit on the inside. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 6, name: "MS U Bolt", price: 350.00, category: ["bolt", "hook"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The MS U Bolt is a U-shaped fastener made from high-quality mild steel, designed to secure round or semi-round objects such as pipes, tubes, and rods to flat surfaces. Its threaded ends allow for firm clamping using nuts and washers. Ideal for use in plumbing, mechanical support systems, automotive, and structural installations. \n\n Available Size Ranges:- \n 1. Rod Diameter: All size available \n 2. Pipe Size Compatibility: Custom sizes available on request \n 3. Leg Length & Inside Width: As per design/specification", rating: 5
    },
    {
        id: 7, name: "MS Eye Bolt", price: 350.00, category: ["bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The O Ring Bolt is a specialized fastener designed with a machined groove near the head to accommodate an O-ring, providing a leak-proof seal in high-pressure or fluid-handling systems. Made from high-quality mild steel (MS) or other alloys, it ensures both structural integrity and reliable sealing performance, making it ideal for hydraulic, pneumatic, and oil & gas applications. \n\n  Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 8, name: "MS Hex Nut", price: 350.00, category: ["nut"],
        image: "fotos productos/nut1.jpg",
        images: ["fotos productos/nut1.jpg", "fotos productos/nut2.jpg","fotos productos/nut3.jpg"],
        description: "The MS Hex Nut is a high-strength, precision-machined fastener made from durable mild steel, designed to securely fasten bolts and threaded rods in a wide range of structural and mechanical applications. Its standard hexagonal shape allows easy tightening with wrenches or spanners, making it a go-to choice for general-purpose fastening in construction, fabrication, machinery, and automotive industries. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 9, name: "Double Face Hex Nut", price: 350.00, category: ["nut"],
        image: "fotos productos/df1.jpg",
        images: ["fotos productos/df1.jpg", "fotos productos/df2.jpg","fotos productos/df3.jpg"],
        description: "The Double Face Hex Nut is a specialized fastener designed for enhanced grip and torque application. Featuring hexagonal faces on both sides, this nut allows for easier wrench access and more secure tightening in high-load applications. Made from durable mild steel, it’s ideal for use in construction, machinery, and structural assemblies where strength and reliability are essential. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 10, name: "MS Hex Flange Nut", price: 350.00, category: ["nut"],
        image: "fotos productos/flange3.jpg",
        images: ["fotos productos/flange1.jpg", "fotos productos/flange2.jpg","fotos productos/flange3.jpg"],
        description: "The MS Hex Flange Nut is a heavy-duty fastener made from high-quality mild steel, featuring a wide flange at the base of the hexagonal shape. This built-in washer-like flange helps distribute the clamping load over a larger surface area, reducing surface damage and increasing resistance to loosening under vibration. Available in plain or serrated flange options, it’s ideal for use in machinery, automotive, and structural applications. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 11, name: "Hex Long Coupling Nut", price: 350.00, category: ["nut"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Hex Long Coupling Nuts are specially designed fasteners used to join two male-threaded rods or bolts together, extending their length for various structural and industrial applications. Made from high-quality mild steel, stainless steel, or high tensile steel, these nuts provide excellent strength, durability, and resistance to loosening under vibration. \n\n Their elongated hexagonal shape allows easy tightening with a standard wrench, ensuring a secure and precise connection. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 12, name: "MS Lock Nut", price: 350.00, category: ["nut"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Lock Nuts are specially designed fasteners that provide extra resistance against loosening caused by vibration and torque. Unlike standard hex nuts, these nuts feature a locking mechanism (such as nylon insert or deformed threads) that ensures a secure hold even in high-vibration applications. \n\nManufactured using Mild Steel, Stainless Steel, or High Tensile Steel, Hex Lock Nuts deliver high strength, durability, and long service life. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 13, name: "SS Hex Nut", price: 350.00, category: ["nut"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Stainless Steel Hex Nuts are six-sided internally threaded fasteners made from high-quality stainless steel (SS 202 / SS 304 / SS 316), designed for use with bolts, screws, studs, and other externally threaded components. These nuts offer exceptional resistance to rust, corrosion, and environmental wear, making them ideal for both indoor and outdoor applications. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 14, name: "High Tensile Nut", price: 350.00, category: ["high tensile","nut"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "High Tensile Hex Nuts are robust, precision-engineered nuts made from high-grade alloy steel designed to complement high tensile bolts in applications where superior strength and durability are essential. These nuts are hardened and heat-treated to withstand heavy loads, vibrations, and extreme stress, making them suitable for critical structural and industrial uses. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 15, name: "Dome Cap Nut", price: 350.00, category: ["nut"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Dome Nuts, also known as Acorn Nuts or Cap Nuts, are hex nuts with a rounded closed-end dome that covers the exposed bolt threads. This design not only provides a clean and decorative finish but also protects threads from damage, corrosion, and accidental contact. Dome nuts are commonly manufactured from Mild Steel, Stainless Steel and are widely used in mechanical, automotive, and furniture applications. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom size combinations available on request", rating: 5
    },
    {
        id: 16, name: "MS Plain Washer", price: 350.00, category: ["washer"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The MS Plain Washer is a circular, flat washer made from durable mild steel, designed to provide even load distribution and surface protection in fastening assemblies. It fits between the bolt head or nut and the surface material, preventing damage, reducing wear, and improving the stability of the joint. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 17, name: "MS Spring Washer", price: 350.00, category: ["washer"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "MS Spring Washers, also known as split lock washers, are circular washers made from high-quality mild steel and designed with a split and slightly twisted profile. This shape allows them to apply continuous pressure on fasteners, preventing loosening due to vibration, shock, or thermal expansion. They are ideal for applications requiring enhanced fastening security. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 18, name: "SS Plain Washer", price: 350.00, category: ["washer"],
        image: "fotos productos/ssw1.jpg",
        images: ["fotos productos/ssw1.jpg", "fotos productos/ssw2.jpg","fotos productos/ssw3.jpg",],
        description: "Stainless Steel Washers are flat, round components designed to distribute the load of fasteners such as bolts or screws and protect surfaces from damage. Crafted from premium stainless steel (SS 202 / SS 304 / SS 316), these washers offer outstanding corrosion resistance, strength, and durability, making them ideal for demanding environments including marine, chemical, and outdoor applications. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 19, name: "High Tensile Washer", price: 350.00, category: ["washer", "high tensile"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "High Tensile Washers are engineered from high-strength alloy steel to provide excellent durability, resistance to deformation, and superior load distribution in high-stress fastening applications. These washers are typically used with high tensile bolts and nuts to maintain joint integrity under extreme mechanical loads, vibrations, and dynamic pressure. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 20, name: "Bitumen Washer", price: 350.00, category: ["washer", "rubber"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Bitumen Washers are premium-grade sealing washers made from high-compression bitumen bonded with mild steel or fiber backing, offering excellent waterproofing and vibration resistance. These washers are specifically designed for roofing, cladding, and sheet metal applications where a leak-proof seal and long-lasting performance are essential. \n\n Available Size Ranges:- \n 1. Outer Diameter:- All size available \n 2. Inner Hole:- Custom sizes available on request", rating: 5
    },
    {
        id: 21, name: "Allen Socket Head Bolt", price: 350.00, category: ["high tensile", "bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "High Tensile Allen Socket Head Bolts are premium-grade fasteners designed for applications requiring exceptional tensile strength, precision fit, and a clean, compact head profile. Manufactured from alloy steel with a high tensile rating (8.8, 10.9, or 12.9 grades), these bolts are engineered for heavy-duty, high-stress applications across industrial, automotive, and mechanical sectors. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 22, name: "Counter Sunk Allen Bolt", price: 350.00, category: ["high tensile", "bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Counter Sunk Allen Bolts are precision-engineered fasteners featuring a flat, tapered head that sits flush with the surface after installation, ensuring a neat and smooth finish. Designed for applications where aesthetics, safety, and streamlined surfaces are essential, these bolts use an internal hex drive for secure tightening and torque control.\n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 23, name: "High Tensile Bolt", price: 350.00, category: ["high tensile", "bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "High Tensile Bolts are precision-engineered fasteners made from high-grade alloy steel, designed to deliver exceptional strength, durability, and reliability in high-stress environments. These bolts are hardened and heat-treated to meet stringent mechanical properties, making them ideal for structural, mechanical, and industrial use. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 24, name: "Expansion Bolt Fastener", price: 350.00, category: ["fastener"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Expansion Bolt Fasteners are heavy-duty mechanical anchors designed for secure fastening in concrete, brick, and stone surfaces. These fasteners expand inside the drilled hole when the bolt is tightened, creating a strong grip against the base material and ensuring a reliable and stable installation. \n\n Manufactured from high-quality mild steel, stainless steel, or high tensile steel, expansion bolts provide excellent load-bearing capacity, durability, and corrosion resistance, making them suitable for demanding construction and industrial applications.", rating: 5
    },
    {
        id: 25, name: "Sleeve Anchor Fastener", price: 350.00, category: ["fastener"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Sleeve Anchor Fasteners are versatile expansion anchors designed for secure fastening in concrete, brick, block, and masonry materials. They consist of a threaded bolt, expansion sleeve, nut, and washer that expand when tightened, providing a strong mechanical grip inside the drilled hole. \n\n Manufactured from high-quality mild steel or stainless steel, sleeve anchors offer excellent strength, durability, and corrosion resistance, making them suitable for both indoor and outdoor applications.", rating: 5
    },
    {
        id: 26, name: "Pin Type Anchor Fastener", price: 350.00, category: ["fastener"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Pin Type Anchor Fasteners are reliable expansion fasteners designed for fast and secure fixing in concrete, brick, and solid masonry surfaces. These anchors consist of a steel sleeve and drive pin that expands inside the drilled hole when the pin is hammered in, creating a firm and permanent hold. \n\nManufactured from high-quality mild steel or stainless steel, these fasteners provide excellent strength, durability, and corrosion resistance, making them ideal for both light and medium-duty installations.", rating: 5
    },
    {
        id: 27, name: "Bullet Fastener", price: 350.00, category: ["fastener"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Bullet Anchor Fasteners are heavy-duty expansion fasteners designed for secure fixing in concrete, brick, and solid masonry surfaces. They feature a bullet-shaped expansion sleeve that expands when the nut is tightened, creating a strong grip inside the drilled hole. \n\n Manufactured from high-quality mild steel or stainless steel, these anchors provide excellent load-bearing capacity, durability, and resistance to vibration, making them suitable for structural and industrial applications.", rating: 5
    },
    {
        id: 28, name: "Bolt Type Fastener", price: 350.00, category: ["fastener"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Anchor bolts are heavy-duty fasteners that connect objects to concrete surfaces. They are used in a variety of applications, such as securing equipment and fastening structural elements.", rating: 5
    },
    {
        id: 29, name: "Hook Eye Fastener", price: 350.00, category: ["fastener"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Hook Fasteners are specialized fastening components designed with a hook-shaped end that allows secure hanging, anchoring, or supporting of objects. These fasteners are commonly manufactured from mild steel, stainless steel, or galvanized steel, offering excellent strength and durability for construction and industrial applications. \n\nThe hook design provides a firm hold and easy attachment for cables, pipes, chains, and suspended equipment.", rating: 5
    },
    {
        id: 30, name: "L Patti Clamp", price: 350.00, category: ["fitting"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Mild Steel L Patti Clamps are durable L-shaped support brackets manufactured from high-quality mild steel, designed for secure holding, mounting, and structural support applications. Their strong right-angle design provides excellent stability, making them ideal for joining and supporting components in construction, fabrication, and furniture work. \n\n Available Size Ranges:- \n 1. Length: 1' to 12' \n 2. Thickness: Standard and heavy-duty options available", rating: 5
    },
    {
        id: 31, name: "MS Lock Patti", price: 350.00, category: ["fitting"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "MS Lock Patti is a sturdy locking accessory manufactured from high-quality mild steel, designed for secure locking of doors, cabinets, lockers, boxes, and industrial enclosures. Known for its strong construction and durability, this lock patti provides reliable security and smooth operation for both residential and commercial applications. \n\n Available Size Ranges:- \n 1. Length: 2' to 12' \n 2. Thickness: Standard and heavy-duty options available", rating: 5
    },
    {
        id: 32, name: "MS Bed T Nut Bolt Bed Fitting", price: 350.00, category: ["fitting"],
        image: "fotos productos/bed1.jpg",
        images: ["fotos productos/bed1.jpg", "fotos productos/bed2.jpg",],
        description: "The MS Bed T Nut & Bolt Set is a specially designed bed fitting solution made from premium-grade mild steel, used for securely assembling bed frames, wooden furniture, and other structural joinery. The T-nut features prongs or flanges that grip into the wood, while the matching bolt creates a firm, reusable joint—ideal for flat-pack furniture and disassemble wooden structures. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes and bulk set available on request", rating: 5
    },
    {
        id: 33, name: "MS L Patti", price: 350.00, category: ["fitting"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Mild Steel L Patti Clamps are durable L-shaped support brackets manufactured from high-quality mild steel, designed for secure holding, mounting, and structural support applications. Their strong right-angle design provides excellent stability, making them ideal for joining and supporting components in construction, fabrication, and furniture work. \n\n Available Size Ranges:- \n 1. Length: 1' to 12' \n 2. Thickness: Standard and heavy-duty options available", rating: 5
    },
    {
        id: 34, name: "MS Bolt Nut Washer", price: 350.00, category: ["bolt", "nut", "washer"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "This MS Nut, Bolt & Washer Set is a complete fastening solution made from high-quality mild steel, designed to deliver strength, durability, and cost-effectiveness for a wide range of industrial and domestic applications. The hex bolt ensures firm holding power, the matching nut provides a secure thread connection, and the washer distributes load evenly to prevent damage and enhance grip. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom size combinations available on request", rating: 5
    },
    {
        id: 35, name: "SS Bolt Nut Washer", price: 350.00, category: ["bolt", "nut", "washer"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The Stainless Steel Nut, Bolt & Washer Set provides a durable, rust-proof, and high-strength fastening solution for a wide range of applications. Manufactured from premium-grade stainless steel (SS 202 / SS 304 / SS 316), these fasteners offer superior resistance to corrosion, weathering, and chemical exposure, making them ideal for both indoor and outdoor use. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 36, name: "Round Head Rivet", price: 350.00, category: ["other"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Round Head Rivets are solid, one-piece fasteners featuring a semi-spherical (round) head that provides a smooth, finished appearance and high clamping force. These rivets are made from mild steel, stainless steel, aluminum, or brass, and are designed to create strong, permanent joints in structural, automotive, and general metal fabrication applications.", rating: 5
    },
    {
        id: 37, name: "T Type Foundation Bolt", price: 350.00, category: ["bolt", "other"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "T Type Foundation Bolts are heavy-duty anchor bolts designed for embedding into concrete foundations to secure structural elements such as columns, machinery, and steel frames. The Eye-shaped bend at one end provides a strong anchoring effect within the concrete, preventing the bolt from pulling out under load. \n\n Manufactured from high-quality mild steel or high tensile steel, these bolts offer excellent strength, durability, and reliable load-bearing performance in construction and infrastructure projects. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom size combinations available on request", rating: 5
    },
    {
        id: 38, name: "L Type Foundation Bolt", price: 350.00, category: ["other", "bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "L Type Foundation Bolts are heavy-duty anchor bolts designed for embedding into concrete foundations to secure structural elements such as columns, machinery, and steel frames. The L-shaped bend at one end provides a strong anchoring effect within the concrete, preventing the bolt from pulling out under load. \n\n Manufactured from high-quality mild steel or high tensile steel, these bolts offer excellent strength, durability, and reliable load-bearing performance in construction and infrastructure projects. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom size combinations available on request", rating: 5
    },
    {
        id: 38, name: "J Type Foundation Bolt", price: 350.00, category: ["other", "bolt"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "J Type Foundation Bolts are heavy-duty anchor fasteners manufactured from high-quality mild steel or high tensile steel, specially designed for embedding into concrete foundations. The J-shaped bend at the bottom provides excellent anchoring strength by preventing pull-out, making these bolts ideal for structural and industrial installations. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom size combinations available on request", rating: 5
    },
    {
        id: 39, name: "Self Tapping Screw", price: 350.00, category: ["screw"],
        image: "fotos productos/screw1.jpg",
        images: ["fotos productos/screw1.jpg", "fotos productos/screw2.jpg","fotos productos/screw3.jpg",],
        description: "Self Tapping Screws are versatile fasteners designed to create their own threads as they are driven into materials such as metal, plastic, or wood, eliminating the need for pre-tapped holes. Manufactured from high-quality hardened steel or stainless steel, these screws ensure strong, secure, and long-lasting joints in a wide range of applications. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 40, name: "Gypsum Board Screw", price: 350.00, category: ["screw"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Gypsum Board Screws, also known as Drywall Screws, are specially designed fasteners used to securely fix gypsum boards (drywall) to wooden or metal framing. Made from high-strength steel and treated with a black phosphate coating, these screws offer excellent grip, corrosion resistance, and fast, clean installation without damaging the board. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id:41, name: "Self Drilling Screw", price: 350.00, category: ["screw"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The Mild Steel Polished Self Drilling Screw is a high-performance fastener engineered from durable mild steel and finished with a smooth polished surface for enhanced appearance and corrosion resistance. Designed with a self-drilling tip, it eliminates the need for pre-drilling, allowing for quick and secure fastening of metal to metal or metal to wood. Ideal for construction, fabrication, roofing, and general-purpose applications. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 42, name: "MS L Hook Bolt", price: 350.00, category: ["hook"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Mild Steel L Hook Bolts, also known as L-Bolts, are right-angle fasteners crafted from high-quality mild steel, featuring a 90-degree bend at one end for strong anchoring and secure holding in concrete, masonry, or structural frameworks. These bolts are widely used in construction, infrastructure, and industrial applications where a firm embedded hold is needed. \n\n Available Size Ranges:- \n 1. Diameter:- All size available \n 2. Length:- Custom sizes available on request \n 3. Bend (Hook) length:- As per design", rating: 5
    },
    {
        id: 43, name: "MS J Hook Bolt", price: 350.00, category: ["hook"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The J Hook Bolt is a strong, J-shaped fastener made from premium mild steel, designed for suspending, anchoring, or securing cables, rods, conduits, and pipes in construction and mechanical installations. Its curved hook design allows for easy support from beams, channels, or other structural elements without the need for complex brackets. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 44, name: "J Pipe Hook", price: 350.00, category: ["hook"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The J Pipe Hook is a J-shaped fastener made from high-quality mild steel, designed for securing, supporting, and suspending pipes, cables, or conduits from ceilings, beams, or walls. With its open hook design, it allows for easy installation and removal without the need for disassembling the entire support system. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 45, name: "Nail Pipe Hook", price: 350.00, category: ["hook"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Nail Pipe Hooks are simple and reliable fastening components used for securing pipes, cables, and conduits to walls or wooden surfaces. These hooks consist of a curved metal hook attached with a strong nail, allowing quick installation by hammering the nail directly into the surface. \n\n Manufactured from high-quality mild steel with galvanized or zinc-plated finish, nail pipe hooks offer good strength, durability, and corrosion resistance for plumbing and electrical installations.", rating: 5
    },
    {
        id: 46, name: "GI Pipe Hook", price: 350.00, category: ["hook"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "GI Pipe Hooks are durable support fasteners manufactured from high-quality galvanized iron (GI), designed for securely holding and supporting pipes, conduits, and tubing systems. The galvanized coating provides excellent rust and corrosion resistance, making these hooks suitable for both indoor and outdoor installations. \n\n Manufactured from high-quality mild steel with galvanized or zinc-plated finish, offer good strength, durability, and corrosion resistance for plumbing and electrical installations.", rating: 5
    },
    {
        id: 47, name: "MS U Strap Pipe Clamp", price: 350.00, category: ["hook"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The U Strap Clamp is a reliable and sturdy pipe support accessory designed in a U-shaped strap form to hold and secure pipes, tubes, or conduits against walls, ceilings, or surfaces. Manufactured from high-quality mild steel, it offers excellent strength and durability, making it ideal for plumbing, electrical, and mechanical applications. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 48, name: "MS Door Hinges", price: 350.00, category: ["hinges"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Mild Steel Door Hinges are premium-quality hinges designed for long-lasting performance, smooth door movement, and resistance to rust and corrosion. Manufactured from high-grade stainless steel, these hinges are ideal for both interior and exterior doors, offering a sleek finish, high load-bearing capacity, and maintenance-free durability. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 49, name: "SS Door Hinges", price: 350.00, category: ["hinges"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Stainless Steel Door Hinges are premium-quality hinges designed for long-lasting performance, smooth door movement, and resistance to rust and corrosion. Manufactured from high-grade stainless steel, these hinges are ideal for both interior and exterior doors, offering a sleek finish, high load-bearing capacity, and maintenance-free durability. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 50, name: "MS Door Bolt Hinges", price: 350.00, category: ["hinges"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "MS Door Bolt Hinges combine the function of a hinge and a sliding bolt, providing a durable and secure solution for locking doors, gates, and cabinets. Made from premium mild steel (MS), these hinges are engineered for strength, corrosion resistance, and long-term performance. The integrated bolt mechanism allows smooth sliding and reliable locking, making them ideal for both residential and industrial use. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 51, name: "MS Piano Hinges", price: 350.00, category: ["hinges"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Mild Steel Piano Hinges, also known as continuous hinges, are long, narrow hinges that run the full length of the two surfaces being joined. Crafted from high-quality mild steel (MS), these hinges provide uniform strength and alignment, ensuring smooth and durable operation over extended use. Ideal for doors, cabinets, panels, equipment covers, toolboxes, and industrial enclosures. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 52, name: "SS Piano Hinges", price: 350.00, category: ["hinges"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The Stainless Steel Piano Hinge, also known as a continuous hinge, is a long, narrow hinge designed to run the full length of the door or panel. Made from high-quality stainless steel, this hinge provides exceptional strength, rust resistance, and smooth operation, making it ideal for frequent-use applications where alignment and durability are essential. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 53, name: "Thread Rod", price: 350.00, category: ["rod"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The MS Threaded Rod (also known as a Threaded Bar or Stud Rod) is a long, straight rod fully threaded from end to end, made from durable mild steel. Designed for versatile fastening, anchoring, and support applications, it provides excellent tensile strength and can be easily cut to desired lengths for custom use. Ideal for structural, industrial, and DIY applications where high-strength and extended reach are required. \n\n Available Size Ranges:- \n 1. Diameter: All size available \n 2. Length: as per requirement", rating: 5
    },
    {
        id: 54, name: "Tie Rod", price: 350.00, category: ["rod"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The MS Threaded Rod (also known as a Threaded Bar or Stud Rod) is a long, straight rod fully threaded from end to end, made from durable mild steel. Designed for versatile fastening, anchoring, and support applications, it provides excellent tensile strength and can be easily cut to desired lengths for custom use. Ideal for structural, industrial, and DIY applications where high-strength and extended reach are required. \n\n Available Size Ranges:- \n 1. Diameter: All size available \n 2. Length: as per requirement", rating: 5
    },
    {
        id: 55, name: "C Channel", price: 350.00, category: ["rod"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "The MS Slotted Channel is a durable and versatile support system made from high-quality mild steel, widely used in construction, electrical installations, HVAC, and mechanical support frameworks. Featuring uniformly spaced slots along its length, it allows for easy and flexible mounting of pipes, ducts, cables, and other components without welding or drilling. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 56, name: "Stud", price: 350.00, category: ["rod"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Mild Steel Stud Bolts are strong, double-ended threaded fasteners designed for secure and reliable joining of components using nuts on both sides. Manufactured from high-quality mild steel, these bolts provide excellent strength, durability, and consistent performance in structural and industrial applications. \n\nStud bolts are commonly used where high clamping force and precise alignment are required, especially in flange connections and heavy machinery assemblies. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom size combinations available on request", rating: 5
    },
    {
        id: 58, name: "Concrete Nail", price: 350.00, category: ["other"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Galvanized Concrete Nails are tough, hardened nails specifically designed for driving into concrete, brick, and masonry surfaces. Manufactured from high-carbon steel and coated with a galvanized zinc finish, these nails provide exceptional durability, corrosion resistance, and a strong hold in tough construction environments. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
    {
        id: 59, name: "MS Nail", price: 350.00, category: ["other"],
        image: "fotos productos/ramo snoopy 1.jpg",
        images: ["fotos productos/ramo snoopy 1.jpg", "fotos productos/ramo snoopy 2.jpeg",],
        description: "Counter Sunk Allen Bolts are precision-engineered fasteners featuring a flat, tapered head that sits flush with the surface after installation, ensuring a neat and smooth finish. Designed for applications where aesthetics, safety, and streamlined surfaces are essential, these bolts use an internal hex drive for secure tightening and torque control. \n\n Available Size Ranges:- \n 1. All size available \n 2. Custom sizes available on request", rating: 5
    },
];

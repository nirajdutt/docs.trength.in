/**
 * Trength Suite Documentation - Multilingual Support (English & Hindi)
 * Instant client-side switching with localStorage persistence
 */

const TrengthI18n = {
    currentLang: 'en',
    translations: {
        en: {
            // Header & Navigation
            doc_title: "Trength™ Suite | Retail ERP & POS Documentation",
            nav_getting_started: "Getting Started",
            nav_overview: "Overview",
            nav_installation: "Installation",
            nav_command_centre: "Command Centre",
            nav_configurations: "Configurations",
            nav_troubleshoot: "Troubleshoot",
            nav_video_tutorials: "Video Tutorials",
            nav_jewellery_app: "Jewellery Application",
            nav_management: "Management",
            nav_users: "Users",
            nav_roles: "Roles",
            nav_masters: "Masters",
            nav_shop: "Shop",
            nav_products: "Products",

            // Hero Section
            hero_badge_platform: "ENTERPRISE RETAIL PLATFORM",
            hero_badge_suite: "MODULAR POS & ERP SUITE",
            hero_heading: "Empower Your Retail Enterprise with <span class=\"text-primary position-relative d-inline-block\">Trength™ Suite</span>",
            hero_subtitle: "A high-speed, enterprise-grade retail POS and inventory management platform engineered for modern commercial operations. Trength provides specialized, domain-tailored software applications for <strong>Jewellery Showrooms</strong>, <strong>Mobile & Telecom Outlets</strong>, <strong>Clothing & Fashion Chains</strong>, and <strong>Consumer Electronics Retailers</strong>.",
            hero_btn_install: "<i class=\"bi bi-box-arrow-in-down me-1\"></i>Quick Installation Guide",
            hero_btn_command: "<i class=\"bi bi-sliders me-1\"></i>Command Centre Setup",
            hero_btn_diagnostics: "<i class=\"bi bi-wrench me-1\"></i>System Diagnostics",
            hero_arch_title: "100% Offline Local Store Network",
            hero_arch_desc: "Zero internet required. Single host PC connected to an offline Wi-Fi router; mobile sales reps scan QR tags and sync instantly with attached receipt & QR label printers.",
            hero_badge_airgap: "AIR-GAPPED READY",

            // Section 1: Why Choose Trength Suite
            sec1_title: "Why Choose Trength™ Suite?",
            sec1_subtitle: "Engineered for retail owners who demand speed, zero hardware bloat, and total data sovereignty",

            // 8 Advantages
            adv1_title: "100% On-Premises & Offline",
            adv1_badge: "DATA SOVEREIGNTY",
            adv1_desc: "Your confidential ledger, customer accounts, and profit margins stay strictly inside your physical store premises. 100% local database execution with zero cloud exposure or third-party data mining.",

            adv2_title: "Barcode Readers Obsolete",
            adv2_badge: "HARDWARE SAVINGS",
            adv2_desc: "We slashed your hardware budget. Turn any smartphone or tablet camera into an ultra-responsive 1D/2D barcode & QR scanner. No need to purchase bulky handheld laser guns.",

            adv3_title: "Multi-User, Zero Extra Hardware",
            adv3_badge: "BRING YOUR OWN DEVICE",
            adv3_desc: "Equip floor staff instantly. Any existing Android device, iPad, laptop, or desktop on your shop Wi-Fi links as an active sales counter without dedicated server racks or dumb terminals.",

            adv4_title: "No Extra License Fees",
            adv4_badge: "UNLIMITED LOCAL COUNTERS",
            adv4_desc: "Zero per-user tax. Add 3, 10, or 20 sales associates across counters without paying additional seat licenses, recurring user charges, or surprise billing penalties.",

            adv5_title: "Parallel Invoice Generation",
            adv5_badge: "CONCURRENCY GUARANTEED",
            adv5_desc: "Zero counter lockups during festival rushes. Multiple cashiers and floor salesmen generate, calculate, and commit sales invoices simultaneously without database conflicts or latency.",

            adv6_title: "Sub-Second Invoicing",
            adv6_badge: "BLAZING SPEED",
            adv6_desc: "Generate complete GST tax invoices within seconds. Instant barcode lookup, automated discount logic, and direct ESC/POS thermal printing keep checkout queues moving fast.",

            adv7_title: "Scan QR, Add & Done",
            adv7_badge: "FRICTIONLESS ONBOARDING",
            adv7_desc: "Zero typing friction. Scan a customer's UPI or loyalty QR to auto-populate phone, name, and address. Reward points apply instantly, and digital receipts are ready in one tap.",

            adv8_title: "100% Network Uptime",
            adv8_badge: "ZERO BROADBAND HALTS",
            adv8_desc: "Fiber cuts, ISP slowdowns, or bad weather will never stop your store from billing. The local daemon and offline database keep your entire business operational 24/7/365.",

            // Hardware Elimination Showcase
            hw_showcase_title: "<i class=\"bi bi-camera text-success me-2\"></i>How Trength Eliminates Hardware Costs",
            hw_badge: "HARDWARE LIST SLASHED",
            hw_f1: "<i class=\"bi bi-x-circle text-danger me-1\"></i>No Barcode Guns",
            hw_f1_sub: "Saves thousands per counter",
            hw_f2: "<i class=\"bi bi-check2-circle text-success me-1\"></i>Phone/Tablet Camera",
            hw_f2_sub: "Sub-second 1D/2D optical scan",
            hw_f3: "<i class=\"bi bi-lightning-charge text-warning me-1\"></i>Parallel Invoicing",
            hw_f3_sub: "Multiple staff bill in parallel",
            hw_f4: "<i class=\"bi bi-qr-code-scan text-primary me-1\"></i>Scan QR & Done",
            hw_f4_sub: "Customer added in 2 seconds",

            // Comparison Table
            table_title: "<i class=\"bi bi-arrow-left-right text-primary me-2\"></i>Traditional Retail Software vs. Trength™ Suite",
            table_badge: "MODERN ARCHITECTURE ADVANTAGE",
            th_factor: "Operational Factor",
            th_legacy: "Typical Cloud / Legacy POS",
            th_trength: "Trength™ Retail Suite",
            row1_factor: "<i class=\"bi bi-database me-2 text-primary\"></i>Data Location & Privacy",
            row1_legacy: "<span class=\"badge badge-light-danger me-2\"><i class=\"bi bi-x-circle text-danger me-1\"></i>Risk</span>Stored on third-party servers; vulnerable to cloud outages and data extraction.",
            row1_trength: "<span class=\"badge badge-light-success me-2\"><i class=\"bi bi-check-circle text-success me-1\"></i>100% On-Premises</span>Data never leaves your shop. Full local control and absolute privacy.",
            row2_factor: "<i class=\"bi bi-upc me-2 text-primary\"></i>Barcode Scanners",
            row2_legacy: "<span class=\"badge badge-light-danger me-2\"><i class=\"bi bi-x-circle text-danger me-1\"></i>Expensive</span>Requires purchasing separate handheld USB/laser barcode guns for every station.",
            row2_trength: "<span class=\"badge badge-light-success me-2\"><i class=\"bi bi-check-circle text-success me-1\"></i>Obsolete</span>Turns any smartphone or tablet camera into an instant high-speed scanner.",
            row3_factor: "<i class=\"bi bi-people me-2 text-primary\"></i>Multi-User Scaling",
            row3_legacy: "<span class=\"badge badge-light-danger me-2\"><i class=\"bi bi-x-circle text-danger me-1\"></i>Costly</span>Requires specialized terminal hardware and expensive client workstations.",
            row3_trength: "<span class=\"badge badge-light-success me-2\"><i class=\"bi bi-check-circle text-success me-1\"></i>Zero Extra Hardware</span>Staff connect using existing phones, tablets, or laptops over shop Wi-Fi.",
            row4_factor: "<i class=\"bi bi-credit-card me-2 text-primary\"></i>Software Licensing",
            row4_legacy: "<span class=\"badge badge-light-danger me-2\"><i class=\"bi bi-x-circle text-danger me-1\"></i>Recurring Fees</span>Charges monthly per-user / per-counter fees that skyrocket as you hire staff.",
            row4_trength: "<span class=\"badge badge-light-success me-2\"><i class=\"bi bi-check-circle text-success me-1\"></i>No Extra License Fee</span>Unlimited local counter users without recurring per-seat penalties.",
            row5_factor: "<i class=\"bi bi-speedometer me-2 text-primary\"></i>Parallel Billing During Peak Hours",
            row5_legacy: "<span class=\"badge badge-light-danger me-2\"><i class=\"bi bi-x-circle text-danger me-1\"></i>Database Locks</span>Multiple cashiers cause slow page reloads, stock record locks, and billing queues.",
            row5_trength: "<span class=\"badge badge-light-success me-2\"><i class=\"bi bi-check-circle text-success me-1\"></i>Guaranteed Parallel</span>High-concurrency local engine generates multiple invoices simultaneously in sub-seconds.",
            row6_factor: "<i class=\"bi bi-qr-code me-2 text-primary\"></i>Customer Onboarding",
            row6_legacy: "<span class=\"badge badge-light-danger me-2\"><i class=\"bi bi-x-circle text-danger me-1\"></i>Manual Typing</span>Cashier asks and types phone number, name, and address by hand, causing errors.",
            row6_trength: "<span class=\"badge badge-light-success me-2\"><i class=\"bi bi-check-circle text-success me-1\"></i>Scan QR & Done</span>Instantly reads customer QR/UPI code, populates profile, and prints invoice.",

            // Section 2: Industry Verticals
            sec2_title: "Industry-Specific Retail Applications",
            sec2_subtitle: "Purpose-built software suites designed around unique vertical workflows",
            vert1_title: "Trength™ Jewellery",
            vert1_sub: "Precious Metals • Gems • Hallmark HUID",
            vert1_badge: "BULLION & ORNAMENTS",
            vert1_desc: "Engineered for retail jewellers, bullion traders, and goldsmiths. Offers end-to-end ornament lifecycle tracking, live commodity rate feeds, and precision scale connectivity.",
            vert1_head: "Core Jewellery Capabilities:",
            vert1_f1: "<strong>Live Bullion Feeds:</strong> Automatic 24K, 22K, 18K Gold, Fine Silver, and Platinum MCX rate sync.",
            vert1_f2: "<strong>Hallmark HUID Compliance:</strong> BIS-mandated 6-character alphanumeric barcode scanning and verification.",
            vert1_f3: "<strong>Digital Weighing Balance Integration:</strong> RS232 / USB COM port link for auto-capturing Gross & Net weight with zero manual entry.",
            vert1_f4: "<strong>Ornament Breakdown:</strong> Stone deductions, wastage %, making charges per gram/piece, and purity karat conversion.",
            vert1_f5: "<strong>Artisan (Karigar) Ledger:</strong> Metal issue/receipt tracking, melting loss reconciliation, and job-order tracking.",
            vert1_btn: "<i class=\"bi bi-arrow-right me-1\"></i>View Jewellery Setup Guide",

            vert2_title: "Trength™ Mobile",
            vert2_sub: "Smartphones • Multi-IMEI • Service Hub",
            vert2_badge: "TELECOM & GADGETS",
            vert2_desc: "Engineered for multi-brand smartphone retail stores and gadget service centres with serialized inventory and repair job-sheet tracking.",
            vert2_head: "Core Mobile Capabilities:",
            vert2_f1: "<strong>Multi-IMEI & Serial Tracking:</strong> Dual-SIM IMEI capture, warranty expiry logs, and instant serial number search.",
            vert2_f2: "<strong>Variant Management Matrix:</strong> Organize handsets by Brand • Model • RAM • Storage • Color • Network band.",
            vert2_f3: "<strong>Trade-In & Buyback Valuation:</strong> Used smartphone condition assessment checklist with instant customer exchange voucher generation.",
            vert2_f4: "<strong>Service & Repair Job-Sheets:</strong> Technician work assignments, spare-parts billing, and customer SMS repair status updates.",
            vert2_f5: "<strong>Accessories & Recharges:</strong> Fast barcode scanning for covers, chargers, tempered glass, and prepaid plans.",
            vert2_btn: "<i class=\"bi bi-arrow-right me-1\"></i>Configure Mobile POS",

            vert3_title: "Trength™ Apparel",
            vert3_sub: "Fashion • Footwear • Multi-Grid Matrix",
            vert3_badge: "CLOTHING & TEXTILES",
            vert3_desc: "Designed for garment showrooms, boutiques, and multi-store fashion chains requiring high-speed barcode checkout and matrix inventory.",
            vert3_head: "Core Clothing Capabilities:",
            vert3_f1: "<strong>Size × Color × Fit Matrix:</strong> Multi-dimensional inventory tracking across XS/S/M/L/XL/XXL and seasonal shades.",
            vert3_f2: "<strong>Automated Barcode Tag Printing:</strong> Integrated EAN-13 / Code 128 thermal tag printing with MRP, discount, and wash-care details.",
            vert3_f3: "<strong>Fast Promotional Billing:</strong> \"Buy 2 Get 1 Free\", bundle discounts, seasonal end-of-season sales (EOSS), and store credits.",
            vert3_f4: "<strong>Alteration & Tailoring Management:</strong> Customer measurement cards, trial dates, and tailor delivery schedules.",
            vert3_f5: "<strong>Inter-Branch Transfers:</strong> Seamless warehouse-to-store distribution with computerized transfer challans.",
            vert3_btn: "<i class=\"bi bi-arrow-right me-1\"></i>Apparel Health Diagnostics",

            vert4_title: "Trength™ Electronics",
            vert4_sub: "Appliances • Serialized Stocks • AMC",
            vert4_badge: "HOME APPLIANCES",
            vert4_desc: "Built for consumer electronics, TV/audio showrooms, IT hardware stores, and home appliance dealers managing warranty contracts and financing.",
            vert4_head: "Core Electronics Capabilities:",
            vert4_f1: "<strong>Serialized Inventory & Batch Control:</strong> Track televisions, refrigerators, laptops, and AC units by unique serial barcode.",
            vert4_f2: "<strong>Extended Warranty & AMC:</strong> Sell and manage Annual Maintenance Contracts (AMC) and damage protection plans.",
            vert4_f3: "<strong>Consumer Financing & EMI Integration:</strong> Native support for Bajaj Finserv, HDFC, and PineLabs credit card EMI schemes.",
            vert4_f4: "<strong>Doorstep Delivery & Installation:</strong> Dispatch management for delivery vans, technician booking, and installation sign-offs.",
            vert4_f5: "<strong>Vendor Claims & RMA:</strong> Streamlined Return Merchandise Authorization for damaged or Dead-On-Arrival (DOA) units.",
            vert4_btn: "<i class=\"bi bi-arrow-right me-1\"></i>Electronics Setup Guide",

            // Section 3: Architecture Pillars
            sec3_title: "Platform Architecture & Enterprise Pillars",
            sec3_subtitle: "Robust foundational engineering shared across the entire Trength Suite",
            pil1_title: "Offline-First Resilience",
            pil1_desc: "Billing never stops when internet cables get cut. Counters process invoices and print receipts at sub-second speed with local SQLite/SQL ledgers, syncing transactions to the cloud once connectivity restores.",
            pil2_title: "Multi-Counter & Tablet Pairing",
            pil2_desc: "Sales associates carry wireless tablets on the showroom floor to assist shoppers, search catalogs, build carts, and hand off instantly to cashier counters for checkout.",
            pil3_title: "GST & Statutory E-Invoicing",
            pil3_desc: "Automated multi-slab GST calculation (CGST, SGST, IGST), e-Way Bill JSON generation, QR-code e-invoices, and one-click monthly GSTR-1 & GSTR-3B audit reconciliation.",
            pil4_title: "Windows Service & Command Centre",
            pil4_desc: "A dedicated native Windows daemon manages background WebSockets, port bindings (8082), automated daily bullion rate syncs, and self-healing diagnostics.",
            pil5_title: "Hardware Peripheral Ecosystem",
            pil5_desc: "Native driver bridges for thermal POS receipt printers (ESC/POS), 2D barcode scanners, customer pole displays, electronic cash drawers, and precision weighing scales.",
            pil6_title: "Omnichannel Cloud Synchronization",
            pil6_desc: "Consolidate multi-store stock positions, track store-level profitability, manage staff roles and biometric permissions, and view live executive reports anywhere.",

            // Section 4: Documentation Navigator
            sec4_title: "Documentation Navigator",
            sec4_subtitle: "Step-by-step technical guides for setup, configuration, and diagnostics",
            doc1_title: "Quick Installation",
            doc1_desc: "Setup wizard, license code verification, and tray monitor startup.",
            doc1_btn: "Read Guide",
            doc2_title: "Command Centre",
            doc2_desc: "Network adapter bindings, Windows service power, and local mDNS discovery.",
            doc2_btn: "Configure",
            doc3_title: "Troubleshooting",
            doc3_desc: "26 automated health checks with one-click Auto-Fix repair engine.",
            doc3_btn: "Diagnose",
            doc4_title: "Video Tutorials",
            doc4_desc: "Visual walkthroughs demonstrating billing, counter management, and masters.",
            doc4_btn: "Watch Videos",

            // Support Notice & Footer
            support_title: "Enterprise Support & Onboarding Assistance:",
            support_desc: "Need help setting up your store network, connecting weighing balances, or configuring multi-counter tablet pairing? Contact our engineering team at <a href=\"mailto:support@trength.in\" class=\"fw-bold\">support@trength.in</a> or visit our official portal at <a href=\"https://trength.in\" target=\"_blank\" class=\"fw-bold\">https://trength.in</a>."
        },

        hi: {
            // Header & Navigation
            doc_title: "Trength™ Suite | रिटेल ईआरपी एवं पीओएस डॉक्यूमेंटेशन",
            nav_getting_started: "शुरुआत करें",
            nav_overview: "अवलोकन (होम)",
            nav_installation: "इंस्टॉलेशन गाइड",
            nav_command_centre: "कमांड सेंटर",
            nav_configurations: "कॉन्फ़िगरेशन",
            nav_troubleshoot: "समस्या निवारण",
            nav_video_tutorials: "वीडियो ट्यूटोरियल",
            nav_jewellery_app: "ज्वैलरी एप्लीकेशन",
            nav_management: "प्रबंधन",
            nav_users: "उपयोगकर्ता (Users)",
            nav_roles: "भूमिकाएँ (Roles)",
            nav_masters: "मास्टर्स",
            nav_shop: "शॉप प्रबंधन",
            nav_products: "उत्पाद",

            // Hero Section
            hero_badge_platform: "एंटरप्राइज़ रिटेल प्लेटफ़ॉर्म",
            hero_badge_suite: "मॉड्यूलर पीओएस और ईआरपी सुइट",
            hero_heading: "<span class=\"text-primary position-relative d-inline-block\">Trength™ Suite</span> के साथ अपने रिटेल बिज़नेस को सशक्त बनाएं",
            hero_subtitle: "एक हाई-स्पीड, एंटरप्राइज़-ग्रेड रिटेल पीओएस और इन्वेंट्री मैनेजमेंट प्लेटफ़ॉर्म। Trength विशेष रूप से <strong>ज्वैलरी शोरूम</strong>, <strong>मोबाइल और टेलीकॉम स्टोर्स</strong>, <strong>कपड़ा और गारमेंट चेन्स</strong>, और <strong>कंज्यूमर इलेक्ट्रॉनिक्स रिटेलर्स</strong> के लिए तैयार किए गए सॉफ्टवेयर समाधान प्रदान करता है।",
            hero_btn_install: "<i class=\"bi bi-box-arrow-in-down me-1\"></i>त्वरित इंस्टॉलेशन गाइड",
            hero_btn_command: "<i class=\"bi bi-sliders me-1\"></i>कमांड सेंटर सेटअप",
            hero_btn_diagnostics: "<i class=\"bi bi-wrench me-1\"></i>सिस्टम डायग्नोस्टिक्स",
            hero_arch_title: "100% ऑन-प्रिमाइसेस लोकल नेटवर्क हब",
            hero_arch_desc: "क्लाउड पर शून्य निर्भरता। टैबलेट, कैशियर काउंटर, वजन कांटे और स्मार्टफोन स्कैनर के बीच त्वरित वाई-फाई सिंक।",
            hero_badge_airgap: "एयर-गैप्ड सुरक्षित",

            // Section 1: Why Choose Trength Suite
            sec1_title: "Trength™ Suite क्यों चुनें?",
            sec1_subtitle: "उन रिटेल व्यापारियों के लिए विशेष रूप से निर्मित जो तेज़ गति, कम हार्डवेयर खर्च और पूर्ण डेटा गोपनीयता चाहते हैं",

            // 8 Advantages
            adv1_title: "100% ऑन-प्रिमाइसेस और ऑफलाइन",
            adv1_badge: "पूर्ण डेटा गोपनीयता",
            adv1_desc: "आपका गोपनीय बहीखाता, ग्राहक विवरण और मुनाफ़े का डेटा पूरी तरह आपकी दुकान के अंदर सुरक्षित रहता है। लोकल डेटाबेस पर 100% काम, बिना किसी क्लाउड लीकेज या डेटा माइनिंग के।",

            adv2_title: "बारकोड स्कैनर की ज़रूरत ख़त्म",
            adv2_badge: "हार्डवेयर की भारी बचत",
            adv2_desc: "हमने आपके हार्डवेयर का खर्च घटा दिया। किसी भी स्मार्टफोन या टैबलेट के कैमरे को हाई-स्पीड बारकोड और क्यूआर स्कैनर में बदलें। महंगे लेजर स्कैनर गन खरीदने की कोई ज़रूरत नहीं।",

            adv3_title: "मल्टी-यूज़र, बिना नए हार्डवेयर के",
            adv3_badge: "अपने मौजूदा फोन/टैबलेट का उपयोग करें",
            adv3_desc: "दुकान के कर्मचारियों को तुरंत बिलिंग से जोड़ें। दुकान के वाई-फाई पर कोई भी मौजूदा मोबाइल, आईपैड या लैपटॉप बिना किसी अतिरिक्त सर्वर के सेल्स काउंटर बन जाता है।",

            adv4_title: "कोई अतिरिक्त लाइसेंस फीस नहीं",
            adv4_badge: "अनलिमिटेड स्थानीय काउंटर",
            adv4_desc: "प्रति-यूज़र कोई शुल्क नहीं। जितने चाहें उतने सेल्समैन जोड़ें, बिना किसी प्रति-सीट लाइसेंस या मासिक अतिरिक्त चार्ज के।",

            adv5_title: "समानांतर इनवॉइस जनरेशन की गारंटी",
            adv5_badge: "बिना किसी रुकावट के",
            adv5_desc: "त्योहारों की भारी भीड़ में भी काउंटर कभी नहीं अटकेगा। कई कैशियर और सेल्समैन एक साथ एक ही समय पर बिना किसी डेटाबेस लॉक के बिल बना सकते हैं।",

            adv6_title: "सेकंडों में इनवॉइस तैयार",
            adv6_badge: "अत्यंत तेज़ गति",
            adv6_desc: "कुछ ही सेकंड में पूरा जीएसटी बिल तैयार करें। तेज़ बारकोड सर्च, स्वचालित छूट और थर्मल प्रिंटर से तत्काल रसीद प्रिंट जिससे ग्राहकों की लाइनें नहीं लगतीं।",

            adv7_title: "क्यूआर स्कैन करें और बिल बनाएं",
            adv7_badge: "आसान और त्रुटिहीन",
            adv7_desc: "टाइपिंग का कोई झंझट नहीं। ग्राहक का यूपीआई या क्यूआर कोड स्कैन करते ही नाम, नंबर और पता अपने आप भर जाता है और बिल तुरंत तैयार हो जाता है।",

            adv8_title: "100% इंटरनेट से मुक्ति",
            adv8_badge: "बिना इंटरनेट के भी बिलिंग चालू",
            adv8_desc: "इंटरनेट केबल कटे या ब्रॉडबैंड बंद हो, आपकी दुकान की बिलिंग कभी नहीं रुकेगी। लोकल इंजन और ऑफलाइन डेटाबेस 24x7 निरंतर काम करते हैं।",

            // Hardware Elimination Showcase
            hw_showcase_title: "<i class=\"bi bi-camera text-success me-2\"></i>Trength हार्डवेयर का खर्च कैसे समाप्त करता है",
            hw_badge: "हार्डवेयर की भारी बचत",
            hw_f1: "<i class=\"bi bi-x-circle text-danger me-1\"></i>बारकोड गन की ज़रूरत नहीं",
            hw_f1_sub: "हर काउंटर पर हज़ारों रुपयों की बचत",
            hw_f2: "<i class=\"bi bi-check2-circle text-success me-1\"></i>मोबाइल/टैबलेट कैमरा",
            hw_f2_sub: "सेकंडों में सटीक बारकोड स्कैन",
            hw_f3: "<i class=\"bi bi-lightning-charge text-warning me-1\"></i>समानांतर इनवॉइसिंग",
            hw_f3_sub: "कई कर्मचारी एक साथ बिल बनाएं",
            hw_f4: "<i class=\"bi bi-qr-code-scan text-primary me-1\"></i>क्यूआर स्कैन और बिल तैयार",
            hw_f4_sub: "2 सेकंड में ग्राहक विवरण दर्ज",

            // Comparison Table
            table_title: "<i class=\"bi bi-arrow-left-right text-primary me-2\"></i>पारंपरिक रिटेल सॉफ्टवेयर बनाम Trength™ Suite",
            table_badge: "आधुनिक तकनीक का लाभ",
            th_factor: "सुविधा / पहलू",
            th_legacy: "पारंपरिक क्लाउड / पुराना सॉफ्टवेयर",
            th_trength: "Trength™ रिटेल सुइट",
            row1_factor: "<i class=\"bi bi-database me-2 text-primary\"></i>डेटा का स्थान और गोपनीयता",
            row1_legacy: "<span class=\"badge badge-light-danger me-2\"><i class=\"bi bi-x-circle text-danger me-1\"></i>जोखिम</span>थर्ड-पार्टी सर्वर पर संग्रहीत; क्लाउड आउटेज और डेटा लीक का खतरा।",
            row1_trength: "<span class=\"badge badge-light-success me-2\"><i class=\"bi bi-check-circle text-success me-1\"></i>100% ऑन-प्रिमाइसेस</span>डेटा कभी आपकी दुकान से बाहर नहीं जाता। पूर्ण स्थानीय नियंत्रण और गोपनीयता।",
            row2_factor: "<i class=\"bi bi-upc me-2 text-primary\"></i>बारकोड स्कैनर",
            row2_legacy: "<span class=\"badge badge-light-danger me-2\"><i class=\"bi bi-x-circle text-danger me-1\"></i>महंगा</span>हर बिलिंग स्टेशन के लिए अलग से यूएसबी/लेजर बारकोड गन खरीदना पड़ता है।",
            row2_trength: "<span class=\"badge badge-light-success me-2\"><i class=\"bi bi-check-circle text-success me-1\"></i>ज़रूरत ख़त्म</span>किसी भी मोबाइल या टैबलेट के कैमरे को तुरंत हाई-स्पीड स्कैनर में बदलें।",
            row3_factor: "<i class=\"bi bi-people me-2 text-primary\"></i>मल्टी-यूज़र विस्तार",
            row3_legacy: "<span class=\"badge badge-light-danger me-2\"><i class=\"bi bi-x-circle text-danger me-1\"></i>अत्यधिक लागत</span>महंगे टर्मिनल हार्डवेयर और क्लाइंट वर्कस्टेशन की आवश्यकता होती है।",
            row3_trength: "<span class=\"badge badge-light-success me-2\"><i class=\"bi bi-check-circle text-success me-1\"></i>शून्य अतिरिक्त हार्डवेयर</span>स्टाफ दुकान के वाई-फाई पर मौजूदा फोन, टैबलेट या लैपटॉप से बिलिंग कर सकता है।",
            row4_factor: "<i class=\"bi bi-credit-card me-2 text-primary\"></i>सॉफ्टवेयर लाइसेंसिंग",
            row4_legacy: "<span class=\"badge badge-light-danger me-2\"><i class=\"bi bi-x-circle text-danger me-1\"></i>बार-बार शुल्क</span>जैसे-जैसे स्टाफ बढ़ता है, हर महीने प्रति-यूज़र लाइसेंस फीस चुकानी पड़ती है।",
            row4_trength: "<span class=\"badge badge-light-success me-2\"><i class=\"bi bi-check-circle text-success me-1\"></i>कोई अतिरिक्त फीस नहीं</span>बिना किसी प्रति-यूज़र अतिरिक्त चार्ज के अनलिमिटेड स्थानीय काउंटर चलाएं।",
            row5_factor: "<i class=\"bi bi-speedometer me-2 text-primary\"></i>भीड़ के समय समानांतर बिलिंग",
            row5_legacy: "<span class=\"badge badge-light-danger me-2\"><i class=\"bi bi-x-circle text-danger me-1\"></i>डेटाबेस हैंग होना</span>एक साथ कई कैशियर बिल बनाएं तो सिस्टम धीमा हो जाता है और रिकॉर्ड लॉक हो जाते हैं।",
            row5_trength: "<span class=\"badge badge-light-success me-2\"><i class=\"bi bi-check-circle text-success me-1\"></i>समानांतर बिलिंग गारंटी</span>हाई-स्पीड लोकल इंजन बिना रुके एक साथ कई इनवॉइस सेकंडों में जनरेट करता है।",
            row6_factor: "<i class=\"bi bi-qr-code me-2 text-primary\"></i>ग्राहक का विवरण जोड़ना",
            row6_legacy: "<span class=\"badge badge-light-danger me-2\"><i class=\"bi bi-x-circle text-danger me-1\"></i>मैनुअल टाइपिंग</span>कैशियर हाथ से नाम, फोन नंबर और पता टाइप करता है जिससे गलतियां होती हैं।",
            row6_trength: "<span class=\"badge badge-light-success me-2\"><i class=\"bi bi-check-circle text-success me-1\"></i>क्यूआर स्कैन और बिल तैयार</span>ग्राहक का क्यूआर/यूपीआई स्कैन करते ही प्रोफाइल अपने आप लोड हो जाता है।",

            // Section 2: Industry Verticals
            sec2_title: "उद्योग-विशिष्ट रिटेल एप्लिकेशन्स",
            sec2_subtitle: "विभिन्न व्यवसायों की अनूठी कार्यप्रणालियों के लिए विशेष रूप से डिज़ाइन किए गए सॉफ्टवेयर",
            vert1_title: "Trength™ ज्वैलरी",
            vert1_sub: "सोना-चांदी • रत्न • हॉलमार्क HUID",
            vert1_badge: "बुलियन और आभूषण",
            vert1_desc: "खुदरा जौहरियों, बुलियन व्यापारियों और स्वर्णकारों के लिए विशेष रूप से निर्मित। लाइव सोने-चांदी के भाव, हॉलमार्क HUID और सीधे इलेक्ट्रॉनिक कांटे से वजन दर्ज करने की सुविधा।",
            vert1_head: "मुख्य ज्वैलरी विशेषताएं:",
            vert1_f1: "<strong>लाइव बुलियन भाव:</strong> 24K, 22K, 18K सोना, चांदी और प्लैटिनम के लाइव MCX भाव ऑटो-सिंक।",
            vert1_f2: "<strong>हॉलमार्क HUID अनुपालन:</strong> बीआईएस (BIS) 6-अंकीय अल्फ़ान्यूमेरिक बारकोड स्कैनिंग और सत्यापन।",
            vert1_f3: "<strong>इलेक्ट्रॉनिक तराजू इंटीग्रेशन:</strong> सीधे वजन कांटे (RS232/USB) से ग्रॉस और नेट वजन स्वतः दर्ज होना।",
            vert1_f4: "<strong>आभूषण विवरण:</strong> नगीना (स्टोन) कटौती, वेस्टेज %, प्रति ग्राम/पीस मेकिंग चार्ज और कैरेट शुद्धता गणना।",
            vert1_f5: "<strong>कारीगर बहीखाता:</strong> मेटल जारी/प्राप्ति, मेल्टिंग लॉस मिलान और जॉब-ऑर्डर ट्रैकिंग।",
            vert1_btn: "<i class=\"bi bi-arrow-right me-1\"></i>ज्वैलरी सेटअप गाइड देखें",

            vert2_title: "Trength™ मोबाइल",
            vert2_sub: "स्मार्टफोन • डुअल-IMEI • सर्विस हब",
            vert2_badge: "टेलीकॉम और गैजेट्स",
            vert2_desc: "मल्टी-ब्रांड स्मार्टफोन रिटेल स्टोर्स और सर्विस सेंटरों के लिए निर्मित। सीरियल नंबर इन्वेंट्री और रिपेयर जॉब-शीट ट्रैकिंग।",
            vert2_head: "मुख्य मोबाइल विशेषताएं:",
            vert2_f1: "<strong>मल्टी-IMEI और सीरियल ट्रैकिंग:</strong> डुअल-सिम IMEI बारकोड स्कैन, वारंटी एक्सपायरी और त्वरित सीरियल खोज।",
            vert2_f2: "<strong>वेरिएंट मैनेजमेंट मैट्रिक्स:</strong> ब्रांड • मॉडल • रैम • स्टोरेज • कलर के अनुसार व्यवस्थित स्टॉक।",
            vert2_f3: "<strong>पुराना फोन एक्सचेंज मूल्यांकन:</strong> फोन की स्थिति जांच चेकलिस्ट और तत्काल एक्सचेंज वाउचर।",
            vert2_f4: "<strong>सर्विस और रिपेयर जॉब-शीट:</strong> टेक्नीशियन कार्य आवंटन, स्पेयर-पार्ट्स बिलिंग और ग्राहक को एसएमएस अपडेट।",
            vert2_f5: "<strong>एक्सेसरीज़ और रिचार्ज:</strong> कवर, चार्जर, टेम्पर्ड ग्लास और प्रीपेड प्लान्स की त्वरित बारकोड स्कैनिंग।",
            vert2_btn: "<i class=\"bi bi-arrow-right me-1\"></i>मोबाइल पीओएस कॉन्फ़िगर करें",

            vert3_title: "Trength™ गारमेंट्स और वस्त्र",
            vert3_sub: "फ़ैशन • फुटवियर • साइज़ और कलर मैट्रिक्स",
            vert3_badge: "कपड़ा और परिधान",
            vert3_desc: "गारमेंट शोरूम, बुटीक और कपड़ों की रिटेल चेन के लिए डिज़ाइन किया गया। हाई-स्पीड बारकोड चेकआउट और मैट्रिक्स इन्वेंट्री।",
            vert3_head: "मुख्य गारमेंट्स विशेषताएं:",
            vert3_f1: "<strong>साइज़ × कलर × फिट मैट्रिक्स:</strong> XS/S/M/L/XL/XXL और मौसमी रंगों के अनुसार बहुआयामी स्टॉक प्रबंधन।",
            vert3_f2: "<strong>ऑटोमेटेड बारकोड टैग प्रिंटिंग:</strong> एमआरपी, डिस्काउंट और वॉश-केयर विवरण के साथ EAN-13 थर्मल टैग प्रिंटिंग।",
            vert3_f3: "<strong>फास्ट प्रमोशनल बिलिंग:</strong> \"बाय 2 गेट 1 फ्री\", बंडल डिस्काउंट, सीजनल सेल (EOSS) और स्टोर क्रेडिट्स।",
            vert3_f4: "<strong>अल्टरेशन और सिलाई प्रबंधन:</strong> ग्राहक माप कार्ड, ट्रायल तारीखें और टेलर डिलीवरी शेड्यूल।",
            vert3_f5: "<strong>इंटर-ब्रांच ट्रांसफर:</strong> वेयरहाउस से स्टोर तक चालान के साथ सुगम स्टॉक ट्रांसफर।",
            vert3_btn: "<i class=\"bi bi-arrow-right me-1\"></i>गारमेंट्स डायग्नोस्टिक्स देखें",

            vert4_title: "Trength™ इलेक्ट्रॉनिक्स",
            vert4_sub: "घरेलू उपकरण • सीरियल नंबर स्टॉक • एएमसी",
            vert4_badge: "घरेलू उपकरण एवं टीवी",
            vert4_desc: "कंज्यूमर इलेक्ट्रॉनिक्स, टीवी/ऑडियो शोरूम, आईटी हार्डवेयर और होम अप्लायंसेज डीलरों के लिए वारंटी और फाइनेंसिंग प्रबंधन।",
            vert4_head: "मुख्य इलेक्ट्रॉनिक्स विशेषताएं:",
            vert4_f1: "<strong>सीरियलाइज़्ड इन्वेंट्री और बैच कंट्रोल:</strong> टीवी, फ्रिज, लैपटॉप और एसी को उनके अनोखे सीरियल बारकोड से ट्रैक करें।",
            vert4_f2: "<strong>एक्सटेंडेड वारंटी और एएमसी:</strong> एनुअल मेंटेनेंस कॉन्ट्रैक्ट (AMC) और डैमेज प्रोटेक्शन प्लान बेचें और प्रबंधित करें।",
            vert4_f3: "<strong>कंज्यूमर फाइनेंसिंग और ईएमआई:</strong> बजाज फिनसर्व, एचडीएफसी और पाइनलैब्स 0% ब्याज ईएमआई योजनाओं का सीधा सपोर्ट।",
            vert4_f4: "<strong>डोरस्टेप डिलीवरी और इंस्टॉलेशन:</strong> डिलीवरी वैन डिस्पैच, टेक्नीशियन बुकिंग और इंस्टॉलेशन साइन-ऑफ प्रबंधन।",
            vert4_f5: "<strong>वेंडर क्लेम और आरएमए:</strong> खराब या डिफेक्टिव (DOA) यूनिट्स के लिए त्वरित रिटर्न मर्चेंडाइज ऑथराइजेशन।",
            vert4_btn: "<i class=\"bi bi-arrow-right me-1\"></i>इलेक्ट्रॉनिक्स सेटअप गाइड देखें",

            // Section 3: Architecture Pillars
            sec3_title: "प्लेटफ़ॉर्म आर्किटेक्चर और मजबूत आधार",
            sec3_subtitle: "Trength Suite के सभी एप्लिकेशन्स को शक्ति देने वाली बुनियादी तकनीक",
            pil1_title: "ऑफलाइन-फर्स्ट मजबूती",
            pil1_desc: "इंटरनेट केबल कटने पर भी बिलिंग कभी नहीं रुकती। काउंटर सब-सेकंड गति से इनवॉइस बनाते और रसीदें प्रिंट करते हैं, और इंटरनेट आने पर स्वतः सिंक होते हैं।",
            pil2_title: "मल्टी-काउंटर और टैबलेट पेयरिंग",
            pil2_desc: "सेल्समैन शोरूम में वायरलेस टैबलेट लेकर ग्राहकों को सामान दिखा सकते हैं, कार्ट बना सकते हैं और तुरंत कैशियर काउंटर पर भेज सकते हैं।",
            pil3_title: "जीएसटी एवं ई-इनवॉइसिंग",
            pil3_desc: "स्वचालित मल्टी-स्लैब जीएसटी गणना (CGST, SGST, IGST), ई-वे बिल JSON जनरेशन, क्यूआर-कोड ई-इनवॉइस और एक-क्लिक मासिक GSTR रिपोर्ट।",
            pil4_title: "विंडोज सर्विस और कमांड सेंटर",
            pil4_desc: "एक समर्पित विंडोज बैकग्राउंड डेमॉन वेबसॉकेट, पोर्ट 8082, दैनिक सोने-चांदी के भाव सिंक और सेल्फ-हीलिंग डायग्नोस्टिक्स संभालता है।",
            pil5_title: "हार्डवेयर पेरिफेरल इकोसिस्टम",
            pil5_desc: "थर्मल पीओएस रसीद प्रिंटर (ESC/POS), 2D बारकोड स्कैनर, इलेक्ट्रॉनिक कैश ड्रॉअर और डिजिटल वजन कांटे के लिए नेटिव ड्राइवर सपोर्ट।",
            pil6_title: "ओमनीचैनल क्लाउड सिंक्रोनाइज़ेशन",
            pil6_desc: "मल्टी-स्टोर स्टॉक की स्थिति, स्टोर-वार मुनाफ़ा, कर्मचारियों की बायोमेट्रिक अनुमतियां और लाइव रिपोर्ट कहीं से भी देखें।",

            // Section 4: Documentation Navigator
            sec4_title: "डॉक्यूमेंटेशन नेविगेटर",
            sec4_subtitle: "सेटअप, कॉन्फ़िगरेशन और डायग्नोस्टिक्स के लिए संपूर्ण गाइड",
            doc1_title: "त्वरित इंस्टॉलेशन",
            doc1_desc: "सेटअप विज़ार्ड, लाइसेंस कोड सत्यापन और ट्रे मॉनिटर स्टार्टअप।",
            doc1_btn: "गाइड पढ़ें",
            doc2_title: "कमांड सेंटर",
            doc2_desc: "नेटवर्क एडेप्टर बाइंडिंग, विंडोज सर्विस पॉवर और लोकल mDNS डिस्कवरी।",
            doc2_btn: "कॉन्फ़िगर करें",
            doc3_title: "समस्या निवारण",
            doc3_desc: "26 स्वचालित हेल्थ चेक्स और वन-क्लिक ऑटो-फिक्स रिपेयर इंजन।",
            doc3_btn: "जांचें",
            doc4_title: "वीडियो ट्यूटोरियल",
            doc4_desc: "बिलिंग, काउंटर मैनेजमेंट और मास्टर्स को समझाने वाले वीडियो गाइड।",
            doc4_btn: "वीडियो देखें",

            // Support Notice & Footer
            support_title: "एंटरप्राइज़ सहायता और ऑनबोर्डिंग सपोर्ट:",
            support_desc: "दुकान का नेटवर्क सेटअप करने, वजन कांटा जोड़ने, या टैबलेट बिलिंग शुरू करने में सहायता चाहिए? हमारी तकनीकी टीम से <a href=\"mailto:support@trength.in\" class=\"fw-bold\">support@trength.in</a> पर संपर्क करें या हमारे आधिकारिक पोर्टल <a href=\"https://trength.in\" target=\"_blank\" class=\"fw-bold\">https://trength.in</a> पर जाएं।"
        }
    },

    setLanguage: function(lang) {
        if (!this.translations[lang]) lang = 'en';
        this.currentLang = lang;
        try {
            localStorage.setItem('trength_docs_lang', lang);
        } catch(e) {}

        const dict = this.translations[lang];

        // Update elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // Update button states
        const btnEn = document.getElementById('btn-lang-en');
        const btnHi = document.getElementById('btn-lang-hi');
        if (btnEn && btnHi) {
            if (lang === 'hi') {
                btnEn.classList.remove('active', 'btn-primary');
                btnHi.classList.add('active');
                btnHi.classList.remove('btn-warning', 'btn-light-warning');
            } else {
                btnHi.classList.remove('active', 'btn-warning');
                btnEn.classList.add('active');
                btnEn.classList.remove('btn-light-primary');
            }
        }

        // Update document title if present
        if (dict.doc_title) {
            document.title = dict.doc_title;
        }

        // Adjust document language attribute
        document.documentElement.setAttribute('lang', lang);
    },

    init: function() {
        let savedLang = 'en';
        try {
            savedLang = localStorage.getItem('trength_docs_lang') || 'en';
        } catch(e) {}
        this.setLanguage(savedLang);
    }
};

// Global helper for buttons
function setLanguage(lang) {
    TrengthI18n.setLanguage(lang);
}

// Auto initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        TrengthI18n.init();
    });
} else {
    TrengthI18n.init();
}
